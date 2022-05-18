import styled from 'styled-components'
import * as colors from '../../constants/colors'

export const Container = styled.div`
    width: 12em;
    height: 15em;
    margin: 0.5em 0;
    position: relative;
    background-color: ${colors.quaternary};
    border: 0.1px solid transparent;
    border-radius: 5px;
    overflow: hidden;
    ::before{
        content: '';
        position: absolute;
        left:0;
        bottom:0;
        width:0;
        box-sizing: border-box;
        height: 0;
        border-bottom:3px solid transparent;
        border-left: 3px solid transparent;
        transition: all .8s ease;
        z-index: 0;
    }
    ::after{
        content: '';
        position: absolute;
        right:0;
        top:0;
        width:0;
        box-sizing: border-box;
        height:0;
        border-top:3px solid transparent;
        border-right: 3px solid transparent;
        transition: all .8s ease;
        z-index: 0;
    }
    &:hover::before{
        border-color: ${colors.primary};
        width: 100%;
        height: 100%;
     }
     &:hover::after {
        border-color: ${colors.primary};
        width: 100%;
        height: 100%;
     }
`

export const Content = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    background-color: ${colors.tertiary};
`

export const Title = styled.h2`
    position: absolute;
    color: ${colors.primary};
    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
`

export const FooterCard = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`