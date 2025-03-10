import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "~/components/ui/sheet";
import { Button } from "../ui/button";
import NotificationItem from "./notification-item";
import { useState } from "react";
import NotificationDetailComponent from "./notification-detail";

const NotificationsComponent = () => {
    const [showDetail, setShowDetail] = useState<boolean>(false)
  return (
    <Sheet>
      <SheetTrigger>
        <span className="inline-flex relative">
            <i className="icon-[hugeicons--notification-02] text-text-primary-dark text-3xl"></i>
            <small className="absolute top-[-5px] right-[-15px] bg-red text-white inline-block rounded-full px-1">100</small>
        </span>
      </SheetTrigger>
      {
        !showDetail ?
      <SheetContent className="rounded-lg lg:!max-w-[500px] overflow-y-auto p-0">
        <SheetHeader className="py-3 sticky top-0 bg-white z-50 mx-5">
          <SheetTitle className="flex justify-between items-center gap-2 text-text-primary-dark">
            Notifications{" "}
            <div className="flex gap-2 items-center">
            <Button className="bg-transparent p-0">
                <img src="/filter.svg" alt="Filter Icon" className="w-5 h-5"/>
            </Button>
            <Button className="bg-transparent p-0 text-green">Clear All</Button>
            </div>
          </SheetTitle>
        </SheetHeader>
        {/* Empty Notifications */}
        {/* <div className="flex h-full flex-col items-center justify-center">
            <img src="/bell.png" alt="No Notification Icon" className="w-20 h-20 mb-5"/>
            <p className="text-[#667185]">You haven&apos;t got any new notifications yet</p>
        </div> */}
        <div className="flex flex-col p-5">
            <div className="px-3 mb-5">
                <span className=" text-black">Today</span>
                <NotificationItem openDetail={()=>setShowDetail(true)}/>
                <NotificationItem openDetail={()=>setShowDetail(true)}/>
                <NotificationItem openDetail={()=>setShowDetail(true)}/>
            </div>
            <div className="px-3 mb-5">
                <span className=" text-black">Yesterday</span>
                <NotificationItem openDetail={()=>setShowDetail(true)}/>
                <NotificationItem openDetail={()=>setShowDetail(true)}/>
                <NotificationItem openDetail={()=>setShowDetail(true)}/>
            </div>
            <div className="px-3 mb-5">
                <span className=" text-black">10/01/2025</span>
                <NotificationItem openDetail={()=>setShowDetail(true)}/>
                <NotificationItem openDetail={()=>setShowDetail(true)}/>
                <NotificationItem openDetail={()=>setShowDetail(true)}/>
            </div>
        </div>
      </SheetContent> :
      <NotificationDetailComponent goBack={()=>setShowDetail(false)}/>
      }
    </Sheet>
  )
}

export default NotificationsComponent