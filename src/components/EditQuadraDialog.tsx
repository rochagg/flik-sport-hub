import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { X, Plus, Upload, GripVertical, Trash2 } from "lucide-react";
import { toast } from "sonner";

const diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
const horarios = Array.from({ length: 15 }, (_, i) => {
  const hora = i + 6;
  return `${hora}:00 - ${hora + 1}:00`;
});

const esportesComRaquete = ["Beach Tennis", "Tênis", "Padel"];

interface Quadra {
  id: number;
  nome: string;
  tipo: string;
  preco: number;
  status: string;
  imagem: string;
}

interface EditQuadraDialogProps {
  quadra: Quadra | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (data: any) => void;
}

const quadraSchema = z.object({
  nome: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  tipo: z.string().min(1, "Selecione o tipo de esporte"),
  precoBase: z.number().min(1, "Valor deve ser maior que zero"),
  status: z.enum(["disponivel", "bloqueada"]),
});

export function EditQuadraDialog({ quadra, open, onOpenChange, onSave }: EditQuadraDialogProps) {
  const [fotos, setFotos] = useState<string[]>(quadra?.imagem ? [quadra.imagem] : []);
  const [horariosPorDia, setHorariosPorDia] = useState<Record<string, string[]>>({});
  const [mensalistas, setMensalistas] = useState<Array<{ id: number; nome: string; dia: string; horario: string }>>([]);
  const [precosEspeciais, setPrecosEspeciais] = useState<Array<{ id: number; dia: string; horario: string; valor: number }>>([]);
  const [adicionais, setAdicionais] = useState<Array<{ nome: string; valor: number; enabled: boolean }>>([
    { nome: "Bola", valor: 10, enabled: false },
    { nome: "Coletes", valor: 15, enabled: false },
  ]);

  const form = useForm({
    resolver: zodResolver(quadraSchema),
    defaultValues: {
      nome: quadra?.nome || "",
      tipo: quadra?.tipo || "",
      precoBase: quadra?.preco || 100,
      status: quadra?.status as "disponivel" | "bloqueada" || "disponivel",
    },
  });

  const tipoEsporte = form.watch("tipo");
  const mostrarRaquetes = esportesComRaquete.includes(tipoEsporte);

  const handleAddFoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    if (fotos.length + files.length > 5) {
      toast.error("Máximo de 5 fotos permitido");
      return;
    }

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFotos((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemoveFoto = (index: number) => {
    setFotos((prev) => prev.filter((_, i) => i !== index));
  };

  const handleToggleHorario = (dia: string, horario: string) => {
    setHorariosPorDia((prev) => {
      const horariosAtuais = prev[dia] || [];
      const existe = horariosAtuais.includes(horario);
      
      return {
        ...prev,
        [dia]: existe
          ? horariosAtuais.filter((h) => h !== horario)
          : [...horariosAtuais, horario],
      };
    });
  };

  const handleAddMensalista = () => {
    const novoId = Math.max(0, ...mensalistas.map((m) => m.id)) + 1;
    setMensalistas((prev) => [...prev, { id: novoId, nome: "", dia: "Segunda", horario: "" }]);
  };

  const handleRemoveMensalista = (id: number) => {
    setMensalistas((prev) => prev.filter((m) => m.id !== id));
  };

  const handleAddPrecoEspecial = () => {
    const novoId = Math.max(0, ...precosEspeciais.map((p) => p.id)) + 1;
    setPrecosEspeciais((prev) => [...prev, { id: novoId, dia: "Segunda", horario: "", valor: 0 }]);
  };

  const handleRemovePrecoEspecial = (id: number) => {
    setPrecosEspeciais((prev) => prev.filter((p) => p.id !== id));
  };

  const handleAddAdicionalCustom = () => {
    const nome = prompt("Nome do adicional:");
    if (!nome) return;
    const valor = parseFloat(prompt("Valor (R$):") || "0");
    if (isNaN(valor)) return;
    
    setAdicionais((prev) => [...prev, { nome, valor, enabled: true }]);
  };

  const handleSubmit = form.handleSubmit((data) => {
    if (fotos.length === 0) {
      toast.error("Adicione ao menos 1 foto");
      return;
    }

    const quadraCompleta = {
      ...data,
      fotos,
      horariosPorDia,
      mensalistas,
      precosEspeciais,
      adicionais: adicionais.filter((a) => a.enabled),
    };

    onSave(quadraCompleta);
    toast.success("Quadra salva com sucesso!");
    onOpenChange(false);
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {quadra ? "Editar Quadra" : "Adicionar Nova Quadra"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <Tabs defaultValue="fotos" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="fotos">Fotos</TabsTrigger>
              <TabsTrigger value="horarios">Horários</TabsTrigger>
              <TabsTrigger value="mensalistas">Mensalistas</TabsTrigger>
              <TabsTrigger value="valores">Valores</TabsTrigger>
              <TabsTrigger value="adicionais">Adicionais</TabsTrigger>
            </TabsList>

            <TabsContent value="fotos" className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Nome da Quadra</Label>
                  <Input {...form.register("nome")} placeholder="Ex: Quadra Society 1" />
                  {form.formState.errors.nome && (
                    <p className="text-sm text-destructive mt-1">{form.formState.errors.nome.message}</p>
                  )}
                </div>

                <div>
                  <Label>Tipo de Esporte</Label>
                  <Select value={form.watch("tipo")} onValueChange={(value) => form.setValue("tipo", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o esporte" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Futebol Society">Futebol Society</SelectItem>
                      <SelectItem value="Beach Tennis">Beach Tennis</SelectItem>
                      <SelectItem value="Tênis">Tênis</SelectItem>
                      <SelectItem value="Padel">Padel</SelectItem>
                      <SelectItem value="Vôlei">Vôlei</SelectItem>
                      <SelectItem value="Futevôlei">Futevôlei</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Label>Status da Quadra</Label>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={form.watch("status") === "disponivel"}
                    onCheckedChange={(checked) =>
                      form.setValue("status", checked ? "disponivel" : "bloqueada")
                    }
                  />
                  <span className="text-sm">
                    {form.watch("status") === "disponivel" ? "Ativa" : "Inativa"}
                  </span>
                </div>
              </div>

              <div>
                <Label>Fotos da Quadra (máximo 5)</Label>
                <p className="text-sm text-muted-foreground mb-2">
                  Adicione fotos de alta qualidade da quadra. Ao menos 1 foto é obrigatória.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  {fotos.map((foto, index) => (
                    <div key={index} className="relative group aspect-video rounded-lg overflow-hidden border">
                      <img src={foto} alt={`Foto ${index + 1}`} className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => handleRemoveFoto(index)}
                        className="absolute top-2 right-2 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-4 w-4" />
                      </button>
                      {index === 0 && (
                        <Badge className="absolute bottom-2 left-2 bg-primary">Principal</Badge>
                      )}
                    </div>
                  ))}

                  {fotos.length < 5 && (
                    <label className="aspect-video rounded-lg border-2 border-dashed border-muted-foreground/25 flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors">
                      <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                      <span className="text-sm text-muted-foreground">Adicionar foto</span>
                      <input type="file" accept="image/*" multiple onChange={handleAddFoto} className="hidden" />
                    </label>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="horarios" className="space-y-4 mt-4">
              <p className="text-sm text-muted-foreground">
                Configure os horários disponíveis para agendamento em cada dia da semana.
              </p>

              {diasSemana.map((dia) => (
                <div key={dia} className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-3">{dia}</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {horarios.map((horario) => {
                      const selecionado = horariosPorDia[dia]?.includes(horario);
                      return (
                        <button
                          key={horario}
                          type="button"
                          onClick={() => handleToggleHorario(dia, horario)}
                          className={`px-3 py-2 rounded-md text-sm transition-colors ${
                            selecionado
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted hover:bg-muted/80"
                          }`}
                        >
                          {horario}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="mensalistas" className="space-y-4 mt-4">
              <p className="text-sm text-muted-foreground">
                Informe as datas e horários fixos ocupados por mensalistas. Esses horários ficarão automaticamente bloqueados para novos agendamentos.
              </p>

              {mensalistas.map((mensalista, index) => (
                <div key={mensalista.id} className="flex gap-2 items-end border rounded-lg p-4">
                  <div className="flex-1">
                    <Label>Nome (interno)</Label>
                    <Input
                      placeholder="Ex: João Silva"
                      value={mensalista.nome}
                      onChange={(e) => {
                        const novos = [...mensalistas];
                        novos[index].nome = e.target.value;
                        setMensalistas(novos);
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <Label>Dia da Semana</Label>
                    <Select
                      value={mensalista.dia}
                      onValueChange={(value) => {
                        const novos = [...mensalistas];
                        novos[index].dia = value;
                        setMensalistas(novos);
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {diasSemana.map((dia) => (
                          <SelectItem key={dia} value={dia}>
                            {dia}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-1">
                    <Label>Horário</Label>
                    <Select
                      value={mensalista.horario}
                      onValueChange={(value) => {
                        const novos = [...mensalistas];
                        novos[index].horario = value;
                        setMensalistas(novos);
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        {horarios.map((h) => (
                          <SelectItem key={h} value={h}>
                            {h}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    onClick={() => handleRemoveMensalista(mensalista.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}

              <Button type="button" variant="outline" onClick={handleAddMensalista} className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Adicionar Mensalista
              </Button>
            </TabsContent>

            <TabsContent value="valores" className="space-y-4 mt-4">
              <div>
                <Label>Valor Padrão por Hora (R$)</Label>
                <Input
                  type="number"
                  step="0.01"
                  {...form.register("precoBase", { valueAsNumber: true })}
                  placeholder="140.00"
                />
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold mb-3">Preços Especiais por Horário</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Configure valores diferenciados para horários específicos
                </p>

                {precosEspeciais.map((preco, index) => (
                  <div key={preco.id} className="flex gap-2 items-end mb-3">
                    <div className="flex-1">
                      <Label>Dia da Semana</Label>
                      <Select
                        value={preco.dia}
                        onValueChange={(value) => {
                          const novos = [...precosEspeciais];
                          novos[index].dia = value;
                          setPrecosEspeciais(novos);
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {diasSemana.map((dia) => (
                            <SelectItem key={dia} value={dia}>
                              {dia}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex-1">
                      <Label>Horário</Label>
                      <Select
                        value={preco.horario}
                        onValueChange={(value) => {
                          const novos = [...precosEspeciais];
                          novos[index].horario = value;
                          setPrecosEspeciais(novos);
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {horarios.map((h) => (
                            <SelectItem key={h} value={h}>
                              {h}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex-1">
                      <Label>Valor (R$)</Label>
                      <Input
                        type="number"
                        step="0.01"
                        placeholder="180.00"
                        value={preco.valor || ""}
                        onChange={(e) => {
                          const novos = [...precosEspeciais];
                          novos[index].valor = parseFloat(e.target.value);
                          setPrecosEspeciais(novos);
                        }}
                      />
                    </div>
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      onClick={() => handleRemovePrecoEspecial(preco.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}

                <Button type="button" variant="outline" onClick={handleAddPrecoEspecial} className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Adicionar Preço Especial
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="adicionais" className="space-y-4 mt-4">
              <p className="text-sm text-muted-foreground">
                Você pode disponibilizar itens extras para aluguel durante o agendamento.
              </p>

              {adicionais.map((adicional, index) => (
                <div key={index} className="flex items-center justify-between border rounded-lg p-4">
                  <div className="flex items-center gap-3 flex-1">
                    <Checkbox
                      checked={adicional.enabled}
                      onCheckedChange={(checked) => {
                        const novos = [...adicionais];
                        novos[index].enabled = checked as boolean;
                        setAdicionais(novos);
                      }}
                    />
                    <div className="flex-1">
                      <Label>{adicional.nome}</Label>
                    </div>
                    <div className="w-32">
                      <Input
                        type="number"
                        step="0.01"
                        value={adicional.valor}
                        onChange={(e) => {
                          const novos = [...adicionais];
                          novos[index].valor = parseFloat(e.target.value) || 0;
                          setAdicionais(novos);
                        }}
                        disabled={!adicional.enabled}
                        placeholder="R$ 0,00"
                      />
                    </div>
                  </div>
                </div>
              ))}

              {mostrarRaquetes && (
                <div className="flex items-center justify-between border rounded-lg p-4 bg-accent/50">
                  <div className="flex items-center gap-3 flex-1">
                    <Checkbox
                      checked={adicionais.some((a) => a.nome === "Raquetes" && a.enabled)}
                      onCheckedChange={(checked) => {
                        const existe = adicionais.findIndex((a) => a.nome === "Raquetes");
                        if (existe !== -1) {
                          const novos = [...adicionais];
                          novos[existe].enabled = checked as boolean;
                          setAdicionais(novos);
                        } else {
                          setAdicionais((prev) => [...prev, { nome: "Raquetes", valor: 20, enabled: true }]);
                        }
                      }}
                    />
                    <div className="flex-1">
                      <Label>Raquetes</Label>
                      <p className="text-xs text-muted-foreground">Disponível para {tipoEsporte}</p>
                    </div>
                    <div className="w-32">
                      <Input
                        type="number"
                        step="0.01"
                        value={adicionais.find((a) => a.nome === "Raquetes")?.valor || 20}
                        onChange={(e) => {
                          const existe = adicionais.findIndex((a) => a.nome === "Raquetes");
                          if (existe !== -1) {
                            const novos = [...adicionais];
                            novos[existe].valor = parseFloat(e.target.value) || 0;
                            setAdicionais(novos);
                          }
                        }}
                        disabled={!adicionais.some((a) => a.nome === "Raquetes" && a.enabled)}
                        placeholder="R$ 20,00"
                      />
                    </div>
                  </div>
                </div>
              )}

              <Button type="button" variant="outline" onClick={handleAddAdicionalCustom} className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Adicionar Adicional Personalizado
              </Button>
            </TabsContent>
          </Tabs>

          <div className="flex gap-3 mt-6 pt-6 border-t">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Cancelar
            </Button>
            <Button type="submit" className="flex-1">
              Salvar Alterações
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
