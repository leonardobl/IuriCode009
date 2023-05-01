import React from 'react'
import * as S from "./styles"
import CardContact from '../../components/cardContact'
import CardProject from '../../components/cardProject'


const dataContacts = [
  {
    title: "Meu Nome",
    text: "Leonardo Lima",
    icon: "/assets/images/smile.svg"
  },
  {
    title: "E-mail",
    text: "leonardo.b.lima1@gmail.com",
    icon: "/assets/images/email.svg"
  },
  {
    title: "Instagram",
    text: "@leonard.lima_",
    icon: "/assets/images/instagram.svg"
  },
  {
    title: "Telefone",
    text: "(86) 99523-3237",
    icon: "/assets/images/phone.svg"
  },
  
]


const dataProjects = [
  {
    title: "Título do projeto",
    text: "Tecnologias: HTML, CSS e JS."
  },
  {
    title: "Título do projeto",
    text: "Tecnologias: HTML, CSS e JS."
  },
  {
    title: "Título do projeto",
    text: "Tecnologias: HTML, CSS e JS."
  },
  {
    title: "Título do projeto",
    text: "Tecnologias: HTML, CSS e JS."
  } ,
  {
    title: "Título do projeto",
    text: "Tecnologias: HTML, CSS e JS."
  },
  {
    title: "Título do projeto",
    text: "Tecnologias: HTML, CSS e JS."
  }
]



const Home = () => {
  return (
    <>
      <S.Main>
    
        <S.Menu>
          <h1>Portfólio</h1>
          <ul>
            <li>Sobre mim</li>
            <li>Projetos</li>
            <li>Serviços</li>
            <li>Minhas skills</li>
          </ul>
          <img src="/assets/images/menu_hamburguer.svg" alt="menu hamburguer" />
        </S.Menu>
    
        <S.Header>
          <S.HeaderContent>
            <h2>Olá, eu sou o <span>Leonardo Lima :)</span></h2>
            <p>Desenvolvedor Front-End & UI Designer</p>
            <S.HeaderBtns>
              <button className='btn-green'>Download CV</button>
              <button className='btn-gray'>Entrar em contato</button>
            </S.HeaderBtns>
          </S.HeaderContent>
    
          <img src="/assets/images/illustration.svg" alt="Logo" />
        </S.Header>
    
    
        <S.SectionAbout>
    
          <h2>Sobre mim</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
    
        </S.SectionAbout>
    
        <S.SectionContact>
          {dataContacts.map( contact => <CardContact key={`${Math.random()}`} data={contact} /> )}
        </S.SectionContact>
    
    
        <S.SectionProjects>
          <h2>Projetos</h2>
    
          <S.SectionProjectsCards>
            { dataProjects.map( project => <CardProject key={`${Math.random()}`} data={project} /> ) }
          </S.SectionProjectsCards>
    
        </S.SectionProjects>
    
        <S.SectionService>
          <h2>Serviços</h2>
          <S.SectionServiceCards>
            <div>
              <img src="/assets/images/code.svg" alt="tag" />
              <h3>Sites <span>responsivos</span></h3>
            </div>
            <div>
              <img src="/assets/images/figma.svg" alt="figma" />
              <h3>UI <span>Designer</span></h3>
            </div>
            <div>
              <img src="/assets/images/smartphone.svg" alt="mobile" />
              <h3>Sites <span>responsivos</span></h3>
            </div>
          </S.SectionServiceCards>
        </S.SectionService>
    
        <S.SectionSkills>
          <h2>Minhas skills</h2>
    
          <div>
            <div>
              <img src="/assets/images/css.svg" alt="icon html" />
            </div>
            <div>
              <img src="/assets/images/html.svg" alt="icon css" />
            </div>
            <div>
              <img src="/assets/images/javascript.svg" alt="icon js" />
            </div>
            <div>
              <img src="/assets/images/tailwind.svg" alt="icon taiwind" />
            </div>
            <div>
              <img src="/assets/images/react.svg" alt="icon react" />
            </div>

            <div>
              <img src="/assets/images/next.svg" alt="icon next" />
            </div>
          </div>

        </S.SectionSkills>

      </S.Main>

      <S.Footer>
        <p>Orgulhosamente feito por <span>Leonardo Lima</span></p>
      </S.Footer>
    </>
    )
  }
  
  export default Home