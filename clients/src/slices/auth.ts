import { createSlice } from "@reduxjs/toolkit"

interface AuthSlice {
    userInfo : {
        _id:string,
        email:string,
        username:string,
        role:string
    } | null
}

const initialState :AuthSlice = {
    userInfo : localStorage.getItem("userInfo") ? JSON.parse( localStorage.getItem("userInfo") as string ): null
}

const authSlide = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUserInfo : (state,action)=>{
            state.userInfo = action.payload
            localStorage.setItem("userInfo",JSON.stringify(action.payload))
        },
        clearUserInfo:(state)=>{
            state.userInfo = null
            localStorage.removeItem("userInfo",)
        }
    }
})
export const {setUserInfo,clearUserInfo} = authSlide.actions
export default authSlide.reducer