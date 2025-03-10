import AppFooter from "~/components/app/app-footer"
import AppHeader from "~/components/app/app-header"
import MobileNavigation from "~/components/app/mobile-nav"
import PlanCard from "~/components/app/plan-card"
import FooterComponent from "~/components/landing-page/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"

const MyPlans = () => {
  return (
    <div className="h-screen w-screen bg-[#F6F3F3] flex flex-col">
      <AppHeader/>
      <div className="flex-1 overflow-y-auto flex flex-col py-5 lg:pb-0">
        <section className="p-5 lg:w-[60%] mx-auto">
        <Tabs defaultValue="all-plans" className="w-full bg-white rounded-lg p-5">
            <TabsList className="w-full flex rounded-full bg-[#F4F4F4] text-text-primary-dark">
                <TabsTrigger className="flex-1  data-[state=active]:text-green data-[state=active]:border data-[state=active]:border-green data-[state=active]:rounded-full bg-transparent" value="all-plans">All Plans</TabsTrigger>
                <TabsTrigger className="flex-1  data-[state=active]:text-green data-[state=active]:border data-[state=active]:border-green data-[state=active]:rounded-full bg-transparent" value="my-plans">My Plans</TabsTrigger>
                <TabsTrigger className="flex-1  data-[state=active]:text-green data-[state=active]:border data-[state=active]:border-green data-[state=active]:rounded-full bg-transparent" value="gifted-plans">Gifted Plans</TabsTrigger>
            </TabsList>
            <div className="mt-5">
                <TabsContent className="flex flex-col gap-3" value="all-plans">
                    <PlanCard/>
                    <PlanCard/>
                    <PlanCard/>
                    <PlanCard/>
                    <PlanCard/>
                    <PlanCard/>
                    <PlanCard/>
                </TabsContent>
                <TabsContent className="flex flex-col gap-3" value="my-plans">
                    <PlanCard/>
                    <PlanCard/>
                    <PlanCard/>
                    <PlanCard/>
                    <PlanCard/>
                    <PlanCard/>
                </TabsContent>
                <TabsContent className="flex flex-col gap-3" value="gifted-plans">
                    <PlanCard/>
                    <PlanCard/>
                    <PlanCard/>
                    <PlanCard/>
                    <PlanCard/>
                    <PlanCard/>
                    <PlanCard/>
                </TabsContent>
            </div>

            </Tabs>
        </section>
        <div className="mt-10">
        <div className="lg:hidden">
            <AppFooter/>
          </div>
          <div className="hidden lg:block">
            <FooterComponent showFaq={false}/>
          </div>
        </div>
      </div>
      <MobileNavigation/>
    </div>
  )
}

export default MyPlans