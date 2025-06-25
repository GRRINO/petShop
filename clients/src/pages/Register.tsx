 import { BoxIcon, LockKeyholeIcon, UserIcon } from 'lucide-react'
 import * as z from "zod"
import { registerSchema } from '../services/register'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRegisterMutation } from '../slices/userApi'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { Tab } from '../components/Tab'
import PetIconsBackground from '../components/PetIconsBackground'


 type FormInput = z.infer<typeof registerSchema>

 const Register = () => {

    const {register,handleSubmit,formState:{errors,isSubmitting},reset}= useForm<FormInput>({
        resolver : zodResolver(registerSchema)
    })

    const [registerMutation,{isLoading}]=useRegisterMutation()
    const navigate = useNavigate()

    const submit: SubmitHandler<FormInput> = async (data)=>{
        try {
          await registerMutation(data)
          reset()
          toast.success("Register Successful")
          navigate('/login')
        } catch (error:any) {
          toast.error(error)
        }
    }
      const [activeTab, setActiveTab] = useState<'customer' | 'admin'>('customer');

   return (
    <div className="min-h-screen relative">
      <PetIconsBackground color="purple" density="high" />
      <div className=" bg-[#FFF5E1] py-8 min-h-screen flex items-center justify-center ">
        <div className="bg-white mt-8 p-8 rounded-2xl shadow-lg max-w-md w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#8A9B6E] mb-2">
              Join Us!
            </h2>
            <p className="text-gray-600">
              
                Create an account to get started
            </p>
          </div>

          <div className="flex border-b border-gray-200">
          <Tab
            isActive={activeTab === 'customer'}
            onClick={() => setActiveTab('customer')}
            label="Customer"
          />
          <Tab
            isActive={activeTab === 'admin'}
            onClick={() => setActiveTab('admin')}
            label="Administrator"
          />

          
        </div>

          <div className="mb-6">
            <label className="flex items-center justify-center cursor-pointer">
              <div className="mr-3  text-[#8A9B6E] font-medium text-2xl">Register</div>
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
            </label>
          </div>
                <div className="p-6">
          {activeTab === 'customer' ? (
            <form className="space-y-3" onSubmit={handleSubmit(submit)} >
            
              <div className="relative">
                <UserIcon
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  {...(register("username"))}
                  placeholder="username"
                  
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
                
                {errors.username && <span className="  font-medium text-sm text-red-600">{errors.username.message}</span>}

              </div>

            
            <div className="relative">
              <BoxIcon
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="email"
                                  {...(register("email"))}

                placeholder="Email"
                
               
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
              {errors.email&&<span className=" font-medium text-sm text-red-600">{errors.email.message}</span>}

            <div className="relative">
              <LockKeyholeIcon
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="password"
                  {...(register("password"))}
                
                placeholder="Password"
                
                
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
              {errors.password&&<span className=" font-medium text-sm text-red-600">{errors.password.message}</span>}

            <button
                    disabled={isSubmitting||isLoading}
              type="submit"
              className="w-full bg-[#FF9A76] hover:bg-[#ff7e50] text-white font-bold py-2 px-4 rounded-full  focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
             Register
            </button>
          </form>
          ) : (
            <form className="space-y-3" onSubmit={handleSubmit(submit)} >
            
              <div className="relative">
                <UserIcon
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  {...(register("username"))}
                  placeholder="username"
                  
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
                
                {errors.username && <span className="  font-medium text-sm text-red-600">{errors.username.message}</span>}

              </div>

            
            <div className="relative">
              <BoxIcon
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="email"
                                  {...(register("email"))}

                placeholder="Email"
                
               
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
              {errors.email&&<span className=" font-medium text-sm text-red-600">{errors.email.message}</span>}

            <div className="relative">
              <LockKeyholeIcon
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="password"
                  {...(register("password"))}
                
                placeholder="Password"
                
                
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
              {errors.password&&<span className=" font-medium text-sm text-red-600">{errors.password.message}</span>}


<div className="relative">
              <LockKeyholeIcon
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="password"
                  {...(register("adminSecret"))}
                
                placeholder="Admin Secret"
                
                
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            <button
                    disabled={isSubmitting||isLoading}
              type="submit"
              className="w-full bg-[#FF9A76] hover:bg-[#ff7e50] text-white font-bold py-2 px-4 rounded-full  focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
             Register
            </button>
          </form>
          )}
        </div>
          

          <div className="mt-6 text-center">
            <a href="/login"   className="text-sm text-purple-600 hover:underline">
               Already have an account
            </a>
          </div>

          <div className="mt-8 text-center">
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
            </div>
            
          </div>
        </div>
      </div>
    </div>
   )
 }
 
 export default Register