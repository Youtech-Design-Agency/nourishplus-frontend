import Draggable from "react-draggable";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import CartItem from "~/components/app/cart-item";
import { Button } from "../ui/button";
const CartComponent = () => {
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
      <SheetContent className="rounded-lg lg:!max-w-[600px] overflow-y-auto p-0 flex flex-col">
        <SheetHeader className="border-b py-3 sticky top-0 bg-white z-50 mx-5">
          <SheetTitle className="flex items-center gap-2 text-text-primary-dark">
            My Basket{" "}
            <span className="text-white text-sm font-normal px-2 py-[2px] bg-green inline-flex rounded-full">
              0
            </span>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col divide-y px-5 pb-10">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <SheetFooter className="flex sticky bottom-0 mt-auto right-0 z-50 bg-white shadow-[0px_0px_39px_-17px_#0099338F] !flex-col gap-5 text-text-primary-dark px-10 py-5">
            <div className="flex justify-between items-center">
                <span>Sub Total</span>
                <span className="font-semibold">N 24,700.00</span>
            </div>
            <p className="text-end w-full">Shipping and to be calculated at checkout</p>
            <Button className="w-full !font-normal mx-auto primary-button">Proceed to checkout</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartComponent;
