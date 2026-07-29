import { SiGithub } from '@icons-pack/react-simple-icons'

import { Link } from '../ui/link'

export function GithubStarButton() {
  return (
    <Link
      href='https://github.com/0xAdham1'
      className='flex h-8 items-center gap-2 overflow-hidden rounded-4xl border bg-muted px-3 font-medium'
    >
      <SiGithub className='size-4' /> GitHub
    </Link>
  )
}
