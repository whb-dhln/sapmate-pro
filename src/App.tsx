import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import Production from "./pages/Production";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/production" element={<Production />} />
                <Route path="/inventory" element={<div className="p-6"><h1 className="text-3xl font-bold">Inventory - Coming Soon</h1></div>} />
                <Route path="/packaging" element={<div className="p-6"><h1 className="text-3xl font-bold">Packaging - Coming Soon</h1></div>} />
                <Route path="/warehouse" element={<div className="p-6"><h1 className="text-3xl font-bold">Gudang - Coming Soon</h1></div>} />
                <Route path="/logistics" element={<div className="p-6"><h1 className="text-3xl font-bold">Logistik - Coming Soon</h1></div>} />
                <Route path="/dataset" element={<div className="p-6"><h1 className="text-3xl font-bold">Data Set - Coming Soon</h1></div>} />
                <Route path="/data-processing" element={<div className="p-6"><h1 className="text-3xl font-bold">Data Vermak - Coming Soon</h1></div>} />
                <Route path="/shipping" element={<div className="p-6"><h1 className="text-3xl font-bold">Pengiriman - Coming Soon</h1></div>} />
                <Route path="/reports" element={<div className="p-6"><h1 className="text-3xl font-bold">Laporan - Coming Soon</h1></div>} />
                <Route path="/settings" element={<div className="p-6"><h1 className="text-3xl font-bold">Pengaturan - Coming Soon</h1></div>} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
