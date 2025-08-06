'use client'

import * as React from 'react'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/common/components/ui/dropdown-menu'

import type { DropdownContentInternalProps } from '@/common/models/components'

export function DropdownContentInternal({ table, children }: DropdownContentInternalProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {table
          .getAllColumns()
          .filter((column: any) => typeof column.accessorFn !== 'undefined' && column.getCanHide())
          .map((column: any) => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            )
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
