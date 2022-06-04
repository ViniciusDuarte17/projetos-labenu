import styled from 'styled-components'
import * as Color from '../../../constants/colors'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Content = styled.div`
    width: 90%;
    height: 16em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Img = styled.img`
    width: 100%;
    height: 8em;
    border: 1px solid ${Color.secondary};
    border-bottom: 1px solid transparent;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

export const Title = styled.h2`
    color: ${Color.primary};
`

export const DetailDelivery = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
`

export const P = styled.p`
    color: ${Color.secondary}
`

export const ContentProducts = styled.div`
    width: 90%;
    margin-top: 10px;
`

export const Category = styled.div`

`