// import axios from 'axios';
// import { CheckSquare2 } from 'lucide-react';
// import React, { useEffect, useState } from 'react'

// const Order = () => {
//       const [orders, setOrders] = useState([]);
//     const [confirmedRows, setConfirmedRows] = useState<{ [key: string]: boolean }>(() => {
//   const saved = localStorage.getItem("confirmedRows");
//   return saved ? JSON.parse(saved) : {};
// });

//     const toggleBackground = () => {
//         setConfirm(!confirm)
//       }
    
//       useEffect(() => {
//         axios
//           .get("http://localhost:7000/order")
    
//           .then((response) => {
//             console.log("API Response:", response.data.orderInfo);
//             setOrders(response.data.orderInfo)
//              localStorage.setItem("confirmedRows", JSON.stringify(confirmedRows));
//         }
//         )
    
//           .catch((error) => console.error("Error fetching pets:", error));
//       }, [confirmedRows]);

      
// //  console.log(orders.map((order)=>(order.pets)));
//   return (
//     <div><div className="bg-white rounded-lg shadow-md overflow-hidden">
//     <div className="overflow-x-auto">
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Name
//             </th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Email
//             </th>
//             {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Phone
//             </th> */}
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Pet Name
//             </th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Pet Breed
//             </th>
//             {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Location
//             </th> */}
//             <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//   {orders.map((order) =>
//     order.pets.map((p, idx) => {
//       const key = `${order._id}-${idx}`;
//       return (
//         <tr
//           key={key}
//           className={`hover:bg-gray-50 ${
//             confirmedRows[key] ? "bg-green-100" : "bg-white"
//           }`}
//         >
//           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//             {order.user?.username}
//           </td>
//           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//             {order.user?.email}
//           </td>
//           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//             {p.pet?.name}
//           </td>
//           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//             {p.pet?.breed}
//           </td>
//           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//             Qty: {p.quantity}
//           </td>
//           <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//             <button
//               onClick={() =>
//   setConfirmedRows((prev) => ({
//     ...prev,
//     [key]: !prev[key],
//   }))
// }
//               className={`${
//                 confirmedRows[key] ? "text-green-700" : "text-gray-400"
//               } hover:text-green-900 focus:outline-none`}
//             >
//               <CheckSquare2 className="w-5 h-5" />
//             </button>
//           </td>
//         </tr>
//       );
//     })
//   )}

//   {orders.length === 0 && (
//     <tr>
//       <td
//         colSpan={6}
//         className="px-6 py-4 text-center text-sm text-gray-500"
//       >
//         No Order available
//       </td>
//     </tr>
//   )}
// </tbody>

//       </table>
//     </div>
//   </div></div>
//   )
// }

// export default Order


import axios from "axios";
import { CheckSquare2 } from "lucide-react";
import { useEffect, useState } from "react";

type PetOrder = {
  _id: string;
  user?: { username?: string; email?: string };
  pets: { pet?: { name?: string; breed?: string }; quantity?: number }[];
  status?: string;
};

const Order = () => {
  const [orders, setOrders] = useState<PetOrder[]>([]);
  const [confirmedOrders, setConfirmedOrders] = useState<{ [key: string]: boolean }>(() => {
    const saved = localStorage.getItem("confirmedOrders");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    axios
      .get("http://localhost:7000/order")
      .then((response) => {
        setOrders(response.data.orderInfo);
      })
      .catch((error) => console.error("Error fetching orders:", error));
  }, []);

  const handleConfirm = async (orderId) => {
    try {
      await axios.patch(`http://localhost:7000/order/${orderId}`, {
        status: "completed",
      });

      setConfirmedOrders((prev) => {
        const updated = { ...prev, [orderId]: true };
        localStorage.setItem("confirmedOrders", JSON.stringify(updated));
        return updated;
      });

      setOrders((prev) =>
        prev.map((order) =>
          order._id === orderId ? { ...order, status: "completed" } : order
        )
      );
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  return (
    <div className="bg-white py-20 min-h-screen rounded-lg shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pet Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pet Breed
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {orders
  .filter(order => order.pets.some(p => p.pet)) // ✅ Only include orders with at least one valid pet
  .flatMap((order) =>
    order.pets.map((p, idx) => {
      if (!p.pet) return null; // ✅ Skip this row if pet is null/undefined

      const key = `${order._id}-${idx}`;
      const isConfirmed = order.status === "completed" || confirmedOrders[order._id];

      return (
        <tr
          key={key}
          className={`hover:bg-gray-50 ${
            isConfirmed ? "bg-green-100" : "bg-white"
          }`}
        >
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {order.user?.username}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {order.user?.email}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {p.pet.name}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {p.pet.breed}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <button
              onClick={() => handleConfirm(order._id)}
              className={`${
                isConfirmed ? "text-green-700" : "text-gray-400"
              } hover:text-green-900 focus:outline-none`}
              disabled={isConfirmed}
            >
              <CheckSquare2 className="w-5 h-5" />
            </button>
          </td>
        </tr>
      );
    })
  )}


            {orders.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="px-6 py-4 text-center text-sm text-gray-500"
                >
                  No Order available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
