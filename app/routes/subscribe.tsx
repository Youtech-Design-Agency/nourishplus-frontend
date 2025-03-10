import AppFooter from "~/components/app/app-footer"
import AppHeader from "~/components/app/app-header"
import MobileNavigation from "~/components/app/mobile-nav"
import SubscriptionCart from "~/components/app/subscription-cart"
import SubscriptionPackageComponent from "~/components/app/subscription-package"
import FooterComponent from "~/components/landing-page/footer"
import { Button } from "~/components/ui/button"

const SubscriptionFoodPackage = () => {
  return (
    <div className="h-screen w-screen bg-[#F6F3F3] flex flex-col">
      <AppHeader/>
      <div className="flex-1 flex flex-col overflow-y-auto pt-5">
        <div className="bg-white shrink-0 rounded-lg lg:w-[80%] lg:mx-auto flex gap-5 items-center p-5">
            <Button className="bg-transparent border rounded-md py-1 px-2 h-fit">
                <i className="icon-[eva--arrow-back-outline] text-text-primary-dark w-5 h-5"></i>
            </Button>
            <h1 className="text-text-primary-dark">Basket Package</h1>
        </div>
        <div className="my-10 grid grid-cols-3 gap-10 lg:w-[80%] lg:mx-auto flex-1 bg-white rounded-lg p-10">
            <SubscriptionPackageComponent/>
            <SubscriptionPackageComponent/>
            <SubscriptionPackageComponent/>
        </div>
        <SubscriptionCart/>
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

export default SubscriptionFoodPackage