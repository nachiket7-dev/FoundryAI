"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const orders = [
  {
    id: "PZA001",
    customerName: "John Doe",
    pizzaType: "Margherita",
    quantity: 1,
    orderDate: "2023-06-01 12:30",
    status: "Pending",
  },
  {
    id: "PZA002",
    customerName: "Jane Smith",
    pizzaType: "Pepperoni",
    quantity: 2,
    orderDate: "2023-06-02 14:15",
    status: "Preparing",
  },
  {
    id: "PZA003",
    customerName: "Alice Johnson",
    pizzaType: "Veggie Supreme",
    quantity: 1,
    orderDate: "2023-06-03 18:45",
    status: "Out for Delivery",
  },
  {
    id: "PZA004",
    customerName: "Bob Brown",
    pizzaType: "Margherita",
    quantity: 3,
    orderDate: "2023-06-04 20:00",
    status: "Delivered",
  },
  {
    id: "PZA005",
    customerName: "Charlie Davis",
    pizzaType: "Pepperoni",
    quantity: 1,
    orderDate: "2023-06-05 19:30",
    status: "Cancelled",
  },
];

function statusBadge(status) {
  const baseClasses = "px-2 py-1 rounded-full text-xs font-semibold transition transform hover:scale-110";
  switch (status) {
    case "Pending":
      return <span className={`${baseClasses} bg-yellow-200 text-yellow-800`}>{status}</span>;
    case "Preparing":
      return <span className={`${baseClasses} bg-blue-200 text-blue-800`}>{status}</span>;
    case "Out for Delivery":
      return <span className={`${baseClasses} bg-indigo-200 text-indigo-800`}>{status}</span>;
    case "Delivered":
      return <span className={`${baseClasses} bg-green-200 text-green-800`}>{status}</span>;
    case "Cancelled":
      return <span className={`${baseClasses} bg-red-200 text-red-800`}>{status}</span>;
    default:
      return <span className={baseClasses}>{status}</span>;
  }
}

export default function PizzaOrdersPage() {
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
    <div className="p-8 min-h-screen bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Pizza Orders</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <thead>
            <tr className="text-left border-b border-gray-300 dark:border-gray-700">
              <th className="px-6 py-3">Order ID</th>
              <th className="px-6 py-3">Customer Name</th>
              <th className="px-6 py-3">Pizza Type</th>
              <th className="px-6 py-3">Quantity</th>
              <th className="px-6 py-3">Order Date</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-[1.02]"
              >
                <td className="px-6 py-4">{order.id}</td>
                <td className="px-6 py-4">{order.customerName}</td>
                <td className="px-6 py-4">{order.pizzaType}</td>
                <td className="px-6 py-4">{order.quantity}</td>
                <td className="px-6 py-4">{order.orderDate}</td>
                <td className="px-6 py-4">{statusBadge(order.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
