import { DataTable } from '@/common/components/data-table'
import { fetchTokens } from '@/lib/api-client'
import type { PageProps } from '@/common/models/pages'
import { ISR_REVALIDATE_SECONDS, DEFAULT_PAGE_SIZE } from '@/common/constants'

export const revalidate = ISR_REVALIDATE_SECONDS

async function TokenTable({ searchParams }: { searchParams: PageProps['searchParams'] }) {
  const params = await searchParams
  const page = parseInt(params.page || '1', 10)
  const pageSize = parseInt(params.pageSize || DEFAULT_PAGE_SIZE.toString(), 10)
  const search = params.search || ''
  const response = await fetchTokens({ page, pageSize, search })
  return (
    <DataTable
      data={response.data}
      pagination={response.pagination}
      searchParams={{ page, pageSize, search }}
    />
  )
}

export default async function Home({ searchParams }: PageProps) {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <TokenTable searchParams={searchParams} />
        </div>
      </div>
    </div>
  )
}
