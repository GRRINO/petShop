import  { useEffect, useState } from "react";
import axios from "axios";
import {
  ShoppingBag,
  Package,
  Calendar,
  DollarSign,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react";
// import useCartStore from "../store/cartStore";
// import { HistoryItem } from '../types';

export const ShoppingHistory = () => {
    // const { items, removeItem, clearCart } = useCartStore();
  const user = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const userId = user._id;

  const [orders, setOrders] = useState([]);
  // const [confirm, setConfirm] = useState(false);
  // const toggleBackground = () => {
  //     setConfirm(!confirm)
  //   }
  
    useEffect(() => {
      axios
        .get(`http://localhost:7000/order/${userId}`)
  
        .then((response) => {
          console.log("API Response:", response.data.orderInfo);
          setOrders(response.data.orderInfo)
      }
      )
  
        .catch((error) => console.error("Error fetching pets:", error));
    }, []);

// console.log(orders.map((item) =>item.status))
//   const formatDate = (dateString: string) => {
//     const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
//     return new Date(dateString).toLocaleDateString("en-US", options);
//   };

  const getStatusIcon = (status:string) => {
    switch (status) {
      case "completed":
        return <CheckCircle size={18} className="text-green-500" />;
      case "pending":
        return <Clock size={18} className="text-yellow-500" />;
      case "cancelled":
        return <XCircle size={18} className="text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusClass = (status:string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "processing":
        return "bg-yellow-100 text-yellow-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* <PetIconsBackground color="purple" density="high" /> */}
      <div className=" bg-[#FFF5E1] pt-20 py-8 min-h-screen flex items-center justify-center ">
        <div>
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Your Purchase History
              </h2>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-[#ffddd1] text-[#FF9A76] rounded-md hover:bg-[#fbd2c4] transition-colors">
                  All
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                  Adoptions
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                Products
              </button>
              </div>
            </div>

            <div className="space-y-6">
              {orders
  .filter(order => 
    Array.isArray(order.pets) && order.pets.some(p => p.pet !== null)
  )
  .map((item) => (
  <div
    key={item._id}
    className={`border rounded-lg overflow-hidden ${
      item.status === "completed"
        ? "bg-green-50 border-green-200"
        : "border-gray-200 bg-white"
    }`}
  >
    <div className="px-6 py-4">
      <div className="flex items-center justify-between mb-3">
        <div className={`text-sm font-medium px-3 py-1 rounded-full ${getStatusClass(item.status)}`}>
          {getStatusIcon(item.status)} <span className="ml-1 capitalize">{item.status}</span>
        </div>
        {item.status === "completed" && (
          <span className="text-green-600 font-semibold">Thank you for adopting!</span>
        )}
      </div>

      {item.pets.map(({ pet, quantity, _id }) =>
        pet ? (
          <div className="flex mb-4" key={_id}>
            <div className="w-24 h-24 mr-4 flex-shrink-0">
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-[#8A9B6E] mb-1">
                {pet.name}
              </h3>
              <p className="text-gray-600 mb-1">Breed: {pet.breed}</p>
              <div className="flex items-center">
                <DollarSign size={16} className="text-gray-700" />
                <span className="font-semibold text-gray-800 ml-1">
                  {pet.price}
                </span>
              </div>
            </div>
          </div>
        ) : null
      )}
    </div>
  </div>
))
}

            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

{/* <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Purchase Statistics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-indigo-50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Total Spent
                </h3>
                <p className="text-3xl font-bold text-[#FF9A76]">{}</p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Processing
                </h3>
                <p className="text-3xl font-bold text-[#FF9A76]">2</p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Pets Adopted
                </h3>
                <p className="text-3xl font-bold text-[#FF9A76]">0</p>
              </div>
            </div>
          </div> */}


//           {orders.map((item) => (
//                 <div
//                   key={item._id}
//                   className="border border-gray-200 rounded-lg overflow-hidden"
//                 >
//                   <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
//                     <div className="flex justify-between items-center">
//                       <div className="flex items-center space-x-2">
//                         {item.status === "adoption" ? (
//                           <ShoppingBag size={20} className="text-[#fea788]" />
//                         ) : (
//                           <Package size={20} className="text-[#fea788]" />
//                         )}
//                         <span className="font-medium text-gray-800">
//                           {item.status === "adoption"
//                             ? "Pet Adoption"
//                             : "Product Purchase"}
//                         </span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <Calendar size={16} className="text-gray-500" />
//                         <span className="text-sm text-gray-500">
//                           {new Date(item.createdAt).toISOString().slice(0, 10)}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
                        
//                   <div className="px-6 py-4">
                    
//                         {item.pets.map(({ pet, quantity, _id }) => (
//   pet ? (
//     <div className="flex" key={_id}>
//       <div className="w-24 h-24 mr-4 flex-shrink-0">
//         <img
//           src={pet.image}
//           alt={pet.name}
//           className="w-full h-full object-cover rounded-md"
//         />
//       </div>
//       <div className="flex-grow">
//         <h3 className="text-lg font-semibold text-[#8A9B6E] mb-1">
//           {pet.name}
//         </h3>
//         <p className="text-gray-600 mb-2">
//           Breed: {pet.breed}
//         </p>
//         <div className="flex items-center">
//           <DollarSign size={16} className="text-gray-700" />
//           <span className="font-semibold text-gray-800">
//             {pet.price}
//           </span>
//         </div>
//       </div>
//     </div>
//   ) : null // skip if pet is null
// ))}

                    
                    
//                   </div>

//                   <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
//                     <div className="flex justify-end space-x-3">
//                       {item.status === "adoption" ? (
//                         <button className="text-[#fea788] hover:text-[#dc7049] text-sm font-medium">
//                           View Adoption Details
//                         </button>
//                       ) : (
//                         <>
//                           <button className="text-[#fea788] hover:text-[#dc7049] text-sm font-medium">
//                             View Order Details
//                           </button>
//                           {item.status !== "cancelled" && (
//                             <button className="text-[#fea788] hover:text-[#dc7049] text-sm font-medium">
//                               <a href="/pets">Buy Again</a>
//                             </button>
//                           )}
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}