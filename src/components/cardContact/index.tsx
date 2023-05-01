import React from 'react'
import * as S from "./styles"


type CardProps = {
  title: string,
  text: string,
  icon: string
}

const CardContact = ({data} : {data: CardProps}) => {
  return (
    <S.Container>
      <img src={data.icon} alt={`icon ${data.title}`} />
      <h3>{data.title}</h3>
      <p>{data.text}</p>
    </S.Container>
    )
  }
  
  export default CardContact