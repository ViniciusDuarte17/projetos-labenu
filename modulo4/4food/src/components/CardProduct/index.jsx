import React from 'react'
import * as Styled from './styled'
import Button from "@mui/material/Button"

const CardProduct = (props) => {
    const { product } = props
    const { addItemToCart} = props  

    return (
        <Styled.Container>
            <Styled.ContentImage bgImage={product.photoUrl} />
            <Styled.Content>
                <Styled.Title>{product.name}</Styled.Title>
                <Styled.Description>{product.description}</Styled.Description>
                <Styled.Price>R${product.price.toFixed(2)}</Styled.Price>
                <Styled.Buttons
                    borderTopLeft="10px"
                    borderBottomRight="10px"
                >
                    <Button onClick={()=> addItemToCart(product)}>Adicionar</Button>
                </Styled.Buttons>
            </Styled.Content>
        </Styled.Container>
    )
}

export default CardProduct