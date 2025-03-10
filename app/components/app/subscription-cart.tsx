import Draggable from "react-draggable";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Button } from "../ui/button";
import SubscriptionCartItem from "./subscription-cart-item";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"
import CheckoutComponent from "./checkout";

const SubscriptionCart = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Draggable>
          <div className="bg-green rounded-full mx-auto w-fit px-10 py-1 flex gap-2 text-white items-center">
            <span>(4) items</span>
            <div className="flex items-center">
              <Button className="bg-transparent text-white">View Basket</Button>
              <div className="relative">
                <i className="icon-[akar-icons--shopping-bag] w-7 h-7"></i>
                <small className="bg-red text-white text-xs rounded-full px-1 py-[0.5px] absolute top-[-4px] right-[-4px]">
                  5
                </small>
              </div>
            </div>
          </div>
        </Draggable>
      </SheetTrigger>
      <SheetContent className="rounded-lg h-full lg:!max-w-[600px] overflow-y-auto p-0 flex flex-col">
        <SheetHeader className="border-b py-3 sticky top-0 bg-white z-50 mx-5">
          <SheetTitle className="flex items-center gap-2 text-text-primary-dark">
            My Basket{" "}
            <span className="text-white text-sm font-normal px-2 py-[2px] bg-green inline-flex rounded-full">
              0
            </span>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col divide-y px-5">
          <SubscriptionCartItem />
        </div>
        <RadioGroup className="flex flex-col p-5 gap-5" defaultValue="monthly">
            <div className="flex items-center space-x-2 border data-[state=checked]:border-[#228B22] pl-5 cursor-pointer rounded-lg">
                <RadioGroupItem className="data-[state=checked]:text-[#228B22] data-[state=checked]:border-[#228B22]" value="monthly" id="option-one" />
                <label className="w-full pr-5 py-5 flex cursor-pointer justify-between text-text-primary-dark/80" htmlFor="option-one">
                    <span>Monthly</span>
                    <span>N75,000.00</span>
                </label>
            </div>
            <div className="flex items-center space-x-2 border data-[state=checked]:border-[#228B22] pl-5 cursor-pointer rounded-lg">
                <RadioGroupItem className="data-[state=checked]:text-[#228B22] data-[state=checked]:border-[#228B22]" value="quarterly" id="option-two" />
                <label className="w-full pr-5 py-5 flex cursor-pointer justify-between text-text-primary-dark/80" htmlFor="option-two">
                <span>Quarterly</span>
                <span>N450,000.00</span></label>
            </div>
            <div className="flex items-center space-x-2 border data-[state=checked]:border-[#228B22] cursor-pointer rounded-lg pl-5">
                <RadioGroupItem className="data-[state=checked]:text-[#228B22] data-[state=checked]:border-[#228B22]" value="yearly" id="option-three" />
                <label className="w-full flex pr-5 py-5 cursor-pointer justify-between text-text-primary-dark/80" htmlFor="option-three">
                <span>Yearly</span>
                    <span>N900,000</span></label>
            </div>
        </RadioGroup>
        <SheetFooter className="flex sticky bottom-0 mt-auto right-0 z-50 bg-white shadow-[0px_0px_39px_-17px_#0099338F] !flex-col gap-5 text-text-primary-dark px-10 py-5">
            <div className="flex justify-between items-center">
                <span>Sub Total</span>
                <span className="font-semibold">N 24,700.00</span>
            </div>
            <p className="text-end w-full">Shipping and to be calculated at checkout</p>
            <CheckoutComponent/>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default SubscriptionCart