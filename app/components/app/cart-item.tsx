import { Button } from "../ui/button"

const CartItem = () => {
  return (
    <div className="flex gap-5 w-full items-stretch py-5">
        <Button className="bg-transparent">
            <i className="icon-[gg--trash] w-6 h-6 text-red"></i>
        </Button>
        <div className="border rounded-lg w-20 h-20 border-text-primary-dark/20">
            <img src="/grocery-item.png" alt="Cart Item" className=" w-full h-full rounded-lg object-cover"/>
        </div>
        <div className="flex flex-col gap-1">
            <span className="text-text-secondary-dark font-semibold">Ayoola Poundo Yam 900g</span>
            <span className="text-text-secondary-dark text-sm">Grocery Price: <small className="font-semibold">N3,280.00</small></span>
            <span className="text-[#F87171] text-sm">Market Price: <small className="line-through">N3,400.00</small></span>
        </div>
        <div className="flex flex-col justify-between ml-auto">
            <div className="flex gap-2 items-center border rounded-lg">
                <Button className="bg-transparent text-text-primary-dark">
                    <i className="icon-[line-md--minus] h-5 w-5"></i>
                </Button>
                <span className="text-lg">1</span>
                <Button className="bg-transparent text-text-primary-dark">
                    <i className="icon-[cuida--plus-outline] h-5 w-5"></i>
                </Button>
            </div>
            <small className="text-green">N3,280.00</small>
        </div>
    </div>
  )
}

export default CartItem