import styled from "styled-components";
import { pxToRem } from "../../util/pxToRem";



export const Main = styled.main`

max-width: ${pxToRem(1480)};
width: 100%;
margin: 0 auto;
padding-top: ${pxToRem(35)};
padding-left: ${pxToRem(20)};
padding-right: ${pxToRem(20)};



@media (max-width: ${pxToRem(420)}) {
  
  padding-top: ${pxToRem(25)};
  
}

`


export const Menu = styled.div`
color : ${props => props.theme.colors.white};
display: flex;
align-items: center;
justify-content: space-between;

img {
  display: none;
}

h1 {
  font-style: normal;
  font-weight: 700;
  font-size: ${pxToRem(26)};
  line-height: ${pxToRem(34)};
}


ul {
  list-style: none;
  display: flex;
  gap: ${pxToRem(45)};
}


@media (max-width: ${pxToRem(420)}) {
  
  ul {
    display: none;
  }
  
  h1 {
    font-size: ${pxToRem(18)};
    line-height: ${pxToRem(18)};
  }
  
  
  img{
    display: block;
  }
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  
}

`


export const Header = styled.div`

padding-top: ${pxToRem(100)};
display: flex;
justify-content: space-between;
align-items: center;

@media (max-width: ${pxToRem(420)}) {
  justify-content: center;
  
  
  padding-top: ${pxToRem(56)};
  
  img {
    display: none;
  }
  
  
}
`


export const HeaderContent = styled.div`

h2 {
  color: ${props => props.theme.colors.white};
  font-style: normal;
  font-weight: 700;
  font-size: ${pxToRem(36)};
  line-height: ${pxToRem(47)};
  margin-bottom: ${pxToRem(18)};
  
  
  span {
    display: block;
    width: 100%;
  }
  
  
}



p{
  font-style: normal;
  font-weight: 500;
  font-size: ${pxToRem(18)};
  line-height: ${pxToRem(23)};
  color: ${props => props.theme.colors.gray};
  margin-bottom: ${pxToRem(34)};
}


@media (max-width: ${pxToRem(420)}) {
  
  
  text-align: center;
  
  p{
    font-size: ${pxToRem(16)};
    line-height: ${pxToRem(21)};
  }
  
  h2{
    font-size: ${pxToRem(22)};
    line-height: ${pxToRem(31)};
    text-align: center;
    
    
    span {
      display: inline;
    }
    
  }
  
  
  
}

`

export const HeaderBtns = styled.div`
display: flex;
gap: ${pxToRem(14)};


button {
  width: ${pxToRem(143)};
  height: ${pxToRem(42)};
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
}


button.btn-green {
  background-color: ${props => props.theme.colors["green-light"]};
  
  color: ${props => props.theme.colors.dark};
}


button.btn-gray {
  background-color: transparent;
  border: ${pxToRem(1)} solid #333333;
  color: ${props => props.theme.colors.white};
}




@media (max-width: ${pxToRem(420)}) {
  justify-content: center;
  
  button {
    width: ${pxToRem(150)};
    height: ${pxToRem(30)};
  }
  
  
}

`



export const SectionAbout = styled.section`
padding: ${pxToRem(150)} 0;
text-align: center;


h2{
  margin-bottom: ${pxToRem(30)};
  font-style: normal;
  font-weight: 700;
  font-size: ${pxToRem(32)};
  line-height: ${pxToRem(42)};
  color: ${props => props.theme.colors.white}
}

p{
  max-width: ${pxToRem(745)};
  margin: auto;
  font-style: normal;
  font-weight: 400;
  font-size: ${pxToRem(18)};
  line-height: ${pxToRem(32)};
  color: ${props => props.theme.colors.gray}
}


@media (max-width: ${pxToRem(420)}) {
  
  padding: ${pxToRem(56)} 0;
  
  h2{
    margin-bottom: ${pxToRem(16)};
    font-size: ${pxToRem(24)};
    line-height: ${pxToRem(31)};
  }
  
  p{
    font-size: ${pxToRem(14)};
    line-height: 140%;
  }
}

`


export const SectionContact = styled.section`
display: grid;
grid-template-columns: repeat(4, 1fr);
justify-items: center;
padding: ${pxToRem(100)} 0;



@media (max-width: ${pxToRem(420)}) {
  padding: ${pxToRem(50)} 0;
  grid-template-columns: repeat(2, 1fr);
  gap: ${pxToRem(45)};
  
}
`



