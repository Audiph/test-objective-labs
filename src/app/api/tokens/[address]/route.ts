import { NextRequest, NextResponse } from 'next/server';
import tokensData from '@/data.json';
import priceData from '@/mockPriceData.json';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ address: string }> }
) {
  const { address } = await params;
  await new Promise(resolve => setTimeout(resolve, 100));
  const token = tokensData.find(
    t => t.address.toLowerCase() === address.toLowerCase()
  );
  if (!token) {
    return NextResponse.json(
      { error: 'Token not found' },
      { status: 404 }
    );
  }
  return NextResponse.json({
    token,
    priceData: priceData.prices
  });
}