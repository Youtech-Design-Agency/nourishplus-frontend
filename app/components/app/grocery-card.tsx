import { Button } from "../ui/button"

const GroceryCard = () => {
  return (
    <div className="bg-white relative rounded-lg p-5 flex h-32 w-full">
        <img src="/grocery-item.png" alt="Grocery Item" className="h-full w-32 object-cover"/>
        <div className="flex flex-col">
            <h1 className="text-text-secondary-dark mb-1">King&apos;s Vegetable Oil 3L</h1>
            <small className="text-green">Nourish+ price N12,000.00</small>
            <small className="text-red">Market price N15,000.00</small>
        </div>
        <Button className="absolute bottom-3 p-0 w-7 h-7 flex items-center justify-center bg-[#228B22] right-5 rounded-full">
            <i className="icon-[dashicons--plus] w-5 h-5 my-auto text-center text-white"></i>
        </Button>
    </div>
  )
}

export default GroceryCard