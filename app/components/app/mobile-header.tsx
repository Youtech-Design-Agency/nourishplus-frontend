import { Button } from "../ui/button"

const AppMobileHeader = () => {
  return (
    <div className="flex justify-between shrink-0 h-20 p-5 bg-white border-b sticky top-0 left-0 right-0 z-10 border-[#4444441A]">
        <img src="/main-app-logo.png" alt="Home Page Logo" className="h-full w-auto"/>
        <div className="flex items-center space-x-3">
            <span className="inline-flex relative">
                <i className="icon-[hugeicons--notification-02] text-text-primary-dark text-3xl"></i>
                <small className="absolute top-[-5px] right-[-15px] bg-red text-white inline-block rounded-full px-1">100</small>
            </span>
            <img src="/profile.png" className="h-10 w-10 object-cover rounded-full" alt="Profile"/>
            <Button className="p-0 focus:outline-none !bg-transparent hover:!bg-transparent">
                <i className="icon-[bi--chevron-down] text-2xl text-text-primary-dark"></i>
            </Button>
        </div>
    </div>
  )
}

export default AppMobileHeader