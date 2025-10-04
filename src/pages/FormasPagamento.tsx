import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { CreditCard, Smartphone, QrCode, Wallet } from "lucide-react";

const formasPagamento = [
  {
    tipo: "Cartão de Crédito",
    icon: CreditCard,
    bandeiras: ["Visa", "Mastercard", "Elo", "American Express", "Hipercard"],
    ativo: true,
    taxas: "A partir de 2,99%",
  },
  {
    tipo: "Cartão de Débito",
    icon: CreditCard,
    bandeiras: ["Visa", "Mastercard", "Elo"],
    ativo: true,
    taxas: "A partir de 1,99%",
  },
  {
    tipo: "Pix",
    icon: QrCode,
    bandeiras: ["Instantâneo"],
    ativo: true,
    taxas: "0,99%",
  },
  {
    tipo: "Carteiras Digitais",
    icon: Wallet,
    bandeiras: ["Google Pay", "Apple Pay", "Samsung Pay"],
    ativo: true,
    taxas: "A partir de 2,99%",
  },
];

const FormasPagamento = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Formas de Pagamento</h1>
        <p className="text-muted-foreground mt-1">
          Gerencie os meios de pagamento aceitos na sua arena
        </p>
      </div>

      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <Smartphone className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Pagamentos processados pelo FLIK</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Todos os pagamentos são processados de forma segura pela plataforma FLIK.
                Os valores são repassados automaticamente para sua conta bancária cadastrada
                a cada 7 dias corridos após a confirmação de cada reserva.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Taxa FLIK:</strong> 9% sobre o valor bruto de cada transação (já inclui taxas de gateway de pagamento).
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {formasPagamento.map((forma, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <forma.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{forma.tipo}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{forma.taxas}</p>
                  </div>
                </div>
                <Switch checked={forma.ativo} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {forma.bandeiras.map((bandeira, idx) => (
                  <Badge key={idx} variant="secondary">
                    {bandeira}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Como funcionam os repasses?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm">
                1
              </div>
              <div>
                <p className="font-medium">Cliente faz a reserva</p>
                <p className="text-sm text-muted-foreground">
                  O pagamento é processado imediatamente pelo FLIK
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm">
                2
              </div>
              <div>
                <p className="font-medium">Ciclo de repasse</p>
                <p className="text-sm text-muted-foreground">
                  A cada 7 dias, as transações concluídas são consolidadas
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm">
                3
              </div>
              <div>
                <p className="font-medium">Repasse automático semanal</p>
                <p className="text-sm text-muted-foreground">
                  O valor líquido (descontando 9%) é depositado automaticamente 7 dias após cada reserva confirmada
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormasPagamento;
