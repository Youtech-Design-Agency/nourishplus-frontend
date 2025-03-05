import { Link, useNavigate } from "@remix-run/react";
import { Controller, Form, useForm } from "react-hook-form";
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input";

interface RegisterFormInterface{
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

const RegisterPage = () => {
    const {control} = useForm<RegisterFormInterface>();
    const navigate = useNavigate();
  return (
    <div>
        <div className="h-20 border-b p-5">
            <Button onClick={()=>navigate(-1)} className="bg-transparent border-none hover:bg-transparent">
                <i className="icon-[fluent-mdl2--back] text-text-primary-dark text-xl"></i>
            </Button>
        </div>
        <div className="p-5">
            <h1 className="text-3xl text-text-primary-dark text-center">Create your account</h1>
            <Form control={control} className="flex flex-col mt-10">
                <div className="grid grid-cols-2 gap-5 mb-5">
                    <Controller
                        control={control}
                        rules={{required: true}}
                        name="firstName"
                        render={({ field }) => (
                            <Input {...field} placeholder="First name" className="h-12"/> 
                        )}
                    />
                    <Controller
                        control={control}
                        rules={{required: true}}
                        name="lastName"
                        render={({ field }) => (
                            <Input {...field} placeholder="Last name" className="h-12"/> 
                        )}
                    />
                </div>
                <Controller
                    control={control}
                    rules={{required: true}}
                    name="email"
                    render={({ field }) => (
                        <Input {...field} placeholder="Enter email" type="email" className="h-12"/> 
                    )}
                />
                <Controller
                    control={control}
                    rules={{required: true}}
                    name="phoneNumber"
                    render={({ field }) => (
                        <div className="relative border h-12 flex items-center pl-5 rounded-lg mt-5">
                            <span className="flex items-center gap-2">
                                <i className="icon-[twemoji--flag-nigeria] text-2xl text-text-primary-dark"></i>
                                <span className="text-text-primary-dark/70">+234</span>
                            </span>  
                            <Input {...field} placeholder="Phone number" type="text" className="border-none focus:outline-none"/> 
                        </div>
                    )}
                />
                <Controller
                    control={control}
                    rules={{required: true}}
                    name="password"
                    render={({ field }) => (
                        <div className="relative border h-12 flex items-center pl-5 rounded-lg mt-5">
                            <Input {...field} placeholder="Create password" type="password" className="border-none"/> 
                            <i className="icon-[iconoir--eye] text-xl h-full text-text-primary-dark absolute top-0 bottom-0 my-auto mx-0 right-5"></i>
                        </div>
                    )}
                />
                <div className="flex flex-col mt-10 gap-5">
                <Button className="primary-button !h-[3.5rem]">Continue</Button>
                <Button className="secondary-outline-button flex justify-center h-[3.5rem] gap-5 items-center">
                    <i className="icon-[logos--google-icon] text-xl"></i>
                    Continue with Google
                </Button>
                </div>
                <p className="text-center mt-5 text-text-primary-dark/70">Already have an account? <Link to='/login' className="text-green">Login Here</Link></p>
                <p className="mt-10 text-center text-[#667185]">Creating an account means you have agree to our <Link to="#" className="text-green underline">Terms</Link> and <Link to="#" className="text-green underline">Privacy policy</Link></p>
            </Form>
        </div>
    </div>
  )
}

export default RegisterPage