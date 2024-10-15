import { signIn } from "@/auth";

import React from "react";

export const LoginGoogle = () => {
  return (
    <form
      className="w-full"
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/dashboard" });
      }}
    >
      <button
        type="submit"
        className="w-full bg-black text-white py-4 rounded-lg"
      >
        Ingresar con Google
      </button>
    </form>
  );
};
