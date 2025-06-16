import {
  BoxIcon,
  LampCeiling,
  Loader2Icon,
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
      {/* <PetIconsBackground color="purple" density="high" /> */}
      <div className=" bg-[#FFF5E1] py-8 min-h-screen flex items-center justify-center ">
        <div className="bg-white mt-8 p-8 rounded-2xl shadow-lg max-w-md w-full">
          <div className="text-center mb-8">
            {/* <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Join Us!
            </h2> */}
            <p className="text-gray-600">Add Pet for shop</p>
          </div>

          {/* <div className="mb-6"> */}
          {/* <label className="flex items-center justify-center cursor-pointer"> */}
          {/* <div className="mr-3  text-gray-700 font-medium text-2xl">Register</div> */}
          {/* <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isLogin}
                  onChange={() => setIsLogin(!isLogin)}
                />
                <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                <div
                  className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
                    isLogin ? "transform translate-x-6" : ""
                  }`}
                ></div>
              </div>
              <div className="ml-3 text-gray-700 font-medium">Login</div> */}
          {/* </label> */}
          {/* </div> */}

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

          {/* <div className="mt-6 text-center">
            <a href="/login"   className="text-sm text-purple-600 hover:underline">
               Already have an account
            </a>
          </div> */}

          {/* <div className="mt-8 text-center">
            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              <span className="absolute px-3 font-medium text-gray-500 -translate-x-1/2 bg-white left-1/2">
                or
              </span>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <button className="bg-blue-500 p-2 rounded-full text-white hover:bg-blue-600">
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button className="bg-red-500 p-2 rounded-full text-white hover:bg-red-600">
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
              </button>
            </div> */}

          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default PetCreate;
