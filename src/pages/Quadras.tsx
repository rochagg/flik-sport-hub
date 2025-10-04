import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Edit, Lock, Percent, Plus } from "lucide-react";
import { EditQuadraDialog } from "@/components/EditQuadraDialog";
import { toast } from "sonner";

const quadrasIniciais = [
  {
    id: 1,
    nome: "Quadra Society 1",
    tipo: "Futebol Society",
    preco: 120,
    status: "disponivel",
    imagem: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&q=80",
  },
  {
    id: 2,
    nome: "Quadra Society 2",
    tipo: "Futebol Society",
    preco: 120,
    status: "disponivel",
    imagem: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=400&q=80",
  },
  {
    id: 3,
    nome: "Quadra de Vôlei",
    tipo: "Vôlei",
    preco: 80,
    status: "disponivel",
    imagem: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=400&q=80",
  },
  {
    id: 4,
    nome: "Quadra de Beach Tennis",
    tipo: "Beach Tennis",
    preco: 90,
    status: "bloqueada",
    imagem: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&q=80",
  },
];

const Quadras = () => {
  const [quadras, setQuadras] = useState(quadrasIniciais);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [quadraSelecionada, setQuadraSelecionada] = useState<typeof quadrasIniciais[0] | null>(null);

  const handleEditQuadra = (quadra: typeof quadrasIniciais[0]) => {
    setQuadraSelecionada(quadra);
    setDialogOpen(true);
  };

  const handleAddQuadra = () => {
    setQuadraSelecionada(null);
    setDialogOpen(true);
  };

  const handleSaveQuadra = (data: any) => {
    console.log("Quadra salva:", data);
    // Aqui você integraria com o backend
  };

  const handleToggleStatus = (id: number) => {
    setQuadras((prev) =>
      prev.map((q) =>
        q.id === id
          ? { ...q, status: q.status === "disponivel" ? "bloqueada" : "disponivel" }
          : q
      )
    );
    toast.success("Status da quadra atualizado");
  };
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Quadras</h1>
          <p className="text-muted-foreground mt-1">
            Gerencie as quadras da sua arena
          </p>
        </div>
        <Button onClick={handleAddQuadra} className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" />
          Adicionar Quadra
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {quadras.map((quadra) => (
          <Card key={quadra.id} className="overflow-hidden transition-all hover:shadow-lg">
            <div className="relative h-48 overflow-hidden">
              <img
                src={quadra.imagem}
                alt={quadra.nome}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
              {quadra.status === "bloqueada" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                  <Badge variant="secondary" className="text-sm">
                    <Lock className="mr-1 h-3 w-3" />
                    Bloqueada
                  </Badge>
                </div>
              )}
            </div>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{quadra.nome}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{quadra.tipo}</p>
                </div>
                <Badge variant="outline" className="ml-2">
                  R$ {quadra.preco}/h
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => handleEditQuadra(quadra)}
                >
                  <Edit className="mr-1 h-3 w-3" />
                  Editar
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => handleToggleStatus(quadra.id)}
                >
                  <Lock className="mr-1 h-3 w-3" />
                  {quadra.status === "disponivel" ? "Bloquear" : "Ativar"}
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="w-full text-primary">
                <Percent className="mr-1 h-3 w-3" />
                Adicionar Promoção
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <EditQuadraDialog
        quadra={quadraSelecionada}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onSave={handleSaveQuadra}
      />
    </div>
  );
};

export default Quadras;
