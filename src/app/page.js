"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-4">
      <h1 className="text-4xl font-extrabold drop-shadow-lg">Welcome to the Dashboard</h1>
      <button
        onClick={() => signIn("google")}
        className="px-8 py-4 bg-white text-purple-700 font-semibold rounded-lg shadow-lg hover:bg-purple-100 transition transform hover:scale-105 hover:shadow-2xl"
      >
        Sign in with Google
      </button>
      {status === "error" && <p className="text-red-300">Failed to sign in. Please try again.</p>}
    </div>
  );
}
