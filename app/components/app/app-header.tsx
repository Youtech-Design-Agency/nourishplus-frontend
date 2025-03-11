import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import NotificationsComponent from "./notifications"
import { Link, NavLink } from "@remix-run/react"

const AppHeader = () => {
  return (
    <div className="flex justify-between shrink-0 h-20 p-5 lg:px-10 bg-white border-b sticky top-0 left-0 right-0 z-10 border-[#4444441A]">
        <img src="/main-app-logo.png" alt="Home Page Logo" className="h-full w-auto"/>
        <div className="flex items-center space-x-3">
            <div className="hidden lg:flex gap-5 mr-20 items-center">
              <NavLink className={({isActive})=> `${isActive ? 'text-green' : 'text-text-primary-dark'}`} to='/dashboard'>Dashboard</NavLink>
              <NavLink className={({isActive})=> `${isActive ? 'text-green' : 'text-text-primary-dark'}`} to='/my-plans'>My Plans</NavLink>
            </div>
            <NotificationsComponent/>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex gap-2 items-center focus:outline-none">
                <img src="/profile.png" className="h-10 w-10 object-cover rounded-full" alt="Profile"/>
                <Button className="p-0 focus:outline-none !bg-transparent hover:!bg-transparent">
                    <i className="icon-[bi--chevron-down] text-2xl text-text-primary-dark"></i>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="p-3">
                  <Link to='/settings' className="flex items-center gap-2">
                  <img src='/settings.svg' alt="Settings" className="w-5 h-5"/>
                  Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex text-[#D42620] items-center gap-2 p-3">
                <img src='/sign-out.svg' alt="Settings" className="w-5 h-5"/>
                  Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </div>
  )
}

export default AppHeader