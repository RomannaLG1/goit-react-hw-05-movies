import { LoginForm } from "components/Form/LoginForm"
import { Link } from "react-router-dom"
import { MainWrapper } from "./Home.styled"

export const Login = () => {
    return (
        <MainWrapper>
           <h1>Login</h1> 
           <LoginForm/>
           <p>
            Or <Link to='/register'>Register</Link>
           </p>
        </MainWrapper>
    )
}