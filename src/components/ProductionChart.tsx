import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Sen", target: 100, actual: 98 },
  { name: "Sel", target: 100, actual: 105 },
  { name: "Rab", target: 100, actual: 95 },
  { name: "Kam", target: 100, actual: 110 },
  { name: "Jum", target: 100, actual: 102 },
  { name: "Sab", target: 100, actual: 88 },
  { name: "Min", target: 100, actual: 75 },
];

export function ProductionChart() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle>Produksi Mingguan</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)"
              }}
            />
            <Legend />
            <Bar dataKey="target" fill="hsl(var(--muted))" name="Target" />
            <Bar dataKey="actual" fill="hsl(var(--primary))" name="Aktual" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
