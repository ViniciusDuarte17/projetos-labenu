import styled from 'styled-components'
import * as colors from '../../constants/colors'

export const Container = styled.button`
    padding: 5px;
    font-weight: bold;
    color: ${colors.primary};
    background: transparent;
    border: 1px solid ${colors.primary};
    border-radius: 10px;
    z-index: 1;
    &&: hover{
        background: ${colors.primary};
        color: ${colors.secondary};
    }
`