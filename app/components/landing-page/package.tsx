import { Button } from "../ui/button";

const SubscriptionPackageComponent = ({variant, subscriptionPackage}: {variant: 'primary' | 'secondary', subscriptionPackage: SubscriptionPackageInterface}) => {
  return (
    <div className={`w-full rounded-lg px-10 flex flex-col items-center pt-10 pb-7 ${variant === 'primary' ? 'border border-text-primary-dark/20 text-text-primary-dark' : 'bg-green-primary text-white'}`}>
        <span>Package Type</span>
        <div className={`border-b-2 pb-4 w-full text-center border-dashed ${variant === 'primary' ? 'border-[#E5E7EB]' : 'border-white'}`}>
         <h1 className="font-semibold text-[36px]">{subscriptionPackage.packageType}</h1>
        </div>
        <ul className="mt-5 w-full">
            {
                subscriptionPackage.subscriptionPackages.map((subscriptionPackage, index) => {
                    return (
                        <li key={index} className={`mb-3 ${index > 2 && 'opacity-[80%]'}`}>{subscriptionPackage}</li>
                    )
                })
            }
        </ul>
        <Button className={`w-full mt-5 rounded-lg text-center py-2 ${variant === 'primary' ? 'secondary-outline-button' : 'secondary-button'}`}>Get Started</Button>
    </div>
  )
}

export interface SubscriptionPackageInterface{
    packageType: string;
    subscriptionPackages: string[];
}

export default SubscriptionPackageComponent;