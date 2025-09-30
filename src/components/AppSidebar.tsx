import { 
  LayoutDashboard, 
  Factory, 
  Package, 
  Warehouse, 
  Truck, 
  Database, 
  Settings,
  BarChart3,
  PackageCheck,
  FileSpreadsheet
} from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Produksi", url: "/production", icon: Factory },
  { title: "Inventory", url: "/inventory", icon: Package },
  { title: "Packaging", url: "/packaging", icon: PackageCheck },
  { title: "Gudang", url: "/warehouse", icon: Warehouse },
  { title: "Logistik", url: "/logistics", icon: Truck },
  { title: "Data Set", url: "/dataset", icon: Database },
  { title: "Data Vermak", url: "/data-processing", icon: FileSpreadsheet },
  { title: "Pengiriman", url: "/shipping", icon: Truck },
  { title: "Laporan", url: "/reports", icon: BarChart3 },
  { title: "Pengaturan", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarContent>
        <div className="px-6 py-6">
          <h1 className="text-xl font-bold text-sidebar-foreground flex items-center gap-2">
            <LayoutDashboard className="h-6 w-6 text-sidebar-primary" />
            {open && "ERP System"}
          </h1>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel>Menu Utama</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-sidebar-accent text-sidebar-primary font-medium"
                          : "hover:bg-sidebar-accent/50"
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
