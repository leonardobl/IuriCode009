import styled from "styled-components";
import { pxToRem } from "../../util/pxToRem";



export const Card = styled.div`

width: ${pxToRem(350)};
height: ${pxToRem(240)};
background-color: ${ props => props.theme.colors["gray-400"] };
padding: ${pxToRem(20)} ${pxToRem(25)};
text-align: center;
border: ${pxToRem(0.725)} solid ${props => props.theme.colors["gray-200"]};

h3 {
  font-style: normal;
  font-weight: 500;
  font-size: ${pxToRem(18)};
  line-height: ${pxToRem(23)};
  color: ${props => props.theme.colors.white}
}

p {
  font-style: normal;
  font-weight: 400;
  font-size: ${pxToRem(14)};
  line-height: ${pxToRem(18)};
  color: ${props => props.theme.colors.gray}
}


@media (max-width: ${pxToRem(420)}) {
  
  width: ${pxToRem(312)};
  height: ${pxToRem(174)};
  padding: ${pxToRem(15)} ${pxToRem(18)};
  
  
  h3 {
    font-size: ${pxToRem(13)};
    line-height: ${pxToRem(17)};
  }
  
  p {
    font-size: ${pxToRem(10)};
    line-height: ${pxToRem(13)};
  }
}
`



export const Square = styled.div`
width: 100%;
height: ${pxToRem(130)};
background-color: ${props => props.theme.colors.dark};
height: ${pxToRem(130)};
margin-bottom: ${pxToRem(24)};
border: ${pxToRem(0.725)} solid ${props => props.theme.colors["gray-200"]};

@media (max-width: ${pxToRem(420)}) {
  margin-bottom: ${pxToRem(8)};
  height: ${pxToRem(100)};
}
`