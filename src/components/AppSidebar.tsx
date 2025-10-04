import { NavLink } from "react-router-dom";
import {
  Home,
  LayoutGrid,
  TrendingUp,
  DollarSign,
  CreditCard,
  Building2,
  Megaphone,
  Star,
  Award,
  HelpCircle,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const menuItems = [
  { title: "Início", url: "/", icon: Home },
  { title: "Quadras", url: "/quadras", icon: LayoutGrid },
  { title: "Desempenho", url: "/desempenho", icon: TrendingUp },
  { title: "Financeiro", url: "/financeiro", icon: DollarSign },
  { title: "Formas de pagamento", url: "/pagamento", icon: CreditCard },
  { title: "Minha Arena", url: "/minha-arena", icon: Building2 },
  { title: "Anúncios", url: "/anuncios", icon: Megaphone },
  { title: "Avaliações", url: "/avaliacoes", icon: Star },
  { title: "Selo Super Arena", url: "/super-arena", icon: Award },
  { title: "Ajuda", url: "/ajuda", icon: HelpCircle },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-xl font-bold text-primary-foreground">F</span>
          </div>
          {!isCollapsed && (
            <div>
              <h2 className="text-lg font-bold text-sidebar-foreground">FLIK</h2>
              <p className="text-xs text-muted-foreground">Painel do Parceiro</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                          isActive
                            ? "bg-sidebar-accent text-sidebar-primary"
                            : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                        )
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      {!isCollapsed && <span>{item.title}</span>}
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
