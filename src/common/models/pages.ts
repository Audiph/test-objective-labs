export interface PageProps {
  searchParams: Promise<{
    page?: string;
    pageSize?: string;
    search?: string;
  }>;
}

export interface TokenPageProps {
  params: Promise<{
    address: string;
  }>;
}