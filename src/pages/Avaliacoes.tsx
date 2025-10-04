import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, MessageSquare, TrendingUp } from "lucide-react";

const avaliacoes = [
  {
    usuario: "João Silva",
    iniciais: "JS",
    data: "15/01/2025",
    nota: 5,
    comentario:
      "Excelente arena! Quadras muito bem cuidadas e ótima infraestrutura. Recomendo!",
    quadra: "Quadra Society 1",
  },
  {
    usuario: "Maria Santos",
    iniciais: "MS",
    data: "14/01/2025",
    nota: 4,
    comentario:
      "Muito boa! Única sugestão seria melhorar a iluminação da quadra 2.",
    quadra: "Quadra Society 2",
  },
  {
    usuario: "Pedro Costa",
    iniciais: "PC",
    data: "13/01/2025",
    nota: 5,
    comentario:
      "Perfeito! Sempre jogo aqui com meus amigos. Atendimento nota 10!",
    quadra: "Quadra de Vôlei",
  },
  {
    usuario: "Ana Rodrigues",
    iniciais: "AR",
    data: "12/01/2025",
    nota: 4,
    comentario: "Ótima estrutura, vestiários limpos e estacionamento amplo.",
    quadra: "Quadra Society 1",
  },
  {
    usuario: "Carlos Oliveira",
    iniciais: "CO",
    data: "10/01/2025",
    nota: 5,
    comentario:
      "Arena top! Melhor da região, sempre bem cuidada e organizada.",
    quadra: "Quadra de Beach Tennis",
  },
];

const Avaliacoes = () => {
  const notaMedia = 4.8;
  const totalAvaliacoes = 256;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Avaliações</h1>
          <p className="text-muted-foreground mt-1">
            Veja o que seus clientes dizem sobre sua arena
          </p>
        </div>
        <Select defaultValue="recentes">
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recentes">Mais recentes</SelectItem>
            <SelectItem value="melhor">Melhor avaliação</SelectItem>
            <SelectItem value="pior">Pior avaliação</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-l-4 border-l-primary">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Avaliação Média
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold">{notaMedia}</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${
                      star <= notaMedia
                        ? "fill-primary text-primary"
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Baseado em {totalAvaliacoes} avaliações
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total de Avaliações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold">{totalAvaliacoes}</span>
              <Badge variant="outline" className="text-success border-success">
                <TrendingUp className="mr-1 h-3 w-3" />
                +12%
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Taxa de Resposta
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold">89%</span>
              <MessageSquare className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Você respondeu 228 avaliações
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <Star className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold text-lg">
                Continue mantendo a qualidade!
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Sua arena tem uma excelente reputação. Responder às avaliações
                ajuda a manter a confiança dos clientes e melhora seu
                posicionamento no app.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {avaliacoes.map((avaliacao, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {avaliacao.iniciais}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold">{avaliacao.usuario}</p>
                      <p className="text-sm text-muted-foreground">
                        {avaliacao.data} • {avaliacao.quadra}
                      </p>
                    </div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= avaliacao.nota
                              ? "fill-primary text-primary"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm">{avaliacao.comentario}</p>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="mr-2 h-3 w-3" />
                    Responder avaliação
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Avaliacoes;
