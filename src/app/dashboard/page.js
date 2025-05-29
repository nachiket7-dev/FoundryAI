"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (status === "unauthenticated") {
    return null;
  }

  return (
    <div className="p-12 min-h-screen bg-gray-50 dark:bg-gray-900">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">
        Hello, {session.user.name}!
      </h1>
      <button
        onClick={() => signOut()}
        className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition transform hover:scale-105 shadow-md"
      >
        Logout
      </button>
    </div>
  );
}
