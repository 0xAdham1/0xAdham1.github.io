'use client'

import {
  SiBurpsuite,
  SiC,
  SiDocker,
  SiGit,
  SiGithub,
  SiGnubash,
  SiGo,
  SiHackthebox,
  SiKalilinux,
  SiLinux,
  SiMetasploit,
  SiObsidian,
  SiOwasp,
  SiPhp,
  SiPython,
  SiTryhackme,
  SiVirtualbox,
  SiVmware,
  SiWireshark,
} from '@icons-pack/react-simple-icons'
import { ZapIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Marquee } from '@/components/ui/marquee'

export function StacksCard() {
  const t = useTranslations()

  return (
    <div className='flex h-60 flex-col gap-2 overflow-hidden rounded-2xl p-4 shadow-feature-card lg:p-6'>
      <div className='flex items-center gap-2'>
        <ZapIcon className='size-4.5' />
        <h2 className='text-sm'>{t('homepage.about-me.stacks')}</h2>
      </div>
      {/* Languages + offensive-security tooling */}
      <Marquee gap='20px' className='py-4'>
        <SiPython className='size-10' />
        <SiPhp className='size-10' />
        <SiGo className='size-10' />
        <SiC className='size-10' />
        <SiGnubash className='size-10' />
        <SiBurpsuite className='size-10' />
        <SiMetasploit className='size-10' />
        <SiWireshark className='size-10' />
        <SiOwasp className='size-10' />
      </Marquee>
      {/* Platforms, systems + workflow tools */}
      <Marquee gap='20px' className='py-4' reverse>
        <SiKalilinux className='size-10' />
        <SiLinux className='size-10' />
        <SiVmware className='size-10' />
        <SiVirtualbox className='size-10' />
        <SiDocker className='size-10' />
        <SiGit className='size-10' />
        <SiGithub className='size-10' />
        <SiObsidian className='size-10' />
        <SiHackthebox className='size-10' />
        <SiTryhackme className='size-10' />
      </Marquee>
    </div>
  )
}
