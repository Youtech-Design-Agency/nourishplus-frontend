import { Link } from "@remix-run/react"
import AppFooter from "~/components/app/app-footer"
import CartComponent from "~/components/app/cart"
import GroceryCard from "~/components/app/grocery-card"
import MobileNavigation from "~/components/app/mobile-nav"
import FooterComponent from "~/components/landing-page/footer"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import AppHeader from "~/components/app/app-header"


const HomePage = () => {
  return (
    <div className="h-screen w-screen bg-[#F6F3F3] flex flex-col">
      <AppHeader/>
      <div className="flex-1 flex flex-col overflow-y-auto pt-5">
        <section className="flex w-full lg:w-[70%] lg:max-w-[700px] lg:mx-auto px-5">
          <Input placeholder="Search for product" className="flex-1 h-12 lg:px-5 focus:outline-none rounded-l-full rounded-r-none text-sm"/>
          <Button className="bg-green w-max shrink-0 font-normal h-12 text-white rounded-l-none flex items-center gap-2 rounded-r-full">
            <i className="icon-[fluent--search-20-regular] text-xl"></i>
            <span>Search</span>
          </Button>
        </section>
        <section className="lg:bg-white lg:w-[80%] lg:rounded-lg lg:mt-5 lg:mx-auto">
          {/* <div className="bg-white rounded-lg p-5">
        </div> */}
        <div className="hidden lg:flex justify-center gap-5 py-5">
            <div className="w-60 py-5 rounded-lg flex flex-col items-center justify-center bg-[#F4F4F4]">
              <i className="icon-[mdi--gift] w-10 h-10 text-green"></i>
              <h3 className="text-text-primary-dark font-semibold">Gift Someone</h3>
              <span className="text-text-primary-dark text-sm">Package</span>
            </div>
            <Link to='/subscribe' className="w-60 py-5 rounded-lg flex flex-col items-center justify-center bg-[#F4F4F4]">
              <i className="icon-[ix--product] w-10 h-10 text-green"></i>
              <h3 className="text-text-primary-dark font-semibold">Subscribe</h3>
              <span className="text-text-primary-dark text-sm">Food Package</span>
            </Link>
            <div className="w-60 py-5 rounded-lg flex flex-col items-center justify-center bg-[#F4F4F4]">
              <i className="icon-[bi--basket-fill] w-10 h-10 text-green"></i>
              <h3 className="text-text-primary-dark font-semibold">Create Custom</h3>
              <span className="text-text-primary-dark text-sm">Basket</span>
            </div>
        </div>
        <section className="px-5 lg:px-10 border-y py-5 mt-5">
          <div className="w-full bg-white flex lg:justify-center lg:gap-5 px-2 pb-2 pt-1 rounded-lg overflow-x-auto">
            <Button className="text-text-primary-dark font-normal rounded-none p-3 bg-transparent lg:border lg:border-[#E4E7EC] lg:rounded-lg lg:px-4 lg:!py-0 lg:h-8">Garri</Button>
            <Button className="text-text-primary-dark font-normal rounded-none p-3 bg-transparent lg:border lg:border-[#E4E7EC] lg:rounded-lg lg:px-4 lg:!py-0 lg:h-8">Yam</Button>
            <Button className="text-text-primary-dark font-normal rounded-none p-3 bg-transparent lg:border lg:border-[#E4E7EC] lg:rounded-lg lg:px-4 lg:!py-0 lg:h-8">Cereal</Button>
            <Button className="text-text-primary-dark font-normal rounded-none p-3 bg-transparent lg:border lg:border-[#E4E7EC] lg:rounded-lg lg:px-4 lg:!py-0 lg:h-8">Beans</Button>
            <Button className="border-b border-green font-normal text-green rounded-none p-3 bg-transparent lg:border lg:border-[#E4E7EC] lg:rounded-lg lg:px-4 lg:!py-0 lg:h-8 lg:bg-green lg:text-white">Rice</Button>
            <Button className="text-text-primary-dark font-normal rounded-none p-3 bg-transparent lg:border lg:border-[#E4E7EC] lg:rounded-lg lg:px-4 lg:!py-0 lg:h-8">Beverages</Button>
            <Button className="text-text-primary-dark font-normal rounded-none p-3 bg-transparent lg:border lg:border-[#E4E7EC] lg:rounded-lg lg:px-4 lg:!py-0 lg:h-8">Custard</Button>
            <Button className="text-text-primary-dark font-normal rounded-none p-3 bg-transparent lg:border lg:border-[#E4E7EC] lg:rounded-lg lg:px-4 lg:!py-0 lg:h-8">Chicken</Button>
            <Button className="text-text-primary-dark font-normal rounded-none p-3 bg-transparent lg:border lg:border-[#E4E7EC] lg:rounded-lg lg:px-4 lg:!py-0 lg:h-8">Fruit Drinks</Button>
            <Button className="text-text-primary-dark font-normal rounded-none p-3 bg-transparent lg:border lg:border-[#E4E7EC] lg:rounded-lg lg:px-4 lg:!py-0 lg:h-8">Vegetables</Button>
            <Button className="text-text-primary-dark font-normal rounded-none p-3 bg-transparent lg:border lg:border-[#E4E7EC] lg:rounded-lg lg:px-4 lg:!py-0 lg:h-8">Pasta</Button>
          </div>
        </section>
        <section className="mt-5 flex px-5 lg:mt-10 lg:pb-10 flex-col lg:grid lg:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] lg:gap-10 lg:px-20 gap-3">
          <GroceryCard/>
          <GroceryCard/>
          <GroceryCard/>
          <GroceryCard/>
          <GroceryCard/>
          <GroceryCard/>
          <GroceryCard/>
          <GroceryCard/>
          <GroceryCard/>
          <GroceryCard/>
        </section>
          <div className="flex items-center justify-center">
            <Button className="my-10 mx-auto text-text-primary-dark bg-transparent">See More <i className="icon-[mynaui--chevron-down] text-green ml-2 w-5 h-5"></i></Button>
          </div>
          
          <CartComponent/>
          

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

export default HomePage