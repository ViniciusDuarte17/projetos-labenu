import React, { useEffect, useState } from 'react'

import * as Styled from './styles'
import { useNavigate, useParams } from 'react-router-dom'
import { goToBack } from '../../Routes/coodinator'
import Header from '../../components/Header'
import { Button } from '../../components/Button'
import CardDetail from '../../components/CardDetail'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'

const Details = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [photoDetail, setPhotoDetail] = useState({})

  useEffect(() => {
    const photoDetailPokemon = async () => {
      const res = await axios
        .get(`${BASE_URL}/${params.id}`)
        try {
          setPhotoDetail(res.data)
        } catch (err) {
          console.log("ERROR", err.response)
        }
    }
    photoDetailPokemon()
  }, [params])

  return (
    <Styled.Container>
      <Header>
        <Styled.Title>Details</Styled.Title>
        <Button onClick={() => goToBack(navigate)}>Return</Button>
      </Header>
      <Styled.Content>
        <CardDetail photoDetail={photoDetail} />  
      </Styled.Content>
    </Styled.Container>
  )
}

export default Details