import { Controller, Form, useForm } from 'react-hook-form'
import { Input } from '../ui/input'
import { Link } from '@remix-run/react'
import { Button } from '../ui/button'

interface LoginFormInterface{
    email: string;
    password: string;
}


const LoginForm = () => {
    const {control} = useForm<LoginFormInterface>();

  return (
    <Form control={control} className="flex flex-col mt-10">
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
                    name="password"
                    render={({ field }) => (
                        <div className="relative border h-12 flex items-center pl-5 rounded-lg mt-5">
                            <i className="icon-[akar-icons--key] text-xl text-text-primary-dark my-auto"></i>
                            <Input {...field} placeholder="Enter password" type="email" className="border-none"/> 
                            <i className="icon-[iconoir--eye] text-xl h-full text-text-primary-dark absolute top-0 bottom-0 my-auto mx-0 right-5"></i>
                        </div>
                    )}
                />
                <Link className="text-green underline mt-2" to="#">Reset Password</Link>
                <div className="flex flex-col mt-10 gap-5">
                <Button className="primary-button !h-[3.5rem]">Login</Button>
                <Button className="secondary-outline-button flex justify-center h-[3.5rem] gap-5 items-center">
                    <i className="icon-[logos--google-icon] text-xl"></i>
                    Continue with Google
                </Button>
                </div>
                <p className="text-center mt-5 text-text-primary-dark/70 text-sm">Are you new here? <Link to='/register' className="text-green">Create Account</Link></p>
                <p className="mt-10 text-center text-[#667185] text-sm">Creating an account means you have agree to our <Link to="#" className="text-green underline">Terms</Link> and <Link to="#" className="text-green underline">Privacy policy</Link></p>
            </Form>
  )
}

export default LoginForm