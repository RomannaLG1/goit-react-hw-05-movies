import { LoginForm } from "components/Form/LoginForm"
import { Link } from "react-router-dom"

export const Login = () => {
    return (
        <div>
           <h1>Login</h1> 
           <LoginForm/>
           <p>
            Or <Link to='/register'>Register</Link>
           </p>
        </div>
    )
}