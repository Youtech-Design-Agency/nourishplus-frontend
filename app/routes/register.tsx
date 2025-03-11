import AuthScreenWrapper from "~/components/landing-page/auth-screen-wrapper";
import OTPForm from "~/components/landing-page/otp-form";
import RegisterForm from "~/components/landing-page/register-form";



const RegisterPage = () => {
  return (
    <AuthScreenWrapper>
         <div className="p-5 w-full lg:w-[450px] lg:mx-auto lg:my-auto">
            <h1 className="text-3xl text-text-primary-dark text-center">Create your account</h1>
            <RegisterForm/>
            {/* <OTPForm/> */}
        </div>
    </AuthScreenWrapper>
   
  )
}

export default RegisterPage