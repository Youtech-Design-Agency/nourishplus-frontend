import { Link, NavLink, useNavigate } from "@remix-run/react"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog"

const HeaderComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between sticky top-0 right-0 left-0 z-10 items-center h-20 p-5 lg:px-16 bg-white border-b border-[#44444433]">
        <Link to={'/'}>
            <img src='/nourish-plus-light.png' alt="Logo" className="h-full w-auto shrink-0"/>
        </Link>
        <section className="hidden lg:flex lg:items-center gap-20">
        <div className="flex gap-10 items-center">
          <NavLink className={({ isActive }) =>
             `${isActive ? 'text-green' : 'text-text-primary-dark'} items-center`} to='/'>Home</NavLink>
          <NavLink className={({ isActive }) =>
             `${isActive ? 'text-green' : 'text-text-primary-dark'} items-center`} to='/about-us'>About Us</NavLink>
          <NavLink className={({ isActive }) =>
             `${isActive ? 'text-green' : 'text-text-primary-dark'} items-center`} to='/contact-us'>Contact Us</NavLink>
        </div>
        <div className="flex gap-5 text-sm">
        <Button onClick={()=>navigate('/login')} className="primary-outline-button !py-0 !font-normal !border-green !text-green w-fit px-10">Login</Button>
        <Button onClick={()=>navigate('/register')} className="primary-button w-fit !py-0 !font-normal">Register Account</Button>
        </div>
        </section>
        <Dialog>
      <DialogTrigger className="lg:hidden" asChild>
        <Button className="bg-green  rounded-md px-1 py-0 hover:bg-green w-fit h-fit">
              <i className="icon-[mingcute--menu-line] w-8 h-8 text-white"></i>
          </Button>
      </DialogTrigger>
      <DialogContent className="w-[80%] h-[60vh] p-5 bg-green-primary rounded-lg border border-green-primary">
        <div className="flex flex-col items-center mx-auto mt-20">
          <NavLink className={({isActive})=> `${isActive ? 'text-yellow' : 'text-white'} p-3`} to='/'>Home</NavLink>
          <NavLink className={({isActive})=> `${isActive ? 'text-yellow' : 'text-white'} p-3`} to='/about-us'>About Us</NavLink>
          <NavLink className={({isActive})=> `${isActive ? 'text-yellow' : 'text-white'} p-3`} to='/contact-us'>Contact Us</NavLink>
        </div>
        <div className="flex flex-col mx-auto gap-5 mb-10 mt-auto w-[70%]">
          <Button onClick={()=>navigate('/login')} className="primary-outline-button w-full !font-normal">Login</Button>
          <Button onClick={()=>navigate('/register')} className="primary-button w-full !font-normal">Register Account</Button>
        </div>
      </DialogContent>
    </Dialog>

    </div>
  )
}

export default HeaderComponent