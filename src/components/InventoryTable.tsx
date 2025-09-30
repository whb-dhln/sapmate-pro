import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const inventory = [
  { id: "P001", name: "Produk A", stock: 150, status: "normal", location: "Gudang A" },
  { id: "P002", name: "Produk B", stock: 45, status: "low", location: "Gudang A" },
  { id: "P003", name: "Produk C", stock: 200, status: "normal", location: "Gudang B" },
  { id: "P004", name: "Produk D", stock: 12, status: "critical", location: "Gudang C" },
  { id: "P005", name: "Produk E", stock: 89, status: "normal", location: "Gudang B" },
];

export function InventoryTable() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle>Status Inventory Real-time</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Kode</TableHead>
              <TableHead>Nama Produk</TableHead>
              <TableHead>Stok</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Lokasi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventory.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.stock}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      item.status === "normal"
                        ? "default"
                        : item.status === "low"
                        ? "secondary"
                        : "destructive"
                    }
                  >
                    {item.status === "normal" ? "Normal" : item.status === "low" ? "Rendah" : "Kritis"}
                  </Badge>
                </TableCell>
                <TableCell>{item.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
