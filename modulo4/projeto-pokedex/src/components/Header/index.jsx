import React from 'react'

import * as Styled from './styles'

function Header(props) {
  return (
    <Styled.Container>
        {props.children}
    </Styled.Container>
  )
}

export default Header