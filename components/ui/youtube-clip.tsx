import { cn } from '@/lib/utils'

type YouTubeClipProps = {
  videoId: string
  className?: string
}

/**
 * A muted, autoplaying, looping YouTube embed with the control bar hidden.
 *
 * A transparent overlay sits on top of the iframe so hovering never triggers
 * YouTube's title bar or logo, and so clicks fall through to any wrapping
 * trigger instead of being swallowed by the player. Note that YouTube still
 * shows its title, channel, and logo for a few seconds each time the video
 * starts or loops; there is no supported embed parameter to suppress that.
 * Prefer a self-hosted <video> for short clips where that matters.
 */
export function YouTubeClip({ videoId, className }: YouTubeClipProps) {
  const src =
    `https://www.youtube.com/embed/${videoId}` +
    `?autoplay=1&mute=1&loop=1&controls=0&playsinline=1&rel=0&playlist=${videoId}`

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <iframe
        src={src}
        className="h-full w-full"
        allow="autoplay; encrypted-media"
        title="Project clip"
      />
      <div className="absolute inset-0" aria-hidden />
    </div>
  )
}
