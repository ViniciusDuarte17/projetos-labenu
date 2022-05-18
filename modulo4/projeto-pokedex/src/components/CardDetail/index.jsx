import React, { useState, useEffect } from "react"
import * as Styled from "./styled"

const CardDetail = (props) => {
    const [color, setColor] = useState('#9da0aa')
    const { photoDetail } = props
    const stats = photoDetail.stats

    useEffect(() => {
        types()
    })

    let type = photoDetail.types?.[0].type.name && photoDetail.types?.[0].type.name
    const types = () => {
        switch (type) {
            case 'grass':
                setColor('green');
            break;
            case 'fire':
                setColor('#ff4100');
            break;
            case 'water':
                setColor('#00b7ff');
            break;
            case 'bug':
                setColor('#70530c')
            break;
            default:
                setColor('#9da0aa');
        }
    }

    return (
        <Styled.Container>
            <Styled.Content>
                <Styled.ImgPoke>
                    <Styled.Title>{photoDetail?.name}</Styled.Title>
                    <Styled.Img src={photoDetail.sprites?.other.home.front_default} alt={photoDetail?.name} />
                </Styled.ImgPoke>
                <Styled.Title>
                    TIPO
                    <Styled.Span background={color}> {photoDetail.types?.[0].type.name}</Styled.Span>
                </Styled.Title>
                <Styled.PokemonStats>
                    <p>Experience: {photoDetail?.base_experience}</p>
                    {stats && stats.map((item) => {
                        return <p key={item.stat.name}>
                            {item.stat.name}: {item.base_stat}
                        </p>
                    })}
                </Styled.PokemonStats>
            </Styled.Content>
        </Styled.Container>
    )
}

export default CardDetail;