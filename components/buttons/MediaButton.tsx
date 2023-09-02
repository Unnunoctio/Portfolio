
interface MediaButtonProps {
  href: string
  ariaLabel: string
  style?: string
  children?: React.ReactNode
}

export const MediaButton: React.FC<MediaButtonProps> = ({ href, ariaLabel, style, children }): React.ReactNode => {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target='_blank'
      rel='noreferrer'
      className={`px-4 py-2.5 text-lg font-medium text-text-secondary bg-button-bg rounded-2xl shadow-btn transition-colors hover:text-text-hover hover:bg-button-hover ${style as string}`}
    >
      {children}
    </a>
  )
}
