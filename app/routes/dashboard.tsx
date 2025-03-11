import { Link } from "@remix-run/react"
import AppFooter from "~/components/app/app-footer"
import CartComponent from "~/components/app/cart"
import GroceryCard from "~/components/app/grocery-card"
import MobileNavigation from "~/components/app/mobile-nav"
import FooterComponent from "~/components/landing-page/footer"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import AppHeader from "~/components/app/app-header"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel"
import { useEffect, useState } from "react"
import { cn } from "~/lib/utils"

const HomePage = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(3);
  
  useEffect(() => {
    if (!api) return;
    
    // Set up event listeners to track the current slide
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
    
    api.on("resize", () => {
      setCount(api.scrollSnapList().length);
    });
    
    // Initialize
    setCurrent(api.selectedScrollSnap());
    setCount(api.scrollSnapList().length);
  }, [api]);

  // Function to navigate to a specific slide by index
  const goToSlide = (index: number) => {
    api?.scrollTo(index);
  };
  return (
    <div className="h-screen w-screen bg-[#F6F3F3] flex flex-col">
      <AppHeader/>
      <div className="flex-1 flex flex-col overflow-y-auto pt-5">
        <section className="flex w-full lg:w-[70%] lg:max-w-[700px] lg:mx-auto px-5">
          <Input placeholder="Search for product" className="flex-1 h-12 px-5 focus:outline-none rounded-l-full rounded-r-none text-sm"/>
          <Button className="bg-green w-max shrink-0 font-normal h-12 text-white rounded-l-none flex items-center gap-2 rounded-r-full">
            <i className="icon-[fluent--search-20-regular] text-xl"></i>
            <span>Search</span>
          </Button>
        </section>
        <section className="lg:bg-white lg:w-[80%] lg:rounded-lg lg:mt-5 lg:mx-auto">
          <section className="px-5 mt-5 lg:hidden">
          <div className="bg-white rounded-lg p-[10px]">
            <Carousel setApi={setApi} opts={{loop: true}} className="rounded-lg dashboard-carousel">
                <CarouselContent className="rounded-lg">
                  <CarouselItem className="bg-[#FFE7CC] relative text-text-primary-dark rounded-lg p-5 ">
                    <div className="flex flex-col gap-2 ml-3">
                    <h1 className="text-2xl">Gift a basket today</h1>
                    <p className="">Send a curated basket to <br/> anyone</p>
                    <Link to='/subscribe' className="underline mt-2 text-green">Add item to cart</Link>
                    </div>
                    <img src="/gift-card-bg-image.png" alt="Gift Box" className="h-full w-auto absolute right-0 bottom-0"/>
                  </CarouselItem>
                  <CarouselItem className="bg-[#FFE7CC] relative text-text-primary-dark rounded-lg p-5 ">
                    <div className="flex flex-col gap-2 ml-3">
                    <h1 className="text-2xl">Gift a basket today</h1>
                    <p className="">Send a curated basket to <br/> anyone</p>
                    <Link to='/subscribe' className="underline mt-2 text-green">Add item to cart</Link>
                    </div>
                    <img src="/gift-card-bg-image.png" alt="Gift Box" className="h-full w-auto absolute right-0 bottom-0"/>
                  </CarouselItem>
                  <CarouselItem className="bg-[#FFE7CC] relative text-text-primary-dark rounded-lg p-5 ">
                    <div className="flex flex-col gap-2 ml-3">
                    <h1 className="text-2xl">Gift a basket today</h1>
                    <p className="">Send a curated basket to <br/> anyone</p>
                    <Link to='/subscribe' className="underline mt-2 text-green">Add item to cart</Link>
                    </div>
                    <img src="/gift-card-bg-image.png" alt="Gift Box" className="h-full w-auto absolute right-0 bottom-0"/>
                  </CarouselItem>
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
            </Carousel>
            <div className="flex mt-2 justify-center gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "h-2 rounded-full transition-colors",
                    current === index ? "bg-green w-4" : "bg-gray-300 w-2 hover:bg-gray-400"
                  )}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          </section>
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
        <section className="px-5 lg:px-10 lg:border-y py-5 mt-5">
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