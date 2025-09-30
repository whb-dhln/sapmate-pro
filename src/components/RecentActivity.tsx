import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Truck, CheckCircle, AlertCircle } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "production",
    message: "Produksi batch #1234 selesai",
    time: "5 menit lalu",
    icon: CheckCircle,
    variant: "success" as const,
  },
  {
    id: 2,
    type: "shipping",
    message: "Pengiriman #5678 dalam perjalanan",
    time: "12 menit lalu",
    icon: Truck,
    variant: "default" as const,
  },
  {
    id: 3,
    type: "inventory",
    message: "Stok Produk B mencapai level minimum",
    time: "28 menit lalu",
    icon: AlertCircle,
    variant: "warning" as const,
  },
  {
    id: 4,
    type: "packaging",
    message: "Packaging order #9012 selesai",
    time: "1 jam lalu",
    icon: Package,
    variant: "success" as const,
  },
];

export function RecentActivity() {
  const variantStyles = {
    default: "text-primary bg-primary/10",
    success: "text-accent bg-accent/10",
    warning: "text-warning bg-warning/10",
    danger: "text-destructive bg-destructive/10",
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle>Aktivitas Terbaru</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <div className={`p-2 rounded-lg ${variantStyles[activity.variant]}`}>
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{activity.message}</p>
                <p className="text-sm text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
