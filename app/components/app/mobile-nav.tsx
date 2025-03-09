import { NavLink } from "@remix-run/react"

const MobileNavigation = () => {
  return (
    <nav className="sticky bottom-0 shrink-0 flex items-center justify-around bg-white py-1 border-t border-text-primary-dark/10 left-0 right-0 h-20">
        <NavLink className={({ isActive }) =>
             `${isActive ? 'text-green' : 'text-text-primary-dark/60'} flex flex-col items-center`
        } to="/home">
            <i className="icon-[mage--home-2] text-xl"></i>
            <span>Home</span>
        </NavLink>
        <NavLink className={({ isActive }) =>
             `${isActive ? 'text-green' : 'text-text-primary-dark/60'} flex flex-col items-center`
        } to="/my-plans">
            <i className="icon-[lucide--tag] text-xl"></i>
            <span>My Plan</span>
        </NavLink>
        <NavLink className={({ isActive }) =>
             `${isActive ? 'text-green' : 'text-text-primary-dark/60'} flex flex-col items-center`
        } to="/account">
            <i className="icon-[tdesign--user-1] text-xl"></i>
            <span>Account</span>
        </NavLink>
    </nav>
  )
}

export default MobileNavigation