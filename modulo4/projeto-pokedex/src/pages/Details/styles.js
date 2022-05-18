import styled  from 'styled-components'
import * as colors from '../../constants/colors'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Content = styled.div`
    width: 90%;
    height: 65vh;
    display: flex;
    justify-content: center;
    padding: 3em;
`

export const Title = styled.h1`
    font-weight: bold;
    color: ${colors.primary};
`