import type { Token, PaginationInfo, PriceData } from './api';
import type { Table } from "@tanstack/react-table";

export interface DataTableProps {
  data: Token[];
  pagination: PaginationInfo;
  searchParams: {
    page: number;
    pageSize: number;
    search: string;
  };
}

export interface SectionCardsProps {
  token?: Token;
  priceData?: PriceData[];
}

export interface ChartAreaInteractiveProps {
  token?: Token;
  priceData?: PriceData[];
}

export interface ColumnVisibilityDropdownProps {
  table: Table<Token>;
}

export interface DropdownContentInternalProps {
  table: Table<Token>;
  children: React.ReactNode;
}