export const SectionProjects = styled.section`
padding: ${pxToRem(50)} 0;

h2 {
  font-style: normal;
  font-weight: 700;
  font-size: ${pxToRem(32)};
  line-height: ${pxToRem(42)};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${pxToRem(32)};
  text-align: center;
}



@media (max-width: ${pxToRem(420)}) {
  
  h2 {
    font-size: ${pxToRem(24)};
    line-height: ${pxToRem(31)};
  }
  
}


`


export const SectionProjectsCards = styled.section`

display: grid;
grid-template-columns: repeat(3, 1fr);
justify-items: center;
gap: ${pxToRem(32)} ${pxToRem(45)};




@media (max-width: ${pxToRem(420)}) {
  padding: ${pxToRem(30)} 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
}
`


export const SectionService = styled.section`
padding: ${pxToRem(50)} 0;


h2 {
  font-style: normal;
  font-weight: 700;
  font-size: ${pxToRem(32)};
  line-height: ${pxToRem(42)};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${pxToRem(32)};
  text-align: center;
}



@media (max-width: ${pxToRem(420)}) {
  
  h2 {
    font-size: ${pxToRem(24)};
    line-height: ${pxToRem(31)};
  }
  
}
`


export const SectionServiceCards = styled.div`

display: grid;
grid-template-columns: repeat(3, 1fr);
justify-items: center;

div {
  width: ${pxToRem(250)};
  height: ${pxToRem(240)};
  background: ${props => props.theme.colors["gray-400"]};
  border: ${pxToRem(1)} solid ${props => props.theme.colors["gray-200"]};
  padding: ${pxToRem(25)};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  position: relative;
  
  
  ::after {
    content: "";
    width: 100%;
    height: ${pxToRem(5)};
    background: ${props => props.theme.colors["green-light"]};
    position: absolute;
    bottom: 0;
    left: 0;
  }
  
  
  img {
    height: ${pxToRem(56)};
  }
  
  
  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: ${pxToRem(32)};
    line-height: ${pxToRem(42)};
    color: ${props => props.theme.colors.gray};
    
    span {
      width: 100%;
      display: block;
    }
  }
  
}

@media (max-width: ${pxToRem(420)}) {
  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${pxToRem(24)};
  
  
  
  div {
    width: ${pxToRem(311)};
    height: ${pxToRem(140)};
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    
    
    img {
      height: ${pxToRem(40)};
    }
    
    
    h3 {
      font-size: ${pxToRem(14)};
      line-height: ${pxToRem(18)};
      
      span {
        display: inline;
      }
    }
    
  }
}

`


export const SectionSkills = styled.section`
padding: ${pxToRem(100)} 0;


h2 {
  font-style: normal;
  font-weight: 700;
  font-size: ${pxToRem(32)};
  line-height: ${pxToRem(42)};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${pxToRem(32)};
  text-align: center;
}

div {
  
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  
  
  div {
    width: ${pxToRem(150)};
    height: ${pxToRem(150)};
    background:${props => props.theme.colors["gray-400"]};
    border: ${pxToRem(1)} solid ${props => props.theme.colors["gray-200"]};
    display: flex;
    align-items: center;
    justify-content: center;
    
    
    img {
      display: block;
      height: ${pxToRem(80)};
      width: ${pxToRem(70)};
    }
  }
  
  
  
  @media (max-width: ${pxToRem(420)}) {
    
    grid-template-columns: repeat(3, 1fr);
    gap: ${pxToRem(20)};
    
    div {
      width: ${pxToRem(90)};
      height: ${pxToRem(90)};
      
      img {
        display: block;
        height: ${pxToRem(48)};
        width: ${pxToRem(42)};
      }
    }
    
  }
  
}



@media (max-width: ${pxToRem(420)}) {
  
  h2 {
    font-size: ${pxToRem(24)};
    line-height: ${pxToRem(31)};
  }
  
}

`



export const Footer = styled.footer`
background-color: ${props => props.theme.colors["gray-400"]};
height: ${pxToRem(60)};
display: flex;
align-items: center;
justify-content: center;
margin-top: ${pxToRem(100)};

p{
  font-style: normal;
  font-weight: 400;
  font-size: ${pxToRem(16)};
  line-height: ${pxToRem(21)};
  text-align: center;
  color: ${props => props.theme.colors.white};
  
  
  span {
    color: ${props => props.theme.colors["green-light"]};
  }
}



@media (max-width: ${pxToRem(420)}) {
  height: ${pxToRem(40)};
  
  
  p {
    font-size: ${pxToRem(12)};
    line-height: ${pxToRem(16)};
  }
  
} 
`
