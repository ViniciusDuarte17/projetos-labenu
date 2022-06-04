import styled from 'styled-components'
import * as Color from '../../constants/colors'

export const Container = styled.div`
    width: 100%;
    height: 10em;
    display: flex;
    border: 1px solid ${Color.secondary};
    border-radius: 10px;
    margin: 10px 0;
`

export const ContentImage = styled.div`
    width: 40%;
    background-image: url(${props => props.bgImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
`

export const Content = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 10px 0 20px;
    position: relative;
`

export const Title = styled.h2`

`

export const Description = styled.p`

`

export const Price = styled.p`

`
export const DivAmount = styled.div` 
display: flex;
border: 1px solid red;
border-radius: 60px;
width: 5%;
height: 3vh;
align-items: center;
justify-content: center;
`

export const Buttons = styled.div`
    border: 1px solid ${Color.primary};
    border-top-left-radius: ${props => props.borderTopLeft};
    border-top-right-radius: ${props => props.borderTopRight};
    border-bottom-right-radius: ${props => props.borderBottomRight};
    border-bottom-left-radius: ${props => props.borderBottomLeft};
    position: absolute;
    right: 0;
    bottom: 0;
`