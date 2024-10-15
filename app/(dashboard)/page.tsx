import { auth } from "@/auth";
import Link from "next/link";
import React from "react";

const Dashboard = async () => {
  const session = await auth();
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center ">
      <h1 className="text-4xl">Ingresar</h1>

      <p>{JSON.stringify(session)}</p>

      <Link
        className="w-40 py-2 rounded-lg bg-black text-white flex justify-center items-center my-2 hover:bg-slate-400 hover:text-black"
        href={"/login"}
      >
        Login
      </Link>
      <Link
        className="w-40 py-2 rounded-lg bg-black text-white flex justify-center items-center my-2 hover:bg-slate-400 hover:text-black"
        href={"/registro"}
      >
        registro
      </Link>
    </div>
  );
};

export default Dashboard;
