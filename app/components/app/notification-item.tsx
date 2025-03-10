import { Button } from "../ui/button"

const NotificationItem = ({openDetail}: {openDetail: ()=> void}) => {
  return (
    <div className="flex gap-5 py-5 pr-5">  
        <span className="inline-block w-2 mt-2 h-2 shrink-0 bg-green rounded-full"></span>
        <div className="flex flex-col gap-1">
            <div className="flex justify-between">
                <span className="text-black">You just placed an Order</span>
                <span className="text-[#475467] text-sm">2mins</span>
            </div>
            <p className="text-[#344054] text-sm"> This is an example of a long message is which and make sure it Truncate after 2 lin... <Button onClick={openDetail} className="underline bg-transparent p-0 text-green">Read More</Button></p>
        </div>
    </div>
  )
}

export default NotificationItem