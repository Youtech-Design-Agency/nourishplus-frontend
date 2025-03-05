import { Link } from "@remix-run/react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const AppFooter = () => {
  return (
    <div>
      <div className="px-5">
        <p className="text-text-primary-dark text-sm text-center">
          Stay up to date with our latest news and products.
        </p>

        <div className="flex gap-5 mt-5">
          <Input
            placeholder="Enter Email"
            className="focus:outline-none focus:ring-0 text-sm focus-visible:ring-offset-0 border border-[#4444441A] h-[2.5rem] bg-transparent !text-[#98A2B3] placeholder:!text-[#98A2B3] p-5 rounded-lg"
          />
          <Button className="primary-button !font-normal !text-sm w-40 rounded-lg !h-[2.5rem]">
            Subscribe
          </Button>
        </div>
      </div>
      <div className="pb-6 px-5 pt-3 flex flex-col gap-5 border-t mt-5">
        <p className="text-text-primary-dark text-sm text-center">
          Copyright © Nourish+ by Greenhabor Technonlogies — 2025
        </p>
        <div className="flex justify-center text-xs gap-5 text-green">
          <Link to={"#"}>Terms of Service</Link>
          <Link to={"#"}>Privacy Policy</Link>
          <Link to={"#"}>About Us</Link>
          <Link to={"#"}>Contact Us</Link>
        </div>

        <div className="flex gap-5 items-center justify-center">
          <span className="inline-flex items-center justify-center bg-green rounded-full w-8 h-8 text-center">
            <i className="icon-[ic--baseline-facebook] text-white text-2xl"></i>
          </span>
          <span className="inline-flex items-center justify-center bg-green rounded-full w-8 h-8 text-center">
            <i className="icon-[ri--twitter-x-line] text-white text-2xl"></i>
          </span>
          <span className="inline-flex items-center justify-center bg-green rounded-full w-8 h-8 text-center">
            <i className="icon-[mdi--instagram] text-white text-2xl"></i>
          </span>
          <span className="inline-flex items-center justify-center bg-green rounded-full w-8 h-8 text-center">
            <i className="icon-[ic--baseline-whatsapp] text-white text-2xl"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
