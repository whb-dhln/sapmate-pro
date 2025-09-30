import { DashboardHeader } from "@/components/DashboardHeader";
import { StatCard } from "@/components/StatCard";
import { ProductionChart } from "@/components/ProductionChart";
import { InventoryTable } from "@/components/InventoryTable";
import { RecentActivity } from "@/components/RecentActivity";
import { Factory, Package, Truck, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader />
      
      <main className="flex-1 p-6 space-y-6 bg-background">
        <div>
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Selamat datang di sistem ERP Anda. Monitor seluruh operasi bisnis dalam satu tempat.</p>
        </div>

        {/* Stat Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Produksi Hari Ini"
            value="1,234"
            icon={Factory}
            trend={{ value: 12.5, isPositive: true }}
            variant="default"
          />
          <StatCard
            title="Stok Inventory"
            value="8,547"
            icon={Package}
            trend={{ value: 3.2, isPositive: true }}
            variant="success"
          />
          <StatCard
            title="Pengiriman Aktif"
            value="43"
            icon={Truck}
            trend={{ value: 5.1, isPositive: false }}
            variant="warning"
          />
          <StatCard
            title="Order Tertunda"
            value="12"
            icon={AlertTriangle}
            trend={{ value: 8.3, isPositive: false }}
            variant="danger"
          />
        </div>

        {/* Charts and Tables */}
        <div className="grid gap-6 lg:grid-cols-7">
          <div className="lg:col-span-4 space-y-6">
            <ProductionChart />
            <InventoryTable />
          </div>
          
          <div className="lg:col-span-3">
            <RecentActivity />
          </div>
        </div>

        {/* Additional Stats */}
        <div className="grid gap-6 md:grid-cols-3">
          <StatCard
            title="Efisiensi Produksi"
            value="94.2%"
            icon={TrendingUp}
            trend={{ value: 2.1, isPositive: true }}
            variant="success"
          />
          <StatCard
            title="Order Selesai"
            value="156"
            icon={CheckCircle}
            trend={{ value: 18.7, isPositive: true }}
            variant="success"
          />
          <StatCard
            title="Rata-rata Waktu Proses"
            value="2.4h"
            icon={Factory}
            trend={{ value: 12.3, isPositive: true }}
            variant="default"
          />
        </div>
      </main>
    </div>
  );
};

export default Index;
