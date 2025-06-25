import React, { useState } from "react";
import useCartStore from "../store/cartStore";
import { ShoppingCart, X, Trash2 } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

type CartProps = {
  isOpen: boolean;
  onClose: () => void;
};

type CartItem = {
  _id: string;
  name: string;
  breed: string;
  image: string;
  price: number;
};

export default function Cart({ isOpen, onClose }: CartProps) {
  const { items, removeItem, clearCart } = useCartStore();
  const total = items.reduce((sum: number, item: CartItem) => sum + item.price, 0);
  const [isBookingCf, setShowBookingCf] = useState(false);

  // Get userId from localStorage (update this logic if you're using Redux/context)
  const user = JSON.parse(localStorage.getItem("userInfo") || "{}");
  const userId = user._id;

  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const petData = items.map((item) => ({
  petId: item._id,  
  quantity: 1       
}));


    const dataToSend = {
      userId,
      pets: petData,
    };

    try {
        console.log(dataToSend)
      const res = await axios.post("https://petshop-c875.onrender.com/order", dataToSend);
      
      setShowBookingCf(true);
      clearCart();
      toast(res.data.message)
    } catch (error) {
  if (axios.isAxiosError(error)) {
    console.error("Axios error:", error.response?.data);
    toast("Error: " + (error.response?.data?.message || error.message));
  } else {
    console.error("Unexpected error:", error);
    alert("Unexpected error occurred.");
  }
}
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4 sm:px-6">
  <div className="w-full max-w-4xl">
    {isBookingCf ? (
      <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 text-center">
        <div className="bg-green-100 text-green-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#8A9B6E] mb-4">Adoption Successful!</h2>
        <p className="text-base sm:text-lg text-gray-600 mb-6">
          We've sent a confirmation email with all the details.
        </p>
        <a
          href="/pets"
          className="inline-block bg-[#FF9A76] text-white px-6 py-3 rounded-md font-medium hover:bg-[#ff7f50] transition-colors"
        >
          Return to Shop
        </a>
      </div>
    ) : (
      <div className="bg-white rounded-lg p-4 sm:p-8 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center mb-6">
          <ShoppingCart className="w-6 h-6 text-[#FF9A76] mr-2" />
          <h2 className="text-xl sm:text-2xl text-[#8A9B6E] font-bold">Adoption Cart</h2>
        </div>

        {items.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="space-y-4 mb-6">
              {items.map((pet) => (
                <div
                  key={pet._id}
                  className="flex flex-col sm:flex-row items-center sm:justify-between bg-gray-50 p-4 rounded-lg"
                >
                  <div className="flex items-center space-x-4 w-full sm:w-auto">
                    <img
                      src={pet.image}
                      alt={pet.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{pet.name}</h3>
                      <p className="text-gray-600 text-sm">{pet.breed}</p>
                      <p className="text-[#8A9B6E] font-semibold text-sm">${pet.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(pet._id)}
                    className="mt-4 sm:mt-0 text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-white w-full rounded-lg shadow-md p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-center sm:text-left">
                  <div className="font-semibold text-gray-700">Total:</div>
                  <div className="text-xl font-bold text-[#8A9B6E]">${total}</div>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 w-full sm:w-auto rounded-md font-medium bg-[#FF9A76] text-white hover:bg-[#d37452] transition-colors"
                >
                  Process Adoption
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    )}
  </div>
</div>

  );
}