import { NextRequest, NextResponse } from 'next/server'
import data from '@/data.json'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const page = parseInt(searchParams.get('page') || '1', 10)
  const pageSize = parseInt(searchParams.get('pageSize') || '5', 10)
  const search = searchParams.get('search') || ''
  await new Promise((resolve) => setTimeout(resolve, 300))
  let filteredData = data
  if (search) {
    const searchLower = search.toLowerCase()
    filteredData = data.filter(
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
  return NextResponse.json({
    data: paginatedData,
    pagination: {
      currentPage: page,
      pageSize: pageSize,
      totalItems: totalItems,
      totalPages: totalPages,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    },
  })
}
