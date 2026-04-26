import Image from 'next/image'

interface LogoMoasProps {
  className?: string
  width?: number
  height?: number
}

export function LogoMoas({ className = "", width = 100, height = 100 }: LogoMoasProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/assets/images/logo-moas.svg"
        alt="Logo Grupo Moas"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </div>
  )
}