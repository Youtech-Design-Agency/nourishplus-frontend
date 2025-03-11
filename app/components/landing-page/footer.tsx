import { Link } from "@remix-run/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";
import { faqs } from "./footer.types";
import { Input } from "../ui/input";

export default function FooterComponent({showFaq = true}: {showFaq?: boolean}){
  return (
    <div className={"bg-[#111111] flex flex-col " + (showFaq && 'pt-16')}>
      {
        showFaq &&
        <section className="flex flex-col lg:flex-row lg:gap-20 lg:py-10 lg:justify-center">
      <div className="flex flex-col">
        <h1 className="text-text-tertiary-light text-center lg:text-left font-semibold text-[30px] mb-3">
          Got Questions? <br className="lg:hidden"/> We&apos;ve <br className="hidden lg:block"/> Got Answers!
        </h1>
        <p className="text-[#F0F2F5] text-lg text-center lg:text-left">
          Reach out to us anytime. Our <br className="lg:hidden"/> dedicated support <br className="hidden lg:block"/> team is here to{" "}
          <br className="lg:hidden"/> assist you.
        </p>
        <Button className="primary-button mx-auto lg:mx-0 w-60 rounded-lg mt-5 !text-xl">
          Contact Support
        </Button>
      </div>
      <div className="py-5 lg:py-0 px-5">
        <Accordion type="single" collapsible className="w-full lg:w-[500px]">
          {faqs.map((faq, index) => {
            return (
              <AccordionItem
                key={index}
                className="bg-[#FFFFFF0F] py-0 px-4 rounded-lg mb-5 border-none"
                value={index.toString()}
              >
                <AccordionTrigger className="text-text-tertiary-light font-semibold !no-underline hover:!no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-primary-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
        </section>
      }
      <section className={"flex text-sm w-full flex-col lg:px-16 lg:flex-row lg:justify-center lg:gap-20 border-t-8 border-t-green py-20"}>
      <div className="w-full mb-10 lg:mb-0 lg:w-fit flex flex-col lg:flex-row lg:gap-10 gap-5">
          <div className="flex flex-col mb-5 lg:mb-0 gap-5">
            <img src="/nourish-plus.png" alt="Logo" width="100%" height="100%" className="w-40 h-auto mx-auto lg:mx-0"/>
            <p className="text-text-secondary-light text-sm w-[80%] lg:mt-auto lg:w-96 text-center lg:text-left mx-auto">Our goal is to make food as affordable as possible at good prices through a monthly subscription service. With every box delivered to a subscriber, a food item gets donated to a person in need.</p>
          </div>

          <div className="flex text-sm lg:flex-col lg:mt-auto justify-center gap-5 text-white shrink-0">
            <Link to={'/about-us'}>About Us</Link>
            <Link to={'/contact-us'}>Contact Us</Link>
          </div>
      </div>
      <div className="px-5 flex flex-col gap-5">
          <p className="text-white text-center lg:text-left px-2">Stay up to date with our latest news and products.</p>

          <div className="flex gap-5 px-5 lg:px-0">
            <Input placeholder="Enter Email" className="focus:outline-none focus:ring-0 text-lg focus-visible:ring-offset-0 border-none h-[3.5rem] bg-[#FFFFFF1A] text-[#98A2B3] placeholder:text-[#98A2B3] p-5 rounded-lg"/>
            <Button className="primary-button w-40 rounded-lg h-[3.5rem]">Subscribe</Button>
          </div>

          <section className="border-t lg:flex-row lg:items-center lg:justify-between lg:gap-10 flex flex-col gap-5 border-t-[#343E39] mt-6 pt-10 lg:pt-6">
            <p className="text-text-secondary-light text-xs text-center">Copyright © Nourish+ by Greenhabor Technonlogies — 2025</p>
            <div className="flex justify-center gap-3 text-xs text-white shrink-0">
              <Link to={'#'}>Terms of Service</Link>
              <Link to={'#'}>Privacy Policy</Link>
            </div>

            <div className="flex gap-5 items-center justify-center">
              <span className="inline-flex items-center justify-center bg-white rounded-full w-8 h-8 text-center">
                  <i className="icon-[ic--baseline-facebook] text-[#1E1E1E] text-2xl"></i>
              </span>
              <span className="inline-flex items-center justify-center bg-white rounded-full w-8 h-8 text-center">
                  <i className="icon-[ri--twitter-x-line] text-[#1E1E1E] text-2xl"></i>
              </span>
              <span className="inline-flex items-center justify-center bg-white rounded-full w-8 h-8 text-center">
                  <i className="icon-[mdi--instagram] text-[#1E1E1E] text-2xl"></i>
              </span>
              <span className="inline-flex items-center justify-center bg-white rounded-full w-8 h-8 text-center">
                  <i className="icon-[ic--baseline-whatsapp] text-[#1E1E1E] text-2xl"></i>
              </span>
            </div>
          </section>
      </div>
      </section>
    </div>
  );
}