import { HiArrowCircleLeft } from "react-icons/hi";
import { StyledLink } from "./BackLink.styled";

export const BackLink = ({to, children}) => {
    return (
        <StyledLink to={to}>
            <HiArrowCircleLeft size='24' />
            {children}
        </StyledLink>
    )
};