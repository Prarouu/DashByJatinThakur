import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import SectionCards from "@/components/Section-cards";
import TableSection from "./Payments/PaymentPage";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 py-8">
      <div className="bg-black/5 p-4 rounded-2xl lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-black/5 p-4 rounded-2xl lg:col-span-2">
        <SectionCards />
      </div>
      <div className="bg-black/5 p-4 rounded-2xl lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>

      <div className="bg-black/5 p-4 rounded-2xl lg:col-span-2">
        <AppPieChart />
      </div>
      <div className="bg-black/5 p-4 rounded-2xl lg:col-span-3">
        <TableSection />
      </div>
      <div className="bg-black/5 p-4 rounded-2xl">
        <CardList />
      </div>
    </div>
  );
}
