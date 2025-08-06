import { z } from 'zod';

const tokenSchema = z.object({
  address: z.string(),
  chainId: z.number(),
  name: z.string(),
  symbol: z.string(),
  decimals: z.number(),
  logoURI: z.string(),
});

const paginationSchema = z.object({
  currentPage: z.number(),
  pageSize: z.number(),
  totalItems: z.number(),
  totalPages: z.number(),
  hasNextPage: z.boolean(),
  hasPreviousPage: z.boolean(),
});

const apiResponseSchema = z.object({
  data: z.array(tokenSchema),
  pagination: paginationSchema,
});

export type Token = z.infer<typeof tokenSchema>;
export type PaginationInfo = z.infer<typeof paginationSchema>;
export type ApiResponse = z.infer<typeof apiResponseSchema>;

interface FetchTokensParams {
  page?: number;
  pageSize?: number;
  search?: string;
}

export async function fetchTokens(params: FetchTokensParams = {}): Promise<ApiResponse> {
  const { page = 1, pageSize = 5, search = '' } = params;
  const url = new URL('/api/tokens', process.env.BASE_URL || 'http://localhost:3000');
  url.searchParams.set('page', page.toString());
  url.searchParams.set('pageSize', pageSize.toString());
  if (search) {
    url.searchParams.set('search', search);
  }
  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const data = await response.json();
    return apiResponseSchema.parse(data);
  } catch (error) {
    console.error('Error fetching tokens:', error);
    throw error;
  }
}

const priceDataSchema = z.object({
  timestamp: z.number(),
  price: z.number(),
});

const tokenDetailResponseSchema = z.object({
  token: tokenSchema,
  priceData: z.array(priceDataSchema),
});

export type PriceData = z.infer<typeof priceDataSchema>;
export type TokenDetailResponse = z.infer<typeof tokenDetailResponseSchema>;

export async function fetchTokenByAddress(address: string): Promise<TokenDetailResponse> {
  const url = new URL(`/api/tokens/${address}`, process.env.BASE_URL || 'http://localhost:3000');
  
  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const data = await response.json();
    return tokenDetailResponseSchema.parse(data);
  } catch (error) {
    console.error('Error fetching token by address:', error);
    throw error;
  }
}
