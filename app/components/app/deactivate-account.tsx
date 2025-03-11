import React, { useState } from 'react'
import { Button } from '../ui/button'
import { DialogContent } from '../ui/dialog'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Input } from '../ui/input'

enum DeactivationStepEnum{
    reason,
    verification
}

const DeactivateAccountModal = () => {
    const [deactivationStep, setDeactivationStep] = useState<DeactivationStepEnum>(DeactivationStepEnum.reason);
  return (
   <DialogContent className="p-5 rounded-lg text-text-primary-dark flex flex-col">
     {
        deactivationStep === DeactivationStepEnum.reason &&
        <React.Fragment>
            <div className="flex gap-2 items-center">
            <img src='/arrow-left.svg' alt="Arrow Left" className="w-5 h-auto"/>
            <h1 className="font-semibold text-black">Deactivate Account</h1>
        </div>
        <p className="text-[#667185] mt-2">Deactivating your account will permanently remove your profile and all associated data, including order history, saved addresses, and payment information.</p>
        <h1 className='font-semibold text-[#101928]'>Why are you leaving?</h1>
        <RadioGroup className="flex flex-col gap-5" defaultValue="gokada">
            <div className="flex items-center space-x-2 cursor-pointer rounded-lg">
                <RadioGroupItem className="data-[state=checked]:text-[#099137] data-[state=checked]:border-[#099137]" value="option-one" id="option-one" />
                <label className="w-full flex cursor-pointer justify-between items-center text-[#101928]" htmlFor="option-one">
                    No longer using the service
                </label>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer rounded-lg">
                <RadioGroupItem className="data-[state=checked]:text-[#099137] data-[state=checked]:border-[#099137]" value="option-two" id="option-two" />
                <label className="w-full flex cursor-pointer justify-between items-center text-[#101928]" htmlFor="option-two">
                Privacy concerns
                </label>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer rounded-lg">
                <RadioGroupItem className="data-[state=checked]:text-[#099137] data-[state=checked]:border-[#099137]" value="option-three" id="option-three" />
                <label className="w-full flex cursor-pointer justify-between items-center text-[#101928]" htmlFor="option-three">
                Dissatisfied with the experience
                </label>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer rounded-lg">
                <RadioGroupItem className="data-[state=checked]:text-[#099137] data-[state=checked]:border-[#099137]" value="option-four" id="option-four" />
                <label className="w-full flex cursor-pointer justify-between items-center text-[#101928]" htmlFor="option-four">
                Others
                </label>
            </div>    
        </RadioGroup>
        <Button onClick={()=>setDeactivationStep(DeactivationStepEnum.verification)} className='primary-button !bg-[#BA3337] mt-5 w-full !border-[#BA3337]'>
            Continue
        </Button>
        </React.Fragment>
     }
     {
        deactivationStep === DeactivationStepEnum.verification &&
        <React.Fragment>
            <div className="flex gap-2 items-center">
            <Button onClick={()=>setDeactivationStep(DeactivationStepEnum.reason)} className='bg-transparent p-0'>
                <img src='/arrow-left.svg' alt="Arrow Left" className="w-5 h-auto"/>
            </Button>
            <h1 className="font-semibold text-black">Verify Your Identity</h1>
        </div>
        <p className="text-[#667185] mt-2">For security purpose, we’ll like to verify it’s you. Kindly enter the password to this account.</p>
        <div className="relative border h-12 flex items-center pl-5 rounded-lg mt-5">
            <i className="icon-[akar-icons--key] text-xl text-text-primary-dark my-auto"></i>
            <Input placeholder="Enter password" type="email" className="border-none"/> 
            <i className="icon-[iconoir--eye] text-xl h-full text-text-primary-dark absolute top-0 bottom-0 my-auto mx-0 right-5"></i>
        </div>
        <Button className='primary-button !bg-[#BA3337] mt-5 w-full !border-[#BA3337]'>
            Continue
        </Button>
        </React.Fragment>
     }
   </DialogContent>
  )
}

export default DeactivateAccountModal