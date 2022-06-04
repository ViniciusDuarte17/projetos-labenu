import React from 'react'
import * as Styled from './styled'
import Button from "@mui/material/Button"

const CartAdd = ({item, removeCart}) => {
 
    return (
        <Styled.Container>
           
            <Styled.ContentImage bgImage={item.photoUrl} />
            <Styled.Content>
                <Styled.Title>{item.name}</Styled.Title>
                <Styled.Description>{item.description}</Styled.Description>
                <Styled.Price>R${item.price}</Styled.Price>
                <Styled.Buttons
                    borderTopLeft="10px"
                    borderBottomRight="10px"
                >
                    <Button onClick={()=> removeCart(item)}>Remover</Button>
                </Styled.Buttons>
            </Styled.Content>
            <Styled.DivAmount>{item.amount}</Styled.DivAmount>
        </Styled.Container>
    )
}

export default CartAdd;