import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Dashboard from "./pages/Dashboard";
import Quadras from "./pages/Quadras";
import Desempenho from "./pages/Desempenho";
import Financeiro from "./pages/Financeiro";
import FormasPagamento from "./pages/FormasPagamento";
import MinhaArena from "./pages/MinhaArena";
import Anuncios from "./pages/Anuncios";
import Avaliacoes from "./pages/Avaliacoes";
import SuperArena from "./pages/SuperArena";
import Ajuda from "./pages/Ajuda";
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
            <div className="flex flex-1 flex-col">
              <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
                <SidebarTrigger />
              </header>
              <main className="flex-1 p-6 overflow-auto">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/quadras" element={<Quadras />} />
                  <Route path="/desempenho" element={<Desempenho />} />
                  <Route path="/financeiro" element={<Financeiro />} />
                  <Route path="/pagamento" element={<FormasPagamento />} />
                  <Route path="/minha-arena" element={<MinhaArena />} />
                  <Route path="/anuncios" element={<Anuncios />} />
                  <Route path="/avaliacoes" element={<Avaliacoes />} />
                  <Route path="/super-arena" element={<SuperArena />} />
                  <Route path="/ajuda" element={<Ajuda />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
