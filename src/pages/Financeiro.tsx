import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileText, Download, TrendingUp, DollarSign, Percent } from "lucide-react";

const repasseAtual = {
  periodo: "25/01/2025 - 31/01/2025",
  valorBruto: 8520.0,
  taxas: 766.8,
  valorLiquido: 7753.2,
  status: "em_aberto",
  dataPagamento: "07/02/2025",
};

const historico = [
  {
    semana: "18/01/2025 - 24/01/2025",
    valorBruto: 8150.0,
    taxas: 733.5,
    valorLiquido: 7416.5,
    status: "pago",
    dataPagamento: "31/01/2025",
  },
  {
    semana: "11/01/2025 - 17/01/2025",
    valorBruto: 9200.0,
    taxas: 828.0,
    valorLiquido: 8372.0,
    status: "pago",
    dataPagamento: "24/01/2025",
  },
  {
    semana: "04/01/2025 - 10/01/2025",
    valorBruto: 7680.0,
    taxas: 691.2,
    valorLiquido: 6988.8,
    status: "pago",
    dataPagamento: "17/01/2025",
  },
];

const Financeiro = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Financeiro</h1>
        <p className="text-muted-foreground mt-1">
          Acompanhe seus repasses semanais e histórico financeiro
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-l-4 border-l-primary">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Receita Bruta da Semana
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">
                R$ {repasseAtual.valorBruto.toLocaleString("pt-BR")}
              </span>
              <TrendingUp className="h-5 w-5 text-success" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Taxas FLIK (9%)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-muted-foreground">
                R$ {repasseAtual.taxas.toLocaleString("pt-BR")}
              </span>
              <Percent className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-success bg-success/5">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Valor Líquido a Receber
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-success">
                R$ {repasseAtual.valorLiquido.toLocaleString("pt-BR")}
              </span>
              <DollarSign className="h-5 w-5 text-success" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Repasse Semanal</CardTitle>
            <Badge variant="outline" className="text-warning border-warning">
              {repasseAtual.status === "em_aberto" ? "Em Aberto" : "Pago"}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Período dos agendamentos (7 dias anteriores)</p>
              <p className="text-lg font-semibold mt-1">{repasseAtual.periodo}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Data de pagamento</p>
              <p className="text-lg font-semibold mt-1">{repasseAtual.dataPagamento}</p>
            </div>
          </div>

          <div className="rounded-lg border border-border p-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Valor Bruto</span>
              <span className="font-semibold">
                R$ {repasseAtual.valorBruto.toLocaleString("pt-BR")}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Taxa FLIK (9%)</span>
              <span className="font-semibold text-destructive">
                - R$ {repasseAtual.taxas.toLocaleString("pt-BR")}
              </span>
            </div>
            <div className="h-px bg-border my-2" />
            <div className="flex justify-between text-lg">
              <span className="font-semibold">Valor Líquido</span>
              <span className="font-bold text-success">
                R$ {repasseAtual.valorLiquido.toLocaleString("pt-BR")}
              </span>
            </div>
          </div>

          <div className="rounded-lg bg-muted/50 p-4 text-sm text-muted-foreground">
            <p>
              ℹ️ Os repasses são realizados automaticamente a cada 7 dias corridos, contados a partir da data de cada reserva concluída com sucesso.
            </p>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="flex-1">
              <FileText className="mr-2 h-4 w-4" />
              Ver Detalhamento
            </Button>
            <Button variant="outline" className="flex-1">
              <Download className="mr-2 h-4 w-4" />
              Baixar Relatório
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Histórico de Repasses Semanais</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Período</TableHead>
                <TableHead>Valor Bruto</TableHead>
                <TableHead>Taxas</TableHead>
                <TableHead>Valor Líquido</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Data Pagamento</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {historico.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.semana}</TableCell>
                  <TableCell>R$ {item.valorBruto.toLocaleString("pt-BR")}</TableCell>
                  <TableCell className="text-muted-foreground">
                    R$ {item.taxas.toLocaleString("pt-BR")}
                  </TableCell>
                  <TableCell className="font-semibold text-success">
                    R$ {item.valorLiquido.toLocaleString("pt-BR")}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-success border-success">
                      Pago
                    </Badge>
                  </TableCell>
                  <TableCell>{item.dataPagamento}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Financeiro;
