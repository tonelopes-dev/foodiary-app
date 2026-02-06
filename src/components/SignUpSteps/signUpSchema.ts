import z from "zod";

export const signUpSchema = z.object({
  goal: z.enum(["lose_weight", "maintain_weight", "gain_weight"], {
    message: "Objetivo inválido",
  }),
  birthDate: z.string().min(1, "Data de nascimento é obrigatória"),
  gender: z.enum(["male", "female"], {
    message: "Gênero inválido",
  }),
  height: z.string().min(1, "Altura é obrigatória"),
  weight: z.string().min(1, "Peso é obrigatório"),
  activityLevel: z.string().min(1, "Nível de atividade é obrigatório"),
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  password: z.string().min(8, "Senha deve ter pelo menos 8 caracteres"),
});

export type SignUpFormData = z.infer<typeof signUpSchema>;
