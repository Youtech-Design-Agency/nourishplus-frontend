import { Controller, Form, useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

const OTPForm = () => {
    const {control} = useForm<{otp: string}>()
  return (
    <Form control={control} className="flex flex-col mt-5">
                <div className="gap-5 mb-5">
                    <Controller
                        control={control}
                        rules={{required: true}}
                        name="otp"
                        render={({ field }) => (
                            <Input {...field} placeholder="Enter 6-digit code" className="h-12"/> 
                        )}
                    />
                </div>
                
                <div className="flex flex-col mt-2 gap-5">
                <Button className="primary-button !h-[3.5rem]">Continue</Button>
                </div>

                <div className="flex gap-2 mt-5 items-center justify-center">
                        <span className="text-[#443444B2]">Didn&apos;t receive?</span>
                        <Button className="text-green p-0 bg-transparent">Resend</Button>
                </div>
                
            </Form>
  )
}

export default OTPForm