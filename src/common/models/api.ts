import { z } from 'zod'

export const tokenSchema = z.object({
  address: z.string(),
  chainId: z.number(),
  name: z.string(),
  symbol: z.string(),
  decimals: z.number(),
  logoURI: z.string(),
})

export const paginationSchema = z.object({
  currentPage: z.number(),
  pageSize: z.number(),
  totalItems: z.number(),
  totalPages: z.number(),
  hasNextPage: z.boolean(),
  hasPreviousPage: z.boolean(),
})

export const apiResponseSchema = z.object({
  data: z.array(tokenSchema),
  pagination: paginationSchema,
})

export const priceDataSchema = z.object({
  timestamp: z.number(),
  price: z.number(),
})

export const tokenDetailResponseSchema = z.object({
  token: tokenSchema,
  priceData: z.array(priceDataSchema),
})

export type Token = z.infer<typeof tokenSchema>
export type PaginationInfo = z.infer<typeof paginationSchema>
export type ApiResponse = z.infer<typeof apiResponseSchema>
export type PriceData = z.infer<typeof priceDataSchema>
export type TokenDetailResponse = z.infer<typeof tokenDetailResponseSchema>

export interface FetchTokensParams {
  page?: number
  pageSize?: number
  search?: string
}
