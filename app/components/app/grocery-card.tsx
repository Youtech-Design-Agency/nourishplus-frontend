import { Button } from "../ui/button"

const GroceryCard = () => {
  return (
    <div className="bg-white relative rounded-lg lg:border lg:border-text-primary-dark/20 p-5 flex h-32 w-full">
        <img src="/grocery-item.png" alt="Grocery Item" className="h-full w-32 lg:mr-5 object-cover"/>
        <div className="flex flex-col">
            <h1 className="text-text-secondary-dark mb-1">King&apos;s Vegetable Oil 3L</h1>
            <small className="text-green">Nourish+ price N12,000.00</small>
            <small className="text-red">Market price N15,000.00</small>
        </div>
        <Button className="absolute bottom-3 !p-0 right-3">
          <i className="icon-[flat-color-icons--plus] w-7 h-7 text-[#228B22] absolute top-3 right-3"></i>
        </Button>
    </div>
  )
}

export default GroceryCard