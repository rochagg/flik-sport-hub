import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Megaphone, TrendingUp, Eye, Calendar, Check } from "lucide-react";

const planos = [
  {
    nome: "Destaque Bronze",
    duracao: "3 dias",
    preco: 49.9,
    beneficios: [
      "Apareça no topo da busca",
      "Badge de destaque",
      "Até 300 visualizações extras",
    ],
  },
  {
    nome: "Destaque Prata",
    duracao: "7 dias",
    preco: 99.9,
    beneficios: [
      "Apareça no topo da busca",
      "Badge de destaque",
      "Até 800 visualizações extras",
      "Destaque na página inicial",
    ],
    popular: true,
  },
  {
    nome: "Destaque Ouro",
    duracao: "15 dias",
    preco: 179.9,
    beneficios: [
      "Apareça no topo da busca",
      "Badge de destaque premium",
      "Até 2000 visualizações extras",
      "Destaque na página inicial",
      "Banner promocional",
    ],
  },
];

const Anuncios = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Anúncios</h1>
        <p className="text-muted-foreground mt-1">
          Impulsione sua arena e receba mais reservas
        </p>
      </div>

      <Card className="border-primary/20 bg-gradient-to-br from-primary/10 to-transparent">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
              <Megaphone className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg">Alavanque suas reservas!</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Arenas anunciantes recebem em média <strong>3x mais visualizações</strong> e{" "}
                <strong>70% mais reservas</strong> do que arenas não anunciantes.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Visualizações (Este Mês)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">1.247</span>
              <Badge variant="outline" className="text-success border-success">
                <TrendingUp className="mr-1 h-3 w-3" />
                +18%
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Reservas Geradas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">89</span>
              <Badge variant="outline" className="text-success border-success">
                <TrendingUp className="mr-1 h-3 w-3" />
                +24%
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Escolha seu plano</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {planos.map((plano, index) => (
            <Card
              key={index}
              className={`relative ${
                plano.popular ? "border-primary shadow-lg scale-105" : ""
              }`}
            >
              {plano.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    Mais Popular
                  </Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-center">{plano.nome}</CardTitle>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{plano.duracao}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <span className="text-4xl font-bold">R$ {plano.preco}</span>
                </div>
                <ul className="space-y-3">
                  {plano.beneficios.map((beneficio, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{beneficio}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plano.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : ""
                  }`}
                  variant={plano.popular ? "default" : "outline"}
                >
                  Contratar Plano
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Como funciona o anúncio?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0">
                1
              </div>
              <div>
                <p className="font-medium">Escolha seu plano</p>
                <p className="text-sm text-muted-foreground">
                  Selecione a duração que melhor atende suas necessidades
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0">
                2
              </div>
              <div>
                <p className="font-medium">Sua arena em destaque</p>
                <p className="text-sm text-muted-foreground">
                  Apareça no topo dos resultados de busca e na página inicial do app
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0">
                3
              </div>
              <div>
                <p className="font-medium">Receba mais reservas</p>
                <p className="text-sm text-muted-foreground">
                  Acompanhe o aumento de visualizações e reservas em tempo real
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Anuncios;
