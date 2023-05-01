import styled from "styled-components";
import { pxToRem } from "../../util/pxToRem";



export const Container = styled.div`

text-align: center;
width: max-content;

img {
  border-radius: 50%;
  background-color: ${props => props.theme.colors["gray-400"]};
  padding: ${pxToRem(17)};
  margin-bottom: ${pxToRem(20)};
}

h3 {
  font-style: normal;
  font-weight: 700;
  font-size: ${pxToRem(18)};
  line-height: ${pxToRem(23)};
  color: ${props => props.theme.colors.white}
}

p {
  font-style: normal;
  font-weight: 400;
  font-size: ${pxToRem(16)};
  line-height: ${pxToRem(21)};
  color: ${props => props.theme.colors.gray}
}


@media (max-width: ${pxToRem(420)}) {

h3 {
  font-size: ${pxToRem(13)};
  line-height: ${pxToRem(17)};
  margin-bottom: ${pxToRem(8)};
}


p {
  font-size: ${pxToRem(11)};
  line-height: ${pxToRem(15)};
}


}

`