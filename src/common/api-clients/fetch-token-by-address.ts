import { DEFAULT_PORT } from '@/common/constants'
import { TokenDetailResponse, tokenDetailResponseSchema } from '@/common/models'

export async function fetchTokenByAddress(address: string): Promise<TokenDetailResponse> {
  const url = new URL(
    `/api/tokens/${address}`,
    process.env.BASE_URL || `http://localhost:${DEFAULT_PORT}`
  )

  try {
    const response = await fetch(url.toString())
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }
    const data = await response.json()
    return tokenDetailResponseSchema.parse(data)
  } catch (error) {
    console.error('Error fetching token by address:', error)
    throw error
  }
}
