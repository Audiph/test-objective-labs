'use client';

import dynamic from 'next/dynamic';
import { Button } from '@/common/components/ui/button';
import { IconLayoutColumns, IconChevronDown } from '@tabler/icons-react';
import { Table } from '@tanstack/react-table';

const DropdownContent = dynamic(
  () => import('./dropdown-content-internal').then((mod) => mod.DropdownContentInternal),
  {
    loading: () => null,
    ssr: false,
  }
);

interface ColumnVisibilityDropdownProps {
  table: Table<{
    address: string;
    chainId: number;
    name: string;
    symbol: string;
    decimals: number;
    logoURI: string;
  }>;
}

export function ColumnVisibilityDropdown({ table }: ColumnVisibilityDropdownProps) {
  return (
    <DropdownContent table={table}>
      <Button className="hover:text-white" variant="outline" size="sm">
        <IconLayoutColumns />
        <span className="hidden lg:inline">Customize Columns</span>
        <span className="lg:hidden">Columns</span>
        <IconChevronDown />
      </Button>
    </DropdownContent>
  );
}
