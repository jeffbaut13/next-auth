import FormLogin from "@/components/auth/form-login";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Login",
};

const Login = () => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Ingresa a tu cuenta</h1>
      <FormLogin />
    </div>
  );
};

export default Login;
