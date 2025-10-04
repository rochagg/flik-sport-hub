import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Edit, MapPin, Clock, Upload, Users } from "lucide-react";

const MinhaArena = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Minha Arena</h1>
          <p className="text-muted-foreground mt-1">
            Gerencie as informações da sua arena
          </p>
        </div>
        <Badge variant="outline" className="text-primary border-primary">
          Verificado
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Edit className="h-5 w-5" />
            Informações Básicas
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome da Arena</Label>
              <Input id="nome" defaultValue="Arena Esportiva Campeões" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefone">Telefone</Label>
              <Input id="telefone" defaultValue="(11) 98765-4321" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="descricao">Descrição</Label>
            <Textarea
              id="descricao"
              rows={4}
              defaultValue="Arena moderna com infraestrutura completa para futebol society, vôlei e beach tennis. Vestiários, estacionamento e lanchonete no local."
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Localização
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="cep">CEP</Label>
              <Input id="cep" defaultValue="01234-567" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rua">Rua</Label>
              <Input id="rua" defaultValue="Rua dos Esportes" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="numero">Número</Label>
              <Input id="numero" defaultValue="1000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bairro">Bairro</Label>
              <Input id="bairro" defaultValue="Vila Esportiva" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cidade">Cidade</Label>
              <Input id="cidade" defaultValue="São Paulo" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="estado">Estado</Label>
              <Input id="estado" defaultValue="SP" />
            </div>
          </div>
          <div className="h-48 rounded-lg bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">Mapa da localização</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Galeria de Fotos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-lg bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors cursor-pointer">
                <Upload className="h-8 w-8 text-muted-foreground" />
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">
            <Upload className="mr-2 h-4 w-4" />
            Adicionar Fotos
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Horários de Funcionamento
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            "Segunda a Sexta",
            "Sábado",
            "Domingo e Feriados",
          ].map((dia, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border">
              <span className="font-medium">{dia}</span>
              <div className="flex gap-2">
                <Input className="w-24" defaultValue="06:00" />
                <span className="self-center">às</span>
                <Input className="w-24" defaultValue="23:00" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Dados Bancários
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="banco">Banco</Label>
              <Input id="banco" defaultValue="Banco do Brasil" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="agencia">Agência</Label>
              <Input id="agencia" defaultValue="1234-5" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="conta">Conta</Label>
              <Input id="conta" defaultValue="12345678-9" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tipo">Tipo de Conta</Label>
              <Input id="tipo" defaultValue="Conta Corrente" />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-3">
        <Button variant="outline">Cancelar</Button>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          Salvar Alterações
        </Button>
      </div>
    </div>
  );
};

export default MinhaArena;
