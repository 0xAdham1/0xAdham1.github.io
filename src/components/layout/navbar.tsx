'use client'

import { useTranslations } from 'next-intl'

import { Link } from '@/components/ui/link'
import { HEADER_LINKS } from '@/constants/navigation'
import { usePathname } from '@/i18n/routing'

export function Navbar() {
  const pathname = usePathname()
  const t = useTranslations()

  return (
    <nav className='hidden md:block'>
      <ul className='flex items-center gap-1'>
        {HEADER_LINKS.map((link, i) => (
          <li key={link.href}>
            <Link
              href={link.href}
              data-active={pathname === link.href}
              className='group inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-active:text-foreground'
            >
              <span className='font-mono text-xs text-primary/70'>{`(0${i + 1})`}</span>
              {t(link.labelKey)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
