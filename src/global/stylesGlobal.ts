import { createGlobalStyle } from "styled-components"




export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  min-height: 100vh;
  font-family: 'DM Sans', sans-serif;
  background-color: ${props => props.theme.colors.dark};
}


`