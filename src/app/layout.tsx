import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { SidebarInset, SidebarProvider } from '@/common/components/ui'
import { AppSidebar, SiteHeader } from '@/common/components'
import { ToastProvider } from '@/common/components/lazy'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'DeFi Token Dashboard',
  description:
    'Track and monitor popular DeFi tokens including WETH, USDC, USDT, WBTC, and stablecoins. View real-time prices and manage your cryptocurrency portfolio across Ethereum mainnet.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SidebarProvider
          style={
            {
              '--sidebar-width': 'calc(var(--spacing) * 72)',
              '--header-height': 'calc(var(--spacing) * 12)',
            } as React.CSSProperties
          }
        >
          <AppSidebar variant="inset" />
          <SidebarInset>
            <SiteHeader />
            {children}
          </SidebarInset>
        </SidebarProvider>
        <ToastProvider />
      </body>
    </html>
  )
}
