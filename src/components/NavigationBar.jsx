"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

export default function NavigationBar() {
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 mr-6 text-lg font-semibold tracking-wide">
          Dashboard App
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center px-3 py-2 border rounded text-purple-300 border-purple-500 hover:text-white hover:border-white transition duration-300 ease-in-out"
            aria-label="Toggle menu"
          >
            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
            </svg>
          </button>
        </div>
        <div className={`${menuOpen ? "block" : "hidden"} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
          <div className="text-lg lg:flex-grow">
            {status === "authenticated" && (
              <>
                <Link
                  href="/dashboard"
                  className="block mt-4 lg:inline-block lg:mt-0 text-purple-300 hover:text-white mr-6 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Dashboard
                </Link>
                <Link
                  href="/pizza-orders"
                  className="block mt-4 lg:inline-block lg:mt-0 text-purple-300 hover:text-white mr-6 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Pizza Orders
                </Link>
              </>
            )}
          </div>
          <div>
            {status === "authenticated" ? (
              <button
                onClick={() => signOut()}
                className="inline-block text-sm px-5 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-purple-600 hover:bg-white mt-4 lg:mt-0 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-purple-300 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
