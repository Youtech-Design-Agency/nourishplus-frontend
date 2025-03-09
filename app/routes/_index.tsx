import type { MetaFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import FooterComponent from "~/components/landing-page/footer";
import SubscriptionPackageComponent from "~/components/landing-page/package";
import { subscriptionPackages } from "~/components/landing-page/packages";
import { Button } from "~/components/ui/button";


export const meta: MetaFunction = () => {
  return [
    { title: "Nourish Plus" },
    { name: "description", content: "Grocery shopping and delivery app offering convenient one-time orders or subscription-based services. Enjoy hassle-free shopping with fresh groceries delivered to your doorstep on your schedule." },
  ];
};

export default function Index() {
  const navigate = useNavigate();
  return (
   <main>
    <section className="h-fit pb-40 lg:pb-48 bg-green-primary">
      <div className="w-full h-12 bg-[url('/home-header.svg')]"> </div>
      <div className="px-10 pt-16 lg:w-[60%] lg:max-w-[700px] lg:mx-auto">
      <div className="flex flex-col items-center gap-[6px] lg:w-[75%] lg:mx-auto">
        <Button className="bg-yellow rotate-[0.099rad] font-bold h-[3.5rem] w-full text-xl border-yellow-primary border-[0.5px]">Your trusted grocery &</Button>
        <Button className="bg-green-tertiary rotate-[-0.07rad] ml-5 h-[3.5rem] w-[80%] text-xl font-bold text-green border-green-light border-[0.5px]">Food marketplace</Button>
      </div>
      <p className="text-center text-text-secondary-light mt-10 font-normal text-lg">
        Now you can shop smart, skip the lines and enjoy the cheapest <br className="hidden lg:block"/> food prices. Grocedy makes Grocery Shopping Easy, Fun, <br className="hidden lg:block"/> Affordable, and Rewarding for everyone.
      </p>
      <div className="flex flex-col lg:flex-row lg:justify-center gap-5 mt-10 w-[85%] mx-auto ">
        <Button onClick={()=>navigate('/login')} className="primary-outline-button w-full lg:w-fit lg:px-10">Login</Button>
        <Button onClick={()=>navigate('/register')} className="primary-button w-full lg:w-fit">Register Account</Button>
      </div>
      </div>
    </section>
      <section className="flex flex-col my-20">
      <h1 className="text-center text-[30px] mb-10 text-text-primary-dark font-semibold">How it works</h1>
      <div className="flex flex-col md:w-[70%] lg:flex-row gap-10 lg:px-20 lg:w-max md:mx-auto lg:gap-20">
        <section className="pr-10 lg:pr-0 px-3">
          <div className="flex flex-col mt-5 lg:mt-0 lg:h-full">
            <div className="flex flex-1 h-max gap-5 items-stretch">
              <div className="flex flex-col gap-2 justify-center">
                <span className="w-10 h-10 shrink-0 rounded-full inline-flex items-center justify-center text-center bg-green text-white">1</span>
                <hr className="w-px bg-text-primary-light mx-auto flex-grow"/>
              </div>
              <div className="flex flex-col gap-3 pb-10">
                  <h3 className="text-lg text-green font-semibold">Sign Up & Get Verified</h3>
                  <p className="text-text-primary-dark">Complete our easy sign-up process, and <br className="hidden lg:block"/> we&apos;ll guide you through verification.</p>
              </div>
            </div>
            <div className="flex flex-1 gap-5 items-stretch">
              <div className="flex flex-col justify-center">
                <span className="w-10 h-10 shrink-0 rounded-full inline-flex items-center justify-center text-center bg-text-primary-dark text-white">2</span>
                <hr className="w-px bg-text-primary-light mx-auto flex-grow"/>
              </div>
              <div className="flex flex-col gap-3 pb-10">
                  <h3 className="text-text-primary-dark text-lg">Select Your Basket</h3>
                  <p className="text-text-primary-dark">You can pick from our pre-curated baskets or <br className="hidden lg:block"/> create your own basket with food items you love.</p>
              </div>
            </div>
            <div className="flex flex-1 gap-5 items-start">
              <span className="w-10 h-10 shrink-0 rounded-full inline-flex items-center justify-center text-center bg-text-primary-dark text-white">3</span>
              <div className="flex flex-col gap-3">
                  <h3 className="text-text-primary-dark text-lg">Get Your Monthly Food Basket</h3>
                  <p className="text-text-primary-dark">Sit back and we&apos;ll have your food basket <br className="hidden lg:block"/> delivered to your doorstep each month.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="px-5 py-16 lg:py-0">
          <img src="/iphone.png" alt="Iphone" width="100%" height="100%" className="w-full h-auto"/>
        </section>
      </div>
      </section>
    <section className="bg-green-primary w-full py-16 flex flex-col lg:flex-row lg:justify-center lg:gap-20 gap-5 items-center">
      <div className="flex flex-col gap-5">
      <h1 className="font-semibold text-white text-[30px] text-center lg:text-left">Too Busy to shop? <br/> Leave it to us!</h1>
      <p className="text-text-secondary-light text-center lg:text-left">We&apos;ll take care of the food item <br className="lg:hidden"/> while you relax or <br className="hidden lg:block"/> focus on more <br className="lg:hidden"/> things that matter.</p>
      <Button className="primary-outline-button rounded-lg mx-auto lg:mx-0 w-fit !font-normal">Open an account</Button>
      </div>
      <div className="w-[80%] md:w-[60%] lg:w-auto mt-10 relative">
        <img src="/thinking-person.png" alt="Person" width="100%" height="100%" className="w-full rounded-lg h-auto"/>
        <img src="/yellow-star.png" alt="Star" width="100%" height="100%" className="absolute top-5 right-5 w-auto h-auto"/>
      </div>
    </section>
    <section className="py-16">
      <h1 className="text-[30px] text-text-primary-dark text-center font-semibold">Our Package Plan</h1>
      <div className="px-2 flex flex-col items-center lg:flex-row lg:justify-center gap-5 mt-5">
        {
          subscriptionPackages.map((subscriptionPackage, index) => {
            return (
              <div className="w-full  md:max-w-[400px]" key={index}>
                <SubscriptionPackageComponent variant={subscriptionPackage.variant} subscriptionPackage={subscriptionPackage.subscriptionPackage}/>
              </div>
            )
          })
        }
      </div>
    </section>
    <section className="w-full bg-[#F9FAFB] py-16">
      <div className="w-[80%] mx-auto flex flex-col lg:flex-row lg:justify-center lg:gap-20 lg:items-center gap-10">
        <img src="/ingredients-basket.png" alt="Ingredients" width="100%" height="100%" className="w-full lg:w-auto h-auto rounded-lg"/>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <h1 className="text-[30px] font-semibold text-center lg:text-left text-text-primary-dark">Want something more <br/> to custom?</h1>
            <p className="text-text-primary-dark/70 text-center lg:text-left">You can easily create your own custom <br className="lg:hidden"/> basket to suit <br className="hidden lg:block"/> your need and we will <br className="lg:hidden"/> deliver it to your door step</p>
          </div>
          <Button className="tertiary-outline-button rounded-lg w-[80%] lg:w-fit lg:px-10 py-7 mx-auto lg:mx-0">Create your basket</Button>
        </div>
      </div>
    </section>
    
    <FooterComponent/>
   </main>
  );
}

