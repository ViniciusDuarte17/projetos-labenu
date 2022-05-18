import React from 'react'

import * as Styled from './styles'

export const Button = (props) => {

  return (
    <Styled.Container 
      onClick={props.onClick} 
      left={props.left} 
      right={props.right}
    >
        {props.children}
    </Styled.Container>
  )
}