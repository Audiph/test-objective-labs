'use client'

import * as React from 'react'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/common/components/ui'
import type { Column } from '@tanstack/react-table'
import type { Token } from '@/common/models/api'
import type { DropdownContentInternalProps } from '@/common/models/components'

export function DropdownContentInternal({ table, children }: DropdownContentInternalProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {table
          .getAllColumns()
          .filter(
            (column: Column<Token>) =>
              typeof column.accessorFn !== 'undefined' && column.getCanHide()
          )
          .map((column: Column<Token>) => {
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
