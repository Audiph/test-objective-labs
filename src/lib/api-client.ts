import {
  apiResponseSchema,
  tokenDetailResponseSchema,
  type ApiResponse,
  type TokenDetailResponse,
  type FetchTokensParams,
} from '@/common/models/api'

export type {
  Token,
  PaginationInfo,
  ApiResponse,
  PriceData,
  TokenDetailResponse,
} from '@/common/models/api'

export async function fetchTokens(params: FetchTokensParams = {}): Promise<ApiResponse> {
  const { page = 1, pageSize = 5, search = '' } = params
  const url = new URL('/api/tokens', process.env.BASE_URL || 'http://localhost:3000')
  url.searchParams.set('page', page.toString())
  url.searchParams.set('pageSize', pageSize.toString())
  if (search) {
    url.searchParams.set('search', search)
  }
  try {
    const response = await fetch(url.toString())
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }
    const data = await response.json()
    return apiResponseSchema.parse(data)
  } catch (error) {
    console.error('Error fetching tokens:', error)
    throw error
  }
}

export async function fetchTokenByAddress(address: string): Promise<TokenDetailResponse> {
  const url = new URL(`/api/tokens/${address}`, process.env.BASE_URL || 'http://localhost:3000')

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
