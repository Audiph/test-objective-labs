import { AppSidebar } from '@/common/components/app-sidebar';
import { ChartAreaInteractive } from '@/common/components/chart-area-interactive';
import { DataTable } from '@/common/components/data-table';
import { SectionCards } from '@/common/components/section-cards';
import { SiteHeader } from '@/common/components/site-header';
import { SidebarInset, SidebarProvider } from '@/common/components/ui/sidebar';
import Image from 'next/image';
import data from '@/data.json';

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards />
          <div className="px-4 lg:px-6">
            <ChartAreaInteractive />
          </div>
          <DataTable data={data} />
        </div>
      </div>
    </div>
  );
}
