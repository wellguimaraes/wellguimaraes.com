import styled from 'emotion/react'
import { mdScreen, smScreen } from '../constants'
import noisyBg from '../../assets/noisy-bg.gif'

export const IndexRoot = styled('div')``

export const HeroContainer = styled('div')`
  background-image: linear-gradient(#ffffff, rgba(255,255,255,0)), url(${noisyBg});
  background-repeat: repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 0;
  transition: all 300ms;
  
  @media screen and (max-width: ${mdScreen}) {
    padding: 4rem 0;
  }
  
  @media screen and (max-width: ${smScreen}) {
    padding: 2rem 0;
  }
`

export const MyQuote = styled('img')`
  height: 6rem;
  max-width: 70vw;
`

export const AboutContainer = styled('div')`
  margin: 5rem auto;
  max-width: 35rem;
  text-align: justify;
  
  @media screen and (max-width: ${mdScreen}) {
    padding: 0 3rem;
  }
`

export const BrFlag = styled('img')`
  height: 1.2rem;
  padding: 0 4px;
  margin-bottom: -4px;
`