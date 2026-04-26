import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LogoMoas } from '@/components/LogoMoas'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Posts App - Grupo Moas',
  description: 'Aplicação de listagem e detalhes de posts',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <main className="min-h-screen bg-gradient-to-br from-[#b8c4ba] to-[#2f3d3c]">
          {children}
        </main>
        
        <footer className="bg-[#2f3d3c] text-white py-6 mt-auto">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-4">
              <LogoMoas width={40} height={40} />
            </div>
            <p className="text-sm text-white/70">
              © 2026 Grupo Moas - Todos os direitos reservados
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}