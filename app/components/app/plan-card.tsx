import { Button } from "../ui/button"

const PlanCard = () => {
  return (
    <div className="flex flex-col border border-[#E4E7EC] rounded-lg p-3 h-fit">
        <div className="flex justify-between items-center">
            <span className="text-[12px] px-2 h-5 w-fit text-center inline-flex items-center justify-center text-white rounded-full bg-[#F3A218]">Expired</span>
            <Button className="bg-transparent p-0">
                <i className="icon-[meteor-icons--chevron-right] text-xl text-black"></i>
            </Button>
        </div>
        <section className="flex justify-between">
            <div className="flex items-center gap-2">
                <img src="/plan-card-image.png" alt="Plan Item" className="w-12 h-12"/>
                <span className="text-text-primary-dark">Basic Basket Plan</span>
            </div>
            <div className="flex text-sm flex-col items-end text-text-primary-dark/70">
                <span>Monthly Plan</span>
                <span className="font-semibold">N30,200</span>
            </div>
        </section>
        <div className="flex justify-between items-center text-sm">
            <span className="text-text-primary-dark">17/01/2025 10:00 AM</span>
            <Button className="bg-transparent underline text-green p-0">Renew Plan</Button>
        </div>
    </div>
  )
}

export default PlanCard