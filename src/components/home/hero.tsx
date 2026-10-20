'use client'

import { motion } from 'motion/react'

import { BlurImage } from '@/components/blur-image'
import { Link } from '@/components/ui/link'

const INDEX = [
  { n: '01', label: 'Research', href: '/research' },
  { n: '02', label: 'Projects', href: '/projects' },
  { n: '03', label: 'Blog', href: '/blog' },
] as const

const LINES = ['OFFENSIVE', 'SECURITY', 'RESEARCH'] as const

export function Hero() {
  return (
    <section className='flex min-h-[calc(100svh-6rem)] flex-col justify-between py-10'>
      {/* top meta row */}
      <div className='flex items-start justify-between gap-6'>
        <div className='font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase'>
          <span className='text-primary'>( 00 )</span> — 0xAdham / Offensive Security
        </div>
        <Avatar />
      </div>

      {/* oversized editorial headline */}
      <div className='py-8'>
        <h1 className='font-semibold tracking-tighter text-foreground'>
          {LINES.map((line, i) => (
            <motion.span
              key={line}
              className={line === 'SECURITY' ? 'block text-primary' : 'block'}
              style={{ fontSize: 'clamp(2.75rem, 12vw, 8.5rem)', lineHeight: 0.9 }}
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: 'easeOut', duration: 0.45, delay: i * 0.08 }}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className='mt-8 max-w-xl font-mono text-sm leading-relaxed text-muted-foreground'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          Web CTF player and bug bounty hunter. I break access control, authentication and
          server-side logic to learn how systems get exploited — and fixed.
        </motion.p>

        {/* bracket CTAs */}
        <motion.div
          className='mt-8 flex flex-wrap items-center gap-4 font-mono text-sm'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          <Link
            href='/research'
            className='border border-primary/60 px-4 py-2 text-primary transition-colors hover:bg-primary hover:text-primary-foreground'
          >
            [ view research → ]
          </Link>
          <Link
            href='/blog'
            className='border border-border px-4 py-2 text-muted-foreground transition-colors hover:border-foreground hover:text-foreground'
          >
            [ read writeups ]
          </Link>
        </motion.div>
      </div>

      {/* bottom index bar */}
      <div className='flex flex-wrap items-end justify-between gap-6 border-t border-border pt-6'>
        <div className='flex flex-wrap gap-x-10 gap-y-3 font-mono text-sm'>
          {INDEX.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='group inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground'
            >
              <span className='text-primary'>({item.n})</span>
              <span className='underline-offset-4 group-hover:underline'>{item.label}</span>
            </Link>
          ))}
        </div>
        <div className='font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase'>
          Egypt · UTC/GMT +2 — scroll ↓
        </div>
      </div>
    </section>
  )
}

function Avatar() {
  return (
    <motion.div
      className='relative hidden size-24 shrink-0 md:block'
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <BlurImage
        src='/images/avatar.png'
        className='size-24 rounded-full'
        width={1024}
        height={1024}
        alt='0xAdham'
        lazy={false}
      />
      <div className='absolute inset-0 -z-10 bg-linear-to-tl from-[#872627] to-[#1e1d1c] opacity-60 blur-2xl' />
    </motion.div>
  )
}
