import { useNavigate } from "@remix-run/react"
import { Button } from "../ui/button"
import { ReactNode } from "react";

const AuthScreenWrapper = ({children}: {children: ReactNode}) => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen grid grid-cols-2">
       <section className="h-full relative hidden lg:flex col-span-1 bg-[#126C12]">
        <h1 className="text-white text-left font-bold text-[60px] mt-[10rem] mx-auto">Welcome to <br/> Nourish+</h1>
    <img src="/auth-screen.png" alt="Authentication Screen Background" className="absolute bottom-0 left-0 right-0 mx-auto my-0"/>
   </section>
       <section className="col-span-2 lg:col-span-1 flex flex-col">
       <div className="h-20 border-b p-5 lg:hidden">
            <Button onClick={()=>navigate(-1)} className="bg-transparent border-none hover:bg-transparent">
                <i className="icon-[fluent-mdl2--back] text-text-primary-dark text-xl"></i>
            </Button>
        </div>
        <div className="hidden lg:flex lg:gap-12 items-center px-20 pt-20">
            <Button className="border !h-fit rounded-lg bg-transparent !px-2 !py-1">
                <img src='/arrow-left.svg' alt="Arrow Left" className="w-5 h-auto"/>
            </Button>
            <img alt="Logo" src="/nourish-plus-light.png" className="h-auto w-auto"/>
        </div>
        {children}
       </section>
    </div>
  )
}

export default AuthScreenWrapper