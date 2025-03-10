import { Button } from "../ui/button"
import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet"

const NotificationDetailComponent = ({goBack}: {goBack: ()=>void}) => {
  return (
    <SheetContent className="rounded-lg lg:!max-w-[500px] overflow-y-auto p-0">
        <SheetHeader className="py-3 sticky top-0 bg-white z-50 mx-5">
          <SheetTitle className="flex items-center gap-2 text-text-primary-dark">
            <Button className="bg-transparent text-text-primary-dark p-0" onClick={goBack}>
                <i className="icon-[bx--arrow-back] font-bold w-7 h-7"></i>
            </Button>
            Notifications
            
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col gap-5 p-5">
            <img src="/notification-banner.png" alt="Notification Banner" className="w-full h-auto"/>
            <h1 className="font-semibold text-lg">You just placed an Order</h1>
            <p className="text-[#344054]">{`This is an example of a long message is which and make sure it Truncate after 2 lin... Read more

Globally create client-based internal or "organic" sou rces rather than interdependent mindshare. Proacti vely customize end-to-end mindshare for custom ized imperatives. Appropriately architect diverse meta-services for B2B leadership skills. Holisticly exploit plug-and-play supply chains without effective catalysts for change`}</p>
        </div>
      </SheetContent>
  )
}

export default NotificationDetailComponent