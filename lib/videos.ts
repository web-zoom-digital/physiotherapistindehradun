import fs from 'fs'
import path from 'path'
import { VIDEO_METADATA_MAP, VideoMetadata } from '@/data/videoMetadata'

export interface VideoItem {
  id: string
  filename: string
  url: string // '/video/filename.mp4'
  title: string
  category: string
  description: string
  sizeBytes: number
  sizeFormatted: string
  mimeType: string
  extension: string
  posterUrl?: string
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`
}

function cleanFilenameTitle(filename: string): string {
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, '')
  // Replace underscores, hyphens, and standard prefixes
  const cleaned = nameWithoutExt
    .replace(/^VID[-_]?/i, 'Video ')
    .replace(/^IMG[-_]?/i, 'Session ')
    .replace(/[-_]/g, ' ')
    .trim()
  return cleaned
}

/**
 * Server-side utility that automatically discovers all supported video files
 * located inside `public/video/`.
 * 
 * Served browser path is `/video/<filename>`.
 */
export function getVideos(): VideoItem[] {
  const videoDir = path.join(process.cwd(), 'public', 'video')

  if (!fs.existsSync(videoDir)) {
    return []
  }

  const supportedExtensions = ['.mp4', '.mov', '.webm', '.m4v', '.ogg']

  try {
    const entries = fs.readdirSync(videoDir, { withFileTypes: true })

    const videos: VideoItem[] = []

    for (const entry of entries) {
      if (!entry.isFile()) continue

      const ext = path.extname(entry.name).toLowerCase()
      if (!supportedExtensions.includes(ext)) continue

      const filePath = path.join(videoDir, entry.name)
      let sizeBytes = 0

      try {
        const stat = fs.statSync(filePath)
        sizeBytes = stat.size
      } catch {
        // Fallback if stat fails
        sizeBytes = 0
      }

      const mimeType =
        ext === '.mov'
          ? 'video/quicktime'
          : ext === '.webm'
          ? 'video/webm'
          : ext === '.ogg'
          ? 'video/ogg'
          : 'video/mp4'

      const metadata: VideoMetadata | undefined = VIDEO_METADATA_MAP[entry.name]

      videos.push({
        id: entry.name.replace(/[^a-zA-Z0-9_-]/g, '_'),
        filename: entry.name,
        url: `/video/${encodeURIComponent(entry.name)}`,
        title: metadata?.title || cleanFilenameTitle(entry.name),
        category: metadata?.category || 'Clinical Care',
        description:
          metadata?.description ||
          'Clinical rehabilitation and therapy demonstration at RonEx Physiotherapy in Dehradun.',
        sizeBytes,
        sizeFormatted: formatBytes(sizeBytes),
        mimeType,
        extension: ext.replace('.', '').toUpperCase(),
        posterUrl: metadata?.posterUrl,
      })
    }

    // Sort: Ensure consistent ordering
    return videos.sort((a, b) => a.filename.localeCompare(b.filename))
  } catch (err) {
    console.error('Error discovering videos from public/video:', err)
    return []
  }
}

/**
 * Helper to fetch a single video by ID or filename
 */
export function getVideoById(id: string): VideoItem | undefined {
  const videos = getVideos()
  return videos.find((v) => v.id === id || v.filename === id)
}
