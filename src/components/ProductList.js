import { CardWrapper, Container, ProductName } from "./ProductList.styled"
import { Link } from "react-router-dom";

export const ProductList = ({products}) => {
    return (
        <Container>
            {products.map(({id, name}) => (
                <CardWrapper key={id}>
                    <Link to={`${id}`}>
                        <img src="https://via.placeholder.com/200x100" alt="" />
                    <ProductName>{name}</ProductName>
                    </Link>
                </CardWrapper>
            ))}
        </Container>
    )
}