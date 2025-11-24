'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Image from 'next/image';
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <div className="flex items-center gap-2">
          <Link href="/" className="font-medium text-black dark:text-white">
            Richard Franklin
          </Link>
          <span className="text-sm text-zinc-500 dark:text-zinc-600">
            @rsamf
          </span>
        </div>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Machine Learning Engineer
        </TextEffect>
      </div>
      <Image
        src="/ProfileArmor.png"
        alt="Richard Franklin"
        width={64}
        height={64}
        className="rounded-full"
      />
    </header>
  )
}
