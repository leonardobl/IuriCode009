import React from 'react'
import * as S from "./styles"



type CardProjectProps = {
  title: string,
  text: string
}

const CardProject = ({data} : {data: CardProjectProps}) => {
  return (
    <S.Card>
      <S.Square />
      <h3>{data.title}</h3>
      <p>{data.text}</p>
    </S.Card>
    )
  }
  
  export default CardProject