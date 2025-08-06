import { toast } from 'sonner'

export async function copyToClipboard(text: string): Promise<void> {
  await navigator.clipboard.writeText(text)
  toast.success('Address copied to clipboard')
}
