import  { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import axios from "axios";

export function PetList() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios
      .get("https://petshop-c875.onrender.com/getPets")

      .then((response) => {
        console.log("API Response:", response.data.petInfo);
        setPets(response.data.petInfo)})

      .catch((error) => console.error("Error fetching pets:", error));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://petshop-c875.onrender.com/deletePets/${id}`);
      setPets(pets.filter(pet => pet._id !== id));
      toast.success('Pet deleted successfully'); // Uncomment if using toast
    } catch (error) {
      console.error('Error deleting pet:', error);
      toast.error('Failed to delete pet'); // Uncomment if using toast
    }
  };
//   const handleDelete = async (petId) => {
//     try {
//       await axios.delete(`http://localhost:3000/api/v1/pet/delete/${petId}`);
//       // Refresh the list or update state
//     } catch (error) {
//       console.error("Error deleting pet:", error.response?.data || error.message);
//     }
//   };

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
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Breed
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Age
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pets.map((pet) => (
              <tr key={pet.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {pet.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <img className=" w-[100px] " src={pet.image} alt="" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {pet.breed}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {pet.age} years
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${pet.price?.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleDelete(pet._id)}
                    className="text-red-600 hover:text-red-900 focus:outline-none"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
            {pets.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="px-6 py-4 text-center text-sm text-gray-500"
                >
                  No pets available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}