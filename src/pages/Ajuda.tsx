import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle, Mail, Phone, Search } from "lucide-react";

const faqItems = [
  {
    pergunta: "Como funcionam os repasses financeiros?",
    resposta:
      "Os repasses são processados automaticamente em ciclos semanais, 7 dias após a data de cada agendamento confirmado. Descontamos a taxa de 9% do FLIK e realizamos o depósito diretamente na conta bancária cadastrada.",
  },
  {
    pergunta: "Como adiciono uma nova quadra?",
    resposta:
      'Na página "Quadras", clique no botão "Adicionar Quadra" no canto superior direito. Preencha as informações solicitadas como nome, tipo, preço por hora e faça upload de fotos da quadra.',
  },
  {
    pergunta: "Como faço para bloquear horários?",
    resposta:
      "Acesse a página de uma quadra específica e clique no botão de bloquear horários. Você pode bloquear dias específicos ou períodos recorrentes para mensalistas.",
  },
  {
    pergunta: "O que é o Selo Super Arena?",
    resposta:
      "É um reconhecimento de excelência que destaca arenas com alta qualidade de serviço. Para conquistá-lo, é necessário manter taxa de cancelamento abaixo de 2%, avaliação média superior a 4.6 estrelas e ter pelo menos 100 avaliações.",
  },
  {
    pergunta: "Como funciona o impulsionamento?",
    resposta:
      "O impulsionamento coloca sua arena em destaque nos resultados de busca e na página inicial do app. Você pode escolher entre planos de 3, 7 ou 15 dias, aumentando significativamente suas visualizações e reservas.",
  },
  {
    pergunta: "Posso alterar os preços das quadras?",
    resposta:
      'Sim! Na página "Quadras", clique em "Editar" na quadra desejada e atualize o valor por hora. As alterações entram em vigor imediatamente para novas reservas.',
  },
];

const Ajuda = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Central de Ajuda</h1>
        <p className="text-muted-foreground mt-1">
          Tire suas dúvidas ou entre em contato conosco
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <MessageCircle className="h-12 w-12 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Chat ao Vivo</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Atendimento online de seg-sex, 9h às 18h
            </p>
            <Button variant="outline" className="w-full">
              Iniciar Chat
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Mail className="h-12 w-12 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">E-mail</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Respondemos em até 24 horas
            </p>
            <Button variant="outline" className="w-full">
              parceiros@flik.com.br
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Phone className="h-12 w-12 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Telefone</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Suporte prioritário para parceiros
            </p>
            <Button variant="outline" className="w-full">
              0800 123 4567
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            Perguntas Frequentes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar perguntas..."
                className="pl-10"
              />
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Envie sua dúvida</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome</Label>
                <Input id="nome" placeholder="Seu nome" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="assunto">Assunto</Label>
              <Input id="assunto" placeholder="Sobre o que você precisa de ajuda?" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mensagem">Mensagem</Label>
              <Textarea
                id="mensagem"
                rows={6}
                placeholder="Descreva sua dúvida ou problema..."
              />
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Enviar Mensagem
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Ajuda;
