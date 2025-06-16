// import { zodResolver } from '@hookform/resolvers/zod'
// import { useForm, type SubmitHandler } from 'react-hook-form'
// import * as z from "zod"
// import { registerSchema } from '../services/register'
// import { useNavigate } from 'react-router-dom'

//  type FormInput = z.infer<typeof registerSchema>


// const Profile = () => {
//     const {register,handleSubmit,formState:{errors,isSubmitting},reset}= useForm<FormInput>({
//             resolver : zodResolver(registerSchema)
//         })

//         const navigate = useNavigate()

//     const submit: SubmitHandler<FormInput> = async (data)=>{
//         try {
//           navigate('/login')
//         } catch (error:any) {
//           console.log(error)
//         }
//     }

//   return (
//     <div>Profile</div>
//   )
// }

// export default Profile 