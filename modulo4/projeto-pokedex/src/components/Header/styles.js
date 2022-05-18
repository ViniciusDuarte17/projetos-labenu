import styled from 'styled-components'
import * as colors from '../../constants/colors'

export const Container = styled.div`
    width: 100%;
    height: 5em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 3px solid ${colors.primary};
`