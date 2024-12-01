import dynamic from 'next/dynamic';
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { getAnalytics } from "@/actions/get-analytics";



const DataCard = dynamic(() => 
 import('./_components/data-card').then(mod => mod.DataCard)
);

const Chart = dynamic(() => 
 import('./_components/chart').then(mod => mod.Chart)
);

const AnalyticsPage = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/dashboard");
  }

  const {
    data,
    totalRevenue,
    totalSales,
  } = await getAnalytics(userId);

  return ( 
    <div className="p-6 bg-white dark:bg-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <DataCard
          label="Total Revenue"
          value={totalRevenue}
          shouldFormat
        />
        <DataCard
          label="Total Sales"
          value={totalSales}
        />
      </div>
      <Chart
        data={data}
      />
    </div>
   );
}
 
export default AnalyticsPage;