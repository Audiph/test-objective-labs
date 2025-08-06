import { NextRequest, NextResponse } from 'next/server'
import tokensData from '@/data.json'
import priceData from '@/mockPriceData.json'
import { API_DETAIL_DELAY_MS, HTTP_NOT_FOUND } from '@/common/constants'

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ address: string }> }
) {
  const { address } = await params
  await new Promise((resolve) => setTimeout(resolve, API_DETAIL_DELAY_MS))
  const token = tokensData.find((t) => t.address.toLowerCase() === address.toLowerCase())
  if (!token) {
    return NextResponse.json({ error: 'Token not found' }, { status: HTTP_NOT_FOUND })
  }
  return NextResponse.json({
    token,
    priceData: priceData.prices,
  })
}
