import { DEFAULT_PAGE_SIZE, DEFAULT_PORT } from '@/common/constants'
import { ApiResponse, apiResponseSchema, FetchTokensParams } from '@/common/models'
import tokensData from '@/data.json'

export async function fetchTokens(params: FetchTokensParams = {}): Promise<ApiResponse> {
  const { page = 1, pageSize = DEFAULT_PAGE_SIZE, search = '' } = params
  const url = new URL('/api/tokens', process.env.BASE_URL || `http://localhost:${DEFAULT_PORT}`)
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
    if (typeof window === 'undefined') {
      let filteredData = tokensData
      if (search) {
        const searchLower = search.toLowerCase()
        filteredData = tokensData.filter(
          (item) =>
            item.name.toLowerCase().includes(searchLower) ||
            item.symbol.toLowerCase().includes(searchLower) ||
            item.address.toLowerCase().includes(searchLower)
        )
      }
      const totalItems = filteredData.length
      const totalPages = Math.ceil(totalItems / pageSize)
      const startIndex = (page - 1) * pageSize
      const endIndex = startIndex + pageSize
      const paginatedData = filteredData.slice(startIndex, endIndex)
      return {
        data: paginatedData,
        pagination: {
          currentPage: page,
          pageSize: pageSize,
          totalItems: totalItems,
          totalPages: totalPages,
          hasNextPage: page < totalPages,
          hasPreviousPage: page > 1,
        },
      }
    }
    console.error('Error fetching tokens:', error)
    throw error
  }
}
