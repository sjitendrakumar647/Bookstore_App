import React from 'react'
import { useAuth } from '../context/AuthProvider'
import { toast } from 'react-toastify'

export default function Logout() {
  const [authUser,setAuthUser] = useAuth()
  const handelLogout =()=>{
    try{
      setAuthUser({
        ...authUser,
        user:null
      })
      localStorage.removeItem("users")
      toast.success("Successfully Loggedout ✅");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
      
    }catch(err){
      toast.error("Error:" + err.message);
    }
  }
  return (
    <div>
      <button className='bth bg-red-500 p-2 px-3 rounded cursor-pointer hover:bg-red-700 transition-all'
      onClick={handelLogout}>
        logout
      </button>
    </div>
  )
}
