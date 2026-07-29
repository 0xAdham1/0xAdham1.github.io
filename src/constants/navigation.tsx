import { SiGithub, SiHackthebox, SiTryhackme } from '@icons-pack/react-simple-icons'
import {
  FlagIcon,
  FlameIcon,
  GlobeIcon,
  LayoutDashboardIcon,
  MessagesSquareIcon,
  PencilIcon,
  ShieldIcon,
  UserCircleIcon,
  UsersIcon,
} from 'lucide-react'

import {
  SITE_CYBERTALENTS_URL,
  SITE_FLAGYARD_URL,
  SITE_GITHUB_URL,
  SITE_HACKTHEBOX_URL,
  SITE_TRYHACKME_URL,
  SITE_WEBVERSE_URL,
} from './site'

export const HEADER_LINKS = [
  {
    icon: <PencilIcon />,
    href: '/blog',
    // i18n-check t('common.labels.blog')
    labelKey: 'common.labels.blog',
  },
  {
    icon: <FlameIcon />,
    href: '/projects',
    // i18n-check t('common.labels.projects')
    labelKey: 'common.labels.projects',
  },
  {
    icon: <UserCircleIcon />,
    href: '/about',
    // i18n-check t('common.labels.about')
    labelKey: 'common.labels.about',
  },
] as const

export const FOOTER_GROUPS = [
  {
    id: 'main',
    links: [
      // i18n-check t('common.labels.home')
      { href: '/', labelKey: 'common.labels.home' },
      // i18n-check t('common.labels.blog')
      { href: '/blog', labelKey: 'common.labels.blog' },
      // i18n-check t('common.labels.about')
      { href: '/about', labelKey: 'common.labels.about' },
    ],
  },
  {
    id: 'site',
    links: [
      // i18n-check t('common.labels.projects')
      { href: '/projects', labelKey: 'common.labels.projects' },
    ],
  },
  {
    id: 'social',
    links: [
      // i18n-check t('common.labels.github')
      { href: SITE_GITHUB_URL, labelKey: 'common.labels.github' },
    ],
  },
] as const

export const ACCOUNT_SIDEBAR_LINKS = [
  {
    href: '/account',
    // i18n-check t('common.labels.account')
    labelKey: 'common.labels.account',
  },
  {
    href: '/account/settings',
    // i18n-check t('common.labels.settings')
    labelKey: 'common.labels.settings',
  },
] as const

export const ADMIN_SIDEBAR_LINKS = [
  {
    titleKey: 'common.labels.general',
    links: [
      {
        titleKey: 'common.labels.dashboard',
        url: '/admin',
        icon: <LayoutDashboardIcon />,
      },
      {
        titleKey: 'common.labels.users',
        url: '/admin/users',
        icon: <UsersIcon />,
      },
      {
        titleKey: 'common.labels.comments',
        url: '/admin/comments',
        icon: <MessagesSquareIcon />,
      },
    ],
  },
] as const

export const SOCIAL_LINKS = [
  {
    href: SITE_GITHUB_URL,
    title: 'GitHub',
    icon: <SiGithub />,
  },
  {
    href: SITE_HACKTHEBOX_URL,
    title: 'Hack The Box',
    icon: <SiHackthebox />,
  },
  {
    href: SITE_TRYHACKME_URL,
    title: 'TryHackMe',
    icon: <SiTryhackme />,
  },
  {
    href: SITE_FLAGYARD_URL,
    title: 'FlagYard',
    icon: <FlagIcon />,
  },
  {
    href: SITE_WEBVERSE_URL,
    title: 'WebVerse Labs',
    icon: <GlobeIcon />,
  },
  {
    href: SITE_CYBERTALENTS_URL,
    title: 'CyberTalents',
    icon: <ShieldIcon />,
  },
] as const
