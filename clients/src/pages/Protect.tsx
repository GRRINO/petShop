import { useSelector } from "react-redux";
import type { RootState } from '../store';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface Props{
    children : React.ReactNode;
}

const Protect = ({children}:Props) => {
    const  userInfo = useSelector((state:RootState)=> state.auth.userInfo)
    const navigate = useNavigate()

    useEffect(()=>{
        if(!userInfo){
            navigate('/')
        }
    },[userInfo])

  return (
    <>{children}</>
  )
}

export default Protect