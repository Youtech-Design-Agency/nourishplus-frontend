import { useState } from "react"
import { Button } from "../ui/button"
import { DialogContent } from "../ui/dialog"
import { Input } from "../ui/input"
import { Controller, Form, useForm } from "react-hook-form"

enum ChangePasswordStepEnum{
    currentPassword,
    newPassword,
    emailVerification
}

const ChangePasswordModal = () => {
    const [passwordStep, setPasswordStep] = useState<ChangePasswordStepEnum>(ChangePasswordStepEnum.currentPassword);
    const {control, watch} = useForm<{currentPassword: string}>();
    const {control: newPasswordControl, watch: newPasswordWatch} = useForm<{password: string; confirmPassword: string}>();
  return (
    <DialogContent className="p-5 rounded-lg text-text-primary-dark flex flex-col">
        {
            passwordStep === ChangePasswordStepEnum.currentPassword &&
            <Form control={control}>
                <div className="flex gap-2 items-center">
            <img src='/arrow-left.svg' alt="Arrow Left" className="w-5 h-auto"/>
            <h1 className="font-semibold">Change Password</h1>
        </div>
        <p className="text-[#667185] mt-2">Kindly enter your current password</p>
        <Controller
            control={control}
            name="currentPassword"
            rules={{required:true}}
            render={({field})=>{
                return (
                    <div className="relative border h-12 flex items-center pl-5 rounded-lg mt-5">
            <i className="icon-[akar-icons--key] text-xl text-text-primary-dark my-auto"></i>
            <Input {...field} placeholder="Enter password" type="email" className="border-none"/> 
            <i className="icon-[iconoir--eye] text-xl h-full text-text-primary-dark absolute top-0 bottom-0 my-auto mx-0 right-5"></i>
        </div>
                )
            }}
        />
        <Button className="bg-transparent p-0 underline text-green mt-2">Forgot Password</Button>
        <Button onClick={()=>setPasswordStep(ChangePasswordStepEnum.newPassword)} disabled={!watch('currentPassword')} className="primary-button w-full disabled:opacity-[50%] disabled:border-[#D0D5DD] mt-5 disabled:bg-[#D0D5DD]">Save</Button>
            </Form>
        }
        {
            passwordStep === ChangePasswordStepEnum.newPassword &&
            <Form control={newPasswordControl}>
                <div className="flex gap-2 items-center">
            <img src='/arrow-left.svg' alt="Arrow Left" className="w-5 h-auto"/>
            <h1 className="font-semibold">Change Password</h1>
        </div>
        <p className="text-[#667185] mt-2">Kindly enter your new password</p>
        <Controller
            control={newPasswordControl}
            name="password"
            rules={{required:true}}
            render={({field})=>{
                return (
                    <div className="relative border h-12 flex items-center pl-5 rounded-lg mt-5">
            <i className="icon-[akar-icons--key] text-xl text-text-primary-dark my-auto"></i>
            <Input {...field} placeholder="Enter new password" type="email" className="border-none"/> 
            <i className="icon-[iconoir--eye] text-xl h-full text-text-primary-dark absolute top-0 bottom-0 my-auto mx-0 right-5"></i>
        </div>
                )
            }}
        />
        <Controller
            control={newPasswordControl}
            name="confirmPassword"
            rules={{required:true}}
            render={({field})=>{
                return (
                    <div className="relative border h-12 flex items-center pl-5 rounded-lg mt-5">
            <i className="icon-[akar-icons--key] text-xl text-text-primary-dark my-auto"></i>
            <Input {...field} placeholder="Confirm new password" type="email" className="border-none"/> 
            <i className="icon-[iconoir--eye] text-xl h-full text-text-primary-dark absolute top-0 bottom-0 my-auto mx-0 right-5"></i>
        </div>
                )
            }}
        />
        <p className="text-sm text-[#667185] mt-2">Password must be at least 8 characters long, 1 uppercase and lowercase letter, 1 number and 1 special character</p>
        <Button disabled={!newPasswordWatch('password') && !newPasswordWatch('confirmPassword')} className="primary-button w-full disabled:opacity-[50%] disabled:border-[#D0D5DD] mt-5 disabled:bg-[#D0D5DD]">Save Password</Button>
            </Form>
        }
    </DialogContent>
  )
}

export default ChangePasswordModal