import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Award, Star, XCircle, TrendingUp, CheckCircle2 } from "lucide-react";

const requisitos = [
  {
    titulo: "Taxa de cancelamento inferior a 2%",
    descricao: "Mantenha uma taxa baixa de cancelamentos",
    atual: 1.8,
    meta: 2,
    unidade: "%",
    icon: XCircle,
    concluido: true,
  },
  {
    titulo: "Avaliação média superior a 4.6 estrelas",
    descricao: "Mantenha alta satisfação dos clientes",
    atual: 4.8,
    meta: 4.6,
    unidade: " estrelas",
    icon: Star,
    concluido: true,
  },
  {
    titulo: "Mínimo de 100 avaliações",
    descricao: "Construa uma base sólida de feedbacks",
    atual: 256,
    meta: 100,
    unidade: " avaliações",
    icon: TrendingUp,
    concluido: true,
  },
];

const SuperArena = () => {
  const progresso = requisitos.filter((r) => r.concluido).length;
  const total = requisitos.length;
  const percentual = (progresso / total) * 100;
  const conquistado = progresso === total;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Selo Super Arena</h1>
        <p className="text-muted-foreground mt-1">
          Conquiste o selo de excelência FLIK
        </p>
      </div>

      <Card
        className={`border-2 ${
          conquistado
            ? "border-primary bg-gradient-to-br from-primary/10 to-transparent"
            : "border-muted"
        }`}
      >
        <CardContent className="p-8">
          <div className="flex items-start gap-6">
            <div
              className={`flex h-20 w-20 items-center justify-center rounded-full ${
                conquistado ? "bg-primary" : "bg-muted"
              }`}
            >
              <Award
                className={`h-10 w-10 ${
                  conquistado ? "text-primary-foreground" : "text-muted-foreground"
                }`}
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold">
                  {conquistado
                    ? "Parabéns! Você conquistou o Selo Super Arena!"
                    : "Você ainda não possui o Selo Super Arena"}
                </h2>
                {conquistado && (
                  <Badge className="bg-primary text-primary-foreground">
                    Conquistado
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground mb-4">
                {conquistado
                  ? "Sua arena atende todos os requisitos de excelência. Continue mantendo a qualidade para preservar seu selo!"
                  : "O Selo Super Arena é um reconhecimento de qualidade que destaca sua arena no app e gera mais confiança nos clientes."}
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">
                    Progresso: {progresso} de {total} requisitos
                  </span>
                  <span className="font-semibold">{Math.round(percentual)}%</span>
                </div>
                <Progress value={percentual} className="h-2" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-xl font-semibold mb-4">Requisitos</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {requisitos.map((req, index) => (
            <Card
              key={index}
              className={`${
                req.concluido ? "border-primary/50 bg-primary/5" : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                        req.concluido ? "bg-primary/10" : "bg-muted"
                      }`}
                    >
                      <req.icon
                        className={`h-5 w-5 ${
                          req.concluido ? "text-primary" : "text-muted-foreground"
                        }`}
                      />
                    </div>
                  </div>
                  {req.concluido && (
                    <CheckCircle2 className="h-5 w-5 text-success" />
                  )}
                </div>
                <CardTitle className="text-base mt-3">{req.titulo}</CardTitle>
                <p className="text-sm text-muted-foreground">{req.descricao}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-2xl font-bold">
                        {req.atual}
                        {req.unidade}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        / {req.meta}
                        {req.unidade}
                      </span>
                    </div>
                    <Progress
                      value={Math.min((req.atual / req.meta) * 100, 100)}
                      className="h-1.5"
                    />
                  </div>
                  {req.concluido && (
                    <Badge
                      variant="outline"
                      className="text-success border-success"
                    >
                      Requisito Atingido
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Benefícios do Selo Super Arena</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {[
              "Selo de destaque exibido no seu perfil",
              "Maior visibilidade nos resultados de busca",
              "Até 40% mais visualizações",
              "Badge exclusivo em todas as suas quadras",
              "Prioridade no suporte FLIK",
            ].map((beneficio, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                <span>{beneficio}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuperArena;
