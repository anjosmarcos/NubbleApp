import {z} from 'zod';

const teste = 12212;

export const loginSchema = z.object({
  email: z.string().email('email inválido'),
  password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres'),
});

export type loginSchema = z.infer<typeof loginSchema>;
