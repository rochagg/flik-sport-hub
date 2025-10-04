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
  periodo: "01/01/2025 - 31/01/2025",
  valorBruto: 35910.0,
  taxas: 3231.9,
  valorLiquido: 32678.1,
  status: "em_aberto",
  previsaoPagamento: "05/02/2025",
};

const historico = [
  {
    mes: "Dezembro 2024",
    valorBruto: 28450.0,
    taxas: 2560.5,
    valorLiquido: 25889.5,
    status: "pago",
    dataPagamento: "05/01/2025",
  },
  {
    mes: "Novembro 2024",
    valorBruto: 31200.0,
    taxas: 2808.0,
    valorLiquido: 28392.0,
    status: "pago",
    dataPagamento: "05/12/2024",
  },
  {
    mes: "Outubro 2024",
    valorBruto: 26780.0,
    taxas: 2410.2,
    valorLiquido: 24369.8,
    status: "pago",
    dataPagamento: "05/11/2024",
  },
];

const Financeiro = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Financeiro</h1>
        <p className="text-muted-foreground mt-1">
          Acompanhe seus repasses e histórico financeiro
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-l-4 border-l-primary">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Receita Bruta do Mês
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
            <CardTitle>Repasse do Mês Atual</CardTitle>
            <Badge variant="outline" className="text-warning border-warning">
              {repasseAtual.status === "em_aberto" ? "Em Aberto" : "Pago"}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Período de Apuração</p>
              <p className="text-lg font-semibold mt-1">{repasseAtual.periodo}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Previsão de Pagamento</p>
              <p className="text-lg font-semibold mt-1">{repasseAtual.previsaoPagamento}</p>
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
          <CardTitle>Histórico de Depósitos</CardTitle>
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
                  <TableCell className="font-medium">{item.mes}</TableCell>
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
