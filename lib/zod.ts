import { object, string } from "zod";

export const SignInSchema = object({
  email: string({ required_error: "Email es requerido " })
    .min(1, "Email es requerido ")
    .email("Email invalido"),
  password: string({ required_error: "Contraseña es requerida" })
    .min(1, "Contraseña es requerida ")
    .min(8, "Contraseña debe ser mayor de 8 caracteres")
    .max(32, "Contraseña debe ser menor a 32 caracteres"),
});

export const RegisterSchema = object({
  name: string().min(1, "El nombre debe tener mas de 1 caracter"),
  email: string({ required_error: "Email es requerido" })
    .min(1, "Email es requerido")
    .email("Email invalido"),
  password: string({ required_error: "Contraseña es requerida" })
    .min(1, "Contraseña es requerida")
    .min(8, "Contraseña debe ser mayor de 8 caracteres")
    .max(32, "Contraseña debe ser menor a 32 caracteres"),
  ConfirmPassword: string()
    .min(8, "Contraseña debe ser mayor de 8 caracteres")
    .max(32, "Contraseña debe ser menor a 32 caracteres"),
}).refine((data) => data.password === data.ConfirmPassword, {
  message: "Las contraseñas no son iguales",
  path: ["ConfirmPassword"],
});
