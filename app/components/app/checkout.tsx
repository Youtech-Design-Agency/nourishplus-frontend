import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"
import { Separator } from "../ui/separator";
import React, { useState } from "react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import PaymentSuccessfulModal from "./payment-successful-modal";

enum CheckoutTabEnum{
    Delivery = 'delivery',
    Payment = 'payment'
}

const CheckoutComponent = () => {
    const [currentTab, setCurrentTab] = useState<CheckoutTabEnum>(CheckoutTabEnum.Delivery)
  return (
    <Sheet>
      <SheetTrigger>
      <Button className="w-full !font-normal mx-auto primary-button">Proceed to checkout</Button>
      </SheetTrigger>
      <SheetContent className="rounded-lg h-fit lg:!max-w-[600px] overflow-y-auto p-0 flex flex-col">
        <SheetHeader className="border-b py-3 sticky top-0 bg-white z-50 mx-5">
          <SheetTitle className="flex items-center gap-2 text-text-primary-dark">
            Checkout
          </SheetTitle>
        </SheetHeader>
        <div className="flex gap-5 justify-center items-center px-5">
          <span className={`inline-flex gap-1 items-center ` + (currentTab === CheckoutTabEnum.Delivery ? 'text-green' : 'text-text-primary-dark')}> <i className="icon-[material-symbols--verified] w-5 h-5"></i>Delivery</span>
          <Separator orientation="horizontal" className="w-10"/>
          <span className={`inline-flex gap-1 items-center ` + (currentTab === CheckoutTabEnum.Payment ? 'text-green' : 'text-text-primary-dark')}> <i className="icon-[material-symbols--verified] w-5 h-5"></i>Payment</span>
        </div>
            {
                currentTab === CheckoutTabEnum.Delivery &&
                <React.Fragment>
                    <div className="p-5">
                <h1 className="text-lg text-text-primary-dark font-semibold">Delivery Address</h1>
                <div className="mt-5 relative flex gap-5 items-stretch overflow-x-auto scrollbar-hide">
                    <Button className="!h-auto sticky shrink-0 border border-green px-5 rounded-lg bg-transparent">
                        <i className="icon-[cuida--plus-outline] text-green w-5 h-5"></i>
                    </Button>
                    <div className="flex shrink-0 flex-col gap-8 p-3 border-green border rounded-lg bg-[#E7F6EC]">
                        <div className="flex justify-between items-center">
                            <span className="text-text-primary-dark">Address 1</span>
                            <Button className="bg-transparent p-0">
                                <i className="icon-[gg--trash] text-red w-5 h-5"></i>
                            </Button>
                        </div>
                        <div className="flex justify-between items-end">
                            <span className="text-text-primary-dark text-sm inline-flex max-w-[70%]">20 Igbogo Rd, Choba
                            Port Harcourt, NG</span>
                            <i className="icon-[icon-park-solid--check-one] text-green w-5 h-5"></i>
                        </div>
                    </div>
                    <div className="flex shrink-0 flex-col gap-8 p-3 border-[#E4E7EC] border rounded-lg bg-[#F9FAFB]">
                        <div className="flex justify-between items-center">
                            <span className="text-text-primary-dark">Address 1</span>
                            <Button className="bg-transparent p-0">
                                <i className="icon-[gg--trash] text-red w-5 h-5"></i>
                            </Button>
                        </div>
                        <div className="flex justify-between items-end">
                            <span className="text-text-primary-dark text-sm inline-flex max-w-[70%]">20 Igbogo Rd, Choba
                            Port Harcourt, NG</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5">
                <span className="text-green text-center uppercase">Check Estimate</span>
                <span className="mt-5 text-text-primary-dark">Shipping Fee</span>
            </div>
            <RadioGroup className="flex flex-col p-5 gap-5" defaultValue="gokada">
                <div className="flex items-center space-x-2 border data-[state=checked]:border-[#228B22] pl-5 cursor-pointer rounded-lg">
                    <RadioGroupItem className="data-[state=checked]:text-[#228B22] data-[state=checked]:border-[#228B22]" value="gokada" id="option-one" />
                    <label className="w-full pr-5 py-5 flex cursor-pointer justify-between items-center text-text-primary-dark/80" htmlFor="option-one">
                        <img src="/gokada.png" className="h-full w-auto" alt="GoKada Icon"/>
                        <span>Your shipping fee for this zone is</span>
                        <span>N2,500.00</span>
                    </label>
                </div>
                <div className="flex items-center space-x-2 border data-[state=checked]:border-[#228B22] pl-5 cursor-pointer rounded-lg">
                    <RadioGroupItem className="data-[state=checked]:text-[#228B22] data-[state=checked]:border-[#228B22]" value="kwik" id="option-two" />
                    <label className="w-full pr-5 py-5 flex cursor-pointer justify-between items-center text-text-primary-dark/80" htmlFor="option-two">
                    <img src="/kwik.png" className="h-full w-auto" alt="Kwik Icon"/>
                    <span>Your shipping fee for this zone is</span>
                    <span>N450,000.00</span></label>
                </div>
            </RadioGroup>
                </React.Fragment>
            }
            {
                currentTab === CheckoutTabEnum.Payment &&
                <React.Fragment>
                    <div className="p-5">
                        <h1 className="text-text-primary-dark mb-2">Order Summary</h1>
                        <div className="border rounded-xl p-3 text-sm flex flex-col gap-3 text-text-primary-dark">
                            <div className="flex justify-between items-center">
                                <span>Subtotal</span>
                                <span>N24,700.00</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Delivery</span>
                                <span>N3,200.00</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>VAT</span>
                                <span>N500.00</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-semibold">Grand Total</span>
                                <span className="text-green font-semibold">N19,880.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-5">
                        <h1 className="text-text-primary-dark mb-2">Delivery Address</h1>
                        <div className="flex gap-5 items-stretch">
                            <div className="flex flex-col gap-5 border rounded-xl border-[#D0D5DD] flex-1 p-5">
                                <span>Address 1</span>
                                <p className="text-[#242E2594]">20 Igbogo Rd, Choba Port Harcourt, NG</p>
                            </div>
                            <Button className="bg-transparent border-yellow rounded-lg shrink-0 px-10 border !h-auto">
                                <i className="icon-[ic--round-mode-edit] w-8 h-8 text-yellow"></i>
                            </Button>
                        </div>
                    </div>
                </React.Fragment>
            }
        <SheetFooter className="flex !flex-col mt-20 gap-5 text-text-primary-dark px-10 py-5">
            {
                currentTab === CheckoutTabEnum.Delivery &&
                <Button onClick={()=>setCurrentTab(CheckoutTabEnum.Payment)} className="w-full !font-normal mx-auto primary-button">Proceed to payment</Button>
            }
            {
                currentTab === CheckoutTabEnum.Payment &&
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="w-full !font-normal mx-auto primary-button">Pay</Button>
                    </DialogTrigger>
                    <PaymentSuccessfulModal/>
                </Dialog>
            }
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default CheckoutComponent