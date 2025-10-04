import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DollarSign,
  TrendingUp,
  Calendar,
  XCircle,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const weekData = [
  { day: "Seg", reservas: 12 },
  { day: "Ter", reservas: 8 },
  { day: "Qua", reservas: 15 },
  { day: "Qui", reservas: 10 },
  { day: "Sex", reservas: 18 },
  { day: "Sáb", reservas: 24 },
  { day: "Dom", reservas: 20 },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Bem-vindo de volta!</h1>
        <p className="text-muted-foreground mt-1">
          Aqui está um resumo do desempenho da sua arena nos últimos 7 dias
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Receita da Semana"
          value="R$ 4.850,00"
          icon={DollarSign}
          trend={{ value: 12.5, isPositive: true }}
        />
        <StatCard
          title="Ticket Médio"
          value="R$ 105,00"
          icon={TrendingUp}
          trend={{ value: 8.3, isPositive: true }}
        />
        <StatCard
          title="Reservas Concluídas"
          value="107"
          icon={Calendar}
          description="Esta semana"
        />
        <StatCard
          title="Taxa de Cancelamento"
          value="1.8%"
          icon={XCircle}
          trend={{ value: 0.5, isPositive: false }}
        />
        <StatCard
          title="Horário Mais Reservado"
          value="19h - 20h"
          icon={Clock}
          description="Segunda a Sexta"
        />
        <StatCard
          title="Avaliação Média"
          value="4.8"
          icon={Star}
          description="Baseado em 89 avaliações"
        />
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Reservas da Semana</CardTitle>
          <Button variant="ghost" size="sm">
            Ver detalhes
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weekData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="day" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Line
                type="monotone"
                dataKey="reservas"
                stroke="hsl(var(--primary))"
                strokeWidth={3}
                dot={{ fill: "hsl(var(--primary))", r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
        <CardContent className="flex items-center justify-between p-6">
          <div>
            <h3 className="text-lg font-semibold">Impulsione sua arena!</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Apareça em destaque no app e receba até 3x mais reservas
            </p>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Ver Planos
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
