"use client"

import dynamic from 'next/dynamic'

const Toaster = dynamic(
  () => import('@/common/components/ui/sonner').then(mod => mod.Toaster),
  {
    ssr: false
  }
)

export function ToastProvider() {
  return <Toaster />
}