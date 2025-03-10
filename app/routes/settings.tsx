import AppFooter from "~/components/app/app-footer"
import AppHeader from "~/components/app/app-header"
import MobileNavigation from "~/components/app/mobile-nav"
import FooterComponent from "~/components/landing-page/footer"
import { Button } from "~/components/ui/button"

const SettingsPage = () => {
  return (
    <div className="h-screen w-screen bg-[#F6F3F3] flex flex-col">
      <AppHeader/>
      <div className="flex-1 overflow-y-auto flex flex-col py-5 lg:pb-0">
        <section className="p-5 lg:w-[60%] mx-auto bg-white rounded-lg">
          <h1 className="text-text-primary-dark text-xl mb-5">Account</h1>
          <div className="flex gap-5 items-center">
            <div className="relative">
              <img src='/profile-cover.png' alt="Profile" className="w-28 h-28 rounded-full"/>
              <span className="inline-flex absolute bottom-[-5px] left-0 right-0 mx-auto my-0 text-xs bg-[linear-gradient(105.28deg,#009933_-6.28%,#62D288_41.58%,#009933_100%)] text-[#E7F6EC] shadow-[0px_1px_1px_0px_#00000066] rounded-full w-fit px-2">Tier 1</span>
            </div>
            <div className="flex flex-col gap-2 text-text-primary-dark">
              <span className="font-semibold text-lg">Allen Francis</span>
              <span>allenfrancis@gmail.com</span>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-5 p-5 bg-[#F7F9FC]">
            <div className="w-full rounded-lg pt-5 bg-white">
              <h1 className="ml-5 mb-5">About</h1>
              <div className="flex flex-col mt-5 divide-y">
                  <div className="flex gap-5 items-center p-5 text-text-primary-dark">
                    <i className="icon-[proicons--mail] w-7 h-7"></i>
                    <span>macphersonkel@gmail.com</span>
                  </div>
                  <div className="flex gap-5 items-center p-5 text-text-primary-dark">
                    <i className="icon-[lucide--phone] w-7 h-7"></i>
                    <span>+234814797214</span>
                  </div>
                  <div className="flex gap-5 items-center p-5 text-text-primary-dark">
                    <i className="icon-[mage--calendar-minus] w-7 h-7"></i>
                    <span>11 Aug 2002</span>
                  </div>
              </div>
            </div>
            <div className="w-full rounded-lg pt-5 bg-white">
              <div className="px-5 flex justify-between items-center">
                <h1 className="">My Address</h1>
                <Button className='p-0 underline text-green bg-transparent'>Add Address</Button>
              </div>
              <div className="flex flex-col mt-5 divide-y">
                  <div className="flex gap-5 items-center p-5 text-text-primary-dark">
                    <i className="icon-[qlementine-icons--location-16] w-7 h-7"></i>
                    <span>20 Igbogo Rd, Choba, Port Harcourt</span>
                  </div>
                  <div className="flex gap-5 items-center p-5 text-text-primary-dark">
                    <i className="icon-[qlementine-icons--location-16] w-7 h-7"></i>
                    <span>20 Igbogo Rd, Choba, Port Harcourt</span>
                  </div>
              </div>
            </div>
            <div className="w-full rounded-lg pt-5 bg-white">
              <h1 className="ml-5 mb-5">Settings</h1>
              <div className="flex flex-col mt-5 border-t divide-y">
                  <div className="flex justify-between pr-5 items-center">
                    <div className="flex gap-5 items-center p-5 text-text-primary-dark">
                      <i className="icon-[mingcute--question-line] w-7 h-7"></i>
                      <span>Change Password</span>
                    </div>
                    <Button className="bg-transparent p-0">
                      <i className="icon-[meteor-icons--chevron-right] text-text-primary-dark w-5 h-5"></i>
                    </Button>
                  </div>
                  <div className="flex justify-between pr-5 items-center">
                  <div className="flex gap-5 items-center p-5 text-red">
                    <i className="icon-[gg--trash] w-7 h-7"></i>
                    <span>Delete Account</span>
                  </div>
                    <Button className="bg-transparent p-0">
                      <i className="icon-[meteor-icons--chevron-right] text-text-primary-dark w-5 h-5"></i>
                    </Button>
                  </div>
                  
                  <div className="flex gap-5 items-center p-5 text-red">
                  <i className="icon-[mynaui--logout] w-7 h-7"></i>
                  <span>Logout</span>
                  </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-10">
        <div className="lg:hidden">
            <AppFooter/>
          </div>
          <div className="hidden lg:block">
            <FooterComponent showFaq={false}/>
          </div>
        </div>
      </div>
      <MobileNavigation/>
    </div>
  )
}

export default SettingsPage