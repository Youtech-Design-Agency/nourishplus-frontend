
const GroceryDisplayCard = () => {
  return (
    <div className="h-[250px] shadow-[0px_4px_10px_0px_#0000000F] shrink-0 w-[200px] rounded-lg bg-white p-3 relative">
        <i className="icon-[flat-color-icons--plus] w-5 h-5 text-[#228B22] absolute top-3 right-3"></i>
        <i className="icon-[weui--like-outlined] w-5 h-5 text-red absolute right-3 top-0 bottom-0 mx-0 my-auto"></i>
        <img src='/grocery-display-image.jpg' alt="Grocery Item" className="w-32 h-32 mx-auto mt-3 object-cover"/>
        <div className="absolute text-text-secondary-dark bottom-3 flex flex-col gap-1">
            <span className="text-xs">Knorr Chicken Cubes 8 g x45</span>
            <span className="text-[10px]">Nourish+ price ₦2,000.00</span>
            <span className="text-red text-[10px]">Market price ₦3,500.00</span>
        </div>
    </div>
  )
}

export default GroceryDisplayCard