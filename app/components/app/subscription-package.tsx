import { Button } from "../ui/button"

const SubscriptionPackageComponent = () => {
  return (
    <div className="h-full border border-text-primary-dark/20 p-7 rounded-lg">
        <img src="/package.jpg" alt="Subscription Package" className="max-w-full w-auto mx-auto h-60 object-contain border rounded-lg drop-shadow-sm"/>
        <div className="py-5 text-text-primary-dark border-dashed flex flex-col items-center gap-3 border-[#E5E7EB] border-b-2">
        <h1 className="font-semibold text-lg">Basic Basket</h1>
        <span className="text-sm">N20,000.00/month</span>
        </div>
        <ul className="mt-5 text-sm w-full text-text-primary-dark">
            <li className={`mb-3 `}>1 Bucket of rice</li>
            <li className={`mb-3 `}>1 Bucket of beans</li>
            <li className={`mb-3 `}>1 Packet of semo (1kg)</li>
            <li className={`mb-3 opacity-[80%]`}>2 Packet of spaghetti</li>
            <li className={`mb-3 opacity-[80%]`}>1 Bucket of white garri</li>
            <li className={`mb-3 opacity-[80%]`}>1 Packet of maggi chicken cubes </li>
            <li className={`mb-3 opacity-[80%]`}>1 Packet of maggi chicken cubes </li>
            <li className={`mb-3 opacity-[80%]`}>1 Packet of maggi chicken cubes </li>
            <li className={`mb-3 opacity-[80%]`}>1 Packet of maggi chicken cubes </li>
            <li className={`mb-3 opacity-[80%]`}>1 Packet of maggi chicken cubes </li>
        </ul>
        <div className="flex flex-col gap-5 mt-10">
            <Button className="primary-button !text-sm !font-normal">Add Package to basket</Button>
            <Button className="text-yellow border border-yellow bg-white !font-normal">Gift Someone</Button>
        </div>
    </div>
  )
}

export default SubscriptionPackageComponent