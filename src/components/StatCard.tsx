import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: "default" | "success" | "warning" | "danger";
}

export function StatCard({ title, value, icon: Icon, trend, variant = "default" }: StatCardProps) {
  const variantStyles = {
    default: "border-primary/20 bg-gradient-to-br from-card to-primary/5",
    success: "border-accent/20 bg-gradient-to-br from-card to-accent/5",
    warning: "border-warning/20 bg-gradient-to-br from-card to-warning/5",
    danger: "border-destructive/20 bg-gradient-to-br from-card to-destructive/5",
  };

  const iconStyles = {
    default: "text-primary bg-primary/10",
    success: "text-accent bg-accent/10",
    warning: "text-warning bg-warning/10",
    danger: "text-destructive bg-destructive/10",
  };

  return (
    <Card className={cn("shadow-card hover:shadow-elevated transition-all duration-300", variantStyles[variant])}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={cn("p-2 rounded-lg", iconStyles[variant])}>
          <Icon className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <p className={cn("text-xs mt-2", trend.isPositive ? "text-accent" : "text-destructive")}>
            {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}% dari bulan lalu
          </p>
        )}
      </CardContent>
    </Card>
  );
}
