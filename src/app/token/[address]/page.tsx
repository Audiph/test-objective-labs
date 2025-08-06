import { ChartAreaInteractive } from '@/common/components/lazy/chart-area-lazy';
import { SectionCards } from '@/common/components/section-cards';
import { fetchTokenByAddress, fetchTokens } from '@/lib/api-client';
import { notFound } from 'next/navigation';

interface TokenPageProps {
  params: Promise<{
    address: string;
  }>;
}

export const revalidate = 3600;

export async function generateStaticParams() {
  const tokens = await fetchTokens({ pageSize: 100 });
  return tokens.data.map(token => ({
    address: token.address,
  }));
}

export default async function Token({ params }: TokenPageProps) {
  const { address } = await params;
  let tokenData;
  try {
    tokenData = await fetchTokenByAddress(address);
  } catch (error) {
    console.error('Failed to fetch token:', error);
    notFound();
  }
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards 
            token={tokenData.token}
            priceData={tokenData.priceData}
          />
          <div className="px-4 lg:px-6">
            <ChartAreaInteractive 
              token={tokenData.token}
              priceData={tokenData.priceData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}