import { SigUpForm } from "components/Form/SignUpForm"
import { Link } from "react-router-dom"


export const Register = () => {
    return (
        <div>
        <h1>Register</h1> 
        <SigUpForm/>
        <p>
        Already have an account? <Link to='/login'>Sig in</Link>
        </p>
     </div>
    )
}