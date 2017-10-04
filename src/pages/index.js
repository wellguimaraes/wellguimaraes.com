import React from 'react'
import { AboutContainer, BrFlag, HeroContainer, IndexRoot, MyQuote } from '../styles/pages/index.styles'
import quote from '../assets/quote.svg'
import flag from '../assets/brazilian-flag.svg'

const IndexPage = () => (
  <IndexRoot>
    <HeroContainer>
      <MyQuote src={ quote } alt="A passion: craft easy-to-use things."/>
    </HeroContainer>
    <AboutContainer>
      <h2>About</h2>
      <p>
        Hi, I'm <strong>Wellington Guimaraes</strong>, a software engineer from <BrFlag src={ flag }/>Brazil.
        I started programming when I was 14 and dad bought our first PC.
      </p>
      <p>
        Besides loving to code, I also enjoy making things look pretty and
        intuitive. This way I ended up developing some design skills along
        the way. And after many years working as a full stack developer
        I decided that I should join my coding and design skills and focus
        on the front-end development to deliver my best.
      </p>
      <p>
        In the latest years I've also created and contributed to a few open
        source projects, available on my <a href="https://github.com/wellguimaraes" target="_blank">Github
        account</a>.
      </p>
    </AboutContainer>
  </IndexRoot>
)

export default IndexPage
