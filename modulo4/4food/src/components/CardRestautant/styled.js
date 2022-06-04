import styled from 'styled-components'
import * as Color from '../../constants/colors'

export const Container = styled.button`
    width: 90%;
    height: 14em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: ${Color.primary};
    border: 1px solid ${Color.secondary};
    border-radius: 10px;
    margin: 10px 0;
    cursor: pointer;
`

export const Img = styled.img`
    width: 100%;
    height: 75%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

export const Footer = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 0;
`

export const Title = styled.h3`
    text-align: left;
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
`

export const P = styled.p`
    color: ${Color.secondary}
`