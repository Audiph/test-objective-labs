"use client"

import dynamic from 'next/dynamic'
import { Button } from '@/common/components/ui/button'
import { IconLayoutColumns, IconChevronDown } from '@tabler/icons-react'
import { Skeleton } from '@/common/components/ui/skeleton'

const DropdownContent = dynamic(
  () => import('./dropdown-content-internal').then(mod => mod.DropdownContentInternal),
  {
    loading: () => null,
    ssr: false
  }
)

interface ColumnVisibilityDropdownProps {
  table: any
}

export function ColumnVisibilityDropdown({ table }: ColumnVisibilityDropdownProps) {
  return (
    <DropdownContent table={table}>
      <Button className='hover:text-white' variant="outline" size="sm">
        <IconLayoutColumns />
        <span className="hidden lg:inline">Customize Columns</span>
        <span className="lg:hidden">Columns</span>
        <IconChevronDown />
      </Button>
    </DropdownContent>
  )
}