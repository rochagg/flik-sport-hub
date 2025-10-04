import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Calendar,
  DollarSign,
  TrendingUp,
  XCircle,
  Star,
  Clock,
} from "lucide-react";

const reservasPorDia = [
  { dia: "01", reservas: 12 },
  { dia: "05", reservas: 15 },
  { dia: "10", reservas: 18 },
  { dia: "15", reservas: 14 },
  { dia: "20", reservas: 22 },
  { dia: "25", reservas: 20 },
  { dia: "30", reservas: 25 },
];

const horariosMaisReservados = [
  { horario: "17h", total: 25 },
  { horario: "18h", total: 38 },
  { horario: "19h", total: 45 },
  { horario: "20h", total: 42 },
  { horario: "21h", total: 30 },
  { horario: "22h", total: 15 },
];

const quadrasData = [
  { nome: "Society 1", valor: 45 },
  { nome: "Society 2", valor: 35 },
  { nome: "Vôlei", valor: 15 },
  { nome: "Beach Tennis", valor: 5 },
];

const COLORS = ["hsl(var(--primary))", "hsl(var(--secondary))", "#8884d8", "#ffc658"];

const Desempenho = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Desempenho</h1>
          <p className="text-muted-foreground mt-1">
            Analise as métricas da sua arena
          </p>
        </div>
        <Select defaultValue="30">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Período" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7">Últimos 7 dias</SelectItem>
            <SelectItem value="30">Últimos 30 dias</SelectItem>
            <SelectItem value="90">Últimos 90 dias</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Ticket Médio"
          value="R$ 105,00"
          icon={DollarSign}
          trend={{ value: 8.3, isPositive: true }}
        />
        <StatCard
          title="Total de Agendamentos"
          value="342"
          icon={Calendar}
          description="No período selecionado"
        />
        <StatCard
          title="Taxa de Cancelamento"
          value="1.8%"
          icon={XCircle}
          trend={{ value: 0.5, isPositive: false }}
        />
        <StatCard
          title="Avaliação Média"
          value="4.8"
          icon={Star}
          description="Baseado em 256 avaliações"
        />
        <StatCard
          title="Horário Mais Reservado"
          value="19h - 20h"
          icon={Clock}
          description="Segunda a Sexta"
        />
        <StatCard
          title="Receita Total"
          value="R$ 35.910,00"
          icon={TrendingUp}
          trend={{ value: 15.2, isPositive: true }}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Reservas por Dia</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={reservasPorDia}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="dia" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
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
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Horários Mais Reservados</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={horariosMaisReservados}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="horario" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="total" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Distribuição de Reservas por Quadra</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={quadrasData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ nome, valor }) => `${nome}: ${valor}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="valor"
                >
                  {quadrasData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Desempenho;
