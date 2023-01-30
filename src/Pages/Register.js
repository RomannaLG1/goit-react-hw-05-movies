import { SigUpForm } from "components/Form/SignUpForm"
import { Link } from "react-router-dom"
import { MainWrapper } from "./Home.styled"


export const Register = () => {
    return (
        <MainWrapper>
        <h1>Register</h1> 
        <SigUpForm/>
        <p>
        Already have an account? <Link to='/login'>Sig in</Link>
        </p>
     </MainWrapper>
    )
}