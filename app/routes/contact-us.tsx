import { Controller, Form, useForm } from "react-hook-form"
import { ContactUsFormInterface } from "~/components/landing-page/contact-us.types"
import FooterComponent from "~/components/landing-page/footer"
import HeaderComponent from "~/components/landing-page/header"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"

const ContactUs = () => {
    const {control} = useForm<ContactUsFormInterface>({
        defaultValues:{
            name: "",
            email: "",
            phoneNumber: "",
            message: ""
        }
    })
  return (
    <div>
        <HeaderComponent/>
        <div className="p-5 flex flex-col lg:flex-row lg:justify-center lg:gap-20">
            <section className="lg:mt-10 lg:w-[50%] lg:max-w-[500px]">
            <h1 className="text-3xl text-text-primary-dark">Got Questions?</h1>
            <Form control={control} className="mt-10 flex flex-col gap-5 lg:border lg:rounded-lg lg:shadow-md lg:p-5">
                <Controller
                control={control}
                rules={{required: true}}
                name="name"
                render={({ field }) => (
                    <div className="flex flex-col gap-2">
                        <label className="text-text-primary-dark" htmlFor="name">Name</label>
                        <Input {...field} id="name" placeholder="Enter your name" className="focus:outline-none focus:ring-0 focus-visible:ring-offset-transparent text-lg focus-visible:ring-offset-0 border border-[#D0D5DD] h-[3.5rem] bg-white text-[#444444B2] placeholder:text-[#444444B2] p-5 rounded-lg"/>
                    </div>
                )}
                />
                <Controller
                control={control}
                rules={{required: true}}
                name="email"
                render={({ field }) => (
                    <div className="flex flex-col gap-2">
                        <label className="text-text-primary-dark" htmlFor="email">Email</label>
                        <Input {...field} id="email" placeholder="Enter your email address" className="focus:outline-none focus:ring-0 focus:ring-offset-transparent text-lg focus-visible:ring-offset-0 border border-[#D0D5DD] h-[3.5rem] bg-white text-[#444444B2] placeholder:text-[#444444B2] p-5 rounded-lg"/>
                    </div>
                )}
                />
                <Controller
                control={control}
                rules={{required: true}}
                name="phoneNumber"
                render={({ field }) => (
                    <div className="flex flex-col gap-2">
                        <label className="text-text-primary-dark" htmlFor="phoneNumber">Phone Number</label>
                        <Input {...field} id="phoneNumber" placeholder="Enter phone number" className="focus:outline-none focus:ring-0 focus:ring-offset-transparent text-lg focus-visible:ring-offset-0 border border-[#D0D5DD] h-[3.5rem] bg-white text-[#444444B2] placeholder:text-[#444444B2] p-5 rounded-lg"/>
                    </div>
                )}
                />
                <Controller
                control={control}
                rules={{required: true}}
                name="message"
                render={({ field }) => (
                    <div className="flex flex-col gap-2">
                        <label className="text-text-primary-dark" htmlFor="message">Message</label>
                        <Textarea {...field} id="message" placeholder="Enter message" className="h-28 focus:outline-none focus:ring-0 focus:ring-offset-transparent text-lg focus-visible:ring-offset-0 border border-[#D0D5DD] bg-white text-[#444444B2] placeholder:text-[#444444B2] p-5 rounded-lg"/>
                    </div>
                )}
                />
                <Button className="primary-button !h-[3.5rem]" type="submit">
                    Submit Message
                </Button>
            </Form>
            </section>

            <section className="flex flex-col mt-10 lg:mt-28">
            <div className="flex flex-col gap-10">
                <div className="flex gap-5 items-center">
                    <img src="/telephone.svg" alt="Phone Icon" className="w-12 h-12"/>
                    <span>+234 707 510 3023</span>
                </div>
                <div className="flex gap-5 items-center">
                    <img src="/email.svg" alt="Phone Icon" className="w-12 h-12"/>
                    <span>contact@norishplus.com</span>
                </div>
                <div className="flex gap-5 items-center">
                    <img src="/location.svg" alt="Phone Icon" className="w-12 h-12"/>
                    <span>9 Bimko Crescent, Off Abacha Road, Rumueme, Obio Akpor</span>
                </div>
            </div>

            <div className="flex items-center justify-center my-20">
                <img src="/motto-logo.png" alt="Motto" className="w-60 h-auto"/>
            </div>
            </section>
        </div>
        <FooterComponent/>
    </div>
  )
}

export default ContactUs