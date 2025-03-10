import { Button } from "../ui/button"
import { DialogContent } from "../ui/dialog"

const PaymentSuccessfulModal = () => {
  return (
    <DialogContent className="p-5 rounded-lg text-text-primary-dark flex items-center flex-col">
        <span className="inline-flex mx-auto mb-5 bg-[#E7F6EC] rounded-full w-24 h-24 items-center justify-center">
            <i className="icon-[icon-park-solid--check-one] text-green w-20 h-20"></i>
        </span>
        <h1 className="font-semibold mb-5 text-2xl">Subscribe Successfully</h1>
        <p className="text-center">You will be sent an email and notification to <br/> always renew your plan. Please contact us <br/> with the button below.</p>
        <div className="mt-5 flex gap-10 mx-auto">
            <Button className="flex flex-col text-text-primary-dark bg-transparent !h-fit gap-3 items-center">
                <span className="w-[3.5rem] h-[3.5rem] rounded-full inline-flex items-center justify-center bg-[#F4F4F4]">
                    <i className="icon-[ic--sharp-whatsapp] w-7 h-7 text-text-primary-dark"></i>
                </span>
                <span className="font-semibold text-lg">WhatsApp</span>
            </Button>
            <Button className="flex flex-col gap-3 text-text-primary-dark bg-transparent !h-fit items-center">
                <span className="w-[3.5rem] h-[3.5rem] rounded-full inline-flex items-center justify-center bg-[#F4F4F4]">
                    <i className="icon-[lucide--phone] w-7 h-7 text-text-primary-dark"></i>
                </span>
                <span className="font-semibold text-lg">Call us</span>
            </Button>
        </div>
        <Button className="tertiary-outline-button w-full !h-16 !font-normal bg-transparent">View my plan</Button>
    </DialogContent>
  )
}

export default PaymentSuccessfulModal