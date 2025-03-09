import AppFooter from "~/components/app/app-footer"
import GroceryCard from "~/components/app/grocery-card"
import AppMobileHeader from "~/components/app/mobile-header"
import MobileNavigation from "~/components/app/mobile-nav"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"

const HomePage = () => {
  return (
    <div className="h-screen w-screen bg-[#F6F3F3] flex flex-col">
      <AppMobileHeader/>
      <div className="flex-1 overflow-y-auto py-5">
        <section className="flex w-full px-5">
          <Input placeholder="Search for product" className="flex-1 focus:outline-none rounded-l-full rounded-r-none text-sm"/>
          <Button className="bg-green w-max shrink-0 font-normal text-white rounded-l-none flex items-center gap-2 rounded-r-full">
            <i className="icon-[fluent--search-20-regular] text-xl"></i>
            <span>Search</span>
          </Button>
        </section>
        {/* <div className="bg-white rounded-lg p-5">
        </div> */}
        <section className="px-5 mt-5">
        <div className="w-full bg-white flex px-2 pb-2 pt-1 rounded-lg overflow-x-auto">
          <Button className="text-text-primary-dark font-normal rounded-none p-3 bg-transparent">Garri</Button>
          <Button className="text-text-primary-dark font-normal rounded-none p-3 bg-transparent">Yam</Button>
          <Button className="text-text-primary-dark font-normal rounded-none p-3 bg-transparent">Cereal</Button>
          <Button className="text-text-primary-dark font-normal rounded-none p-3 bg-transparent">Beans</Button>
          <Button className="border-b border-green font-normal text-green rounded-none p-3 bg-transparent">Rice</Button>
          <Button className="text-text-primary-dark font-normal rounded-none p-3 bg-transparent">Beverages</Button>
          <Button className="text-text-primary-dark font-normal rounded-none p-3 bg-transparent">Custard</Button>
          <Button className="text-text-primary-dark font-normal rounded-none p-3 bg-transparent">Chicken</Button>
          <Button className="text-text-primary-dark font-normal rounded-none p-3 bg-transparent">Fruit Drinks</Button>
          <Button className="text-text-primary-dark font-normal rounded-none p-3 bg-transparent">Vegetables</Button>
          <Button className="text-text-primary-dark font-normal rounded-none p-3 bg-transparent">Pasta</Button>
        </div>
        </section>
        <section className="mt-5 flex px-5 flex-col gap-3">
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
        <div className="mt-10">
          <AppFooter/>
        </div>
      </div>
      <MobileNavigation/>
    </div>
  )
}

export default HomePage