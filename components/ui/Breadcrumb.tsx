import React from 'react'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { BreadcrumbSchema } from '@/components/schema/JsonLd'

export interface BreadcrumbItem {
  name: string
  url: string
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const fullItems = [{ name: 'Home', url: '/' }, ...items]

  return (
    <>
      <BreadcrumbSchema items={fullItems} />
      <nav aria-label="Breadcrumb" className="py-3 bg-brand-light/40 border-b border-brand-light">
        <div className="container-custom">
          <ol className="flex items-center flex-wrap gap-1.5 text-xs text-brand-dark/70">
            {fullItems.map((item, idx) => {
              const isLast = idx === fullItems.length - 1
              return (
                <li key={idx} className="flex items-center gap-1.5">
                  {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-brand-primary/50" />}
                  {isLast ? (
                    <span className="font-semibold text-brand-primary-dark" aria-current="page">
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      href={item.url}
                      className="hover:text-brand-primary transition-colors flex items-center gap-1"
                    >
                      {idx === 0 && <Home className="w-3.5 h-3.5" />}
                      <span>{item.name}</span>
                    </Link>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </nav>
    </>
  )
}
