import AuthScreenWrapper from "~/components/landing-page/auth-screen-wrapper";
import LoginForm from "~/components/landing-page/login-form";

const LoginPage = () => {
  return (
   <AuthScreenWrapper>
     <div className="p-5 w-full lg:w-[450px] lg:mx-auto lg:my-auto">
            <h1 className="text-3xl text-text-primary-dark text-center">Login your account</h1>
            <LoginForm/>
        </div>
   </AuthScreenWrapper>
  )
}

export default LoginPage