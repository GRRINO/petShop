import {
  LampCeiling, 
  User2Icon,
  Bird,
  MessageCircleHeart,
  Image,
  HandCoins,
  TvMinimalPlay
} from "lucide-react";
import { petCreateSchema } from "../services/petCreate";
import type { z } from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { usePetCreateMutation } from "../slices/userApi";
import { useNavigate } from "react-router-dom";
import PetIconsBackground from "../components/PetIconsBackground";

type FormInput = z.infer<typeof petCreateSchema>;

const PetCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormInput>({
    resolver: zodResolver(petCreateSchema),
  });

  const [petCreateMutation,{isLoading}]=usePetCreateMutation()
      const navigate = useNavigate()

  const submit: SubmitHandler<FormInput> = async (data) => {
    try {
      await petCreateMutation(data)
          reset()
          toast.success("Pet Create Successful")
          navigate('/pets')
    } catch (error: any) {
      toast.error(error?.data);
    }
  };

  return (
    <div className="min-h-screen relative">
      <PetIconsBackground color="purple" density="high" />
      <div className="  bg-[#FFF5E1] py-8 min-h-screen flex items-center justify-center ">
        <div className=" z-30 bg-white mt-8 p-8 rounded-2xl shadow-lg max-w-md w-full">
          <div className="text-center mb-8">
            
            <p className="text-gray-600">Add Pet for shop</p>
          </div>

        
          <form className="space-y-6" onSubmit={handleSubmit(submit)}>
            <div className="relative">
              <User2Icon
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                {...register("name")}
                placeholder="Name"
                //   onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            <div className="relative">
              <Bird
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                {...register("breed")}
                placeholder="Breed"
                // onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
            <div className="relative">
              <MessageCircleHeart
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="number"
                {...register("age")}
                placeholder="Age"
                // onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              {errors.age && (
                <span className=" font-medium text-sm text-red-600">
                  {errors.age.message}
                </span>
              )}
            </div>
            <div className="relative">
              <Image
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                {...register("image")}
                placeholder="image"
                // onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
            <div className="relative">
              <HandCoins
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="number"
                {...register("price")}
                placeholder="price"
                // onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              {errors.price && (
                <span className=" font-medium text-sm text-red-600">
                  {errors.price.message}
                </span>
              )}
            </div>

            <div className="relative">
              <TvMinimalPlay
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                {...register("description")}
                placeholder="description"
                // onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
            <div className="relative">
              <LampCeiling
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                {...register("category")}
                placeholder="category"
                // onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            <button
              disabled={isSubmitting||isLoading}
              type="submit"
              className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white font-bold py-2 px-4 rounded-full hover:from-pink-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              Add
            </button>
          </form>

          
        </div>
      </div>
    </div>
  );
};

export default PetCreate;
