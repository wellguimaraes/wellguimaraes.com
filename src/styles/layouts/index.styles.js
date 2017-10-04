import styled from 'emotion/react'
import { injectGlobal } from 'emotion'
import '../flaticon'
import { accentColor, mdScreen } from '../constants'

injectGlobal`
  body {
    margin: 0;
    color: #444;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.75rem;
  }
  
  h1, h2, h3, h4 {
    font-family: 'Bree serif', sans-serif;
    text-transform: uppercase;
    text-align: center;
  }
  
  a {
    color: ${accentColor}
  }
`

export const HeaderRoot = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem 0 3rem;
  max-width: 1280px;
  margin: 0 auto;
  transition: all 300ms;
  border-color: transparent;

  @media screen and (max-width: ${mdScreen}) {
    flex-direction: column;
    padding-bottom: 2rem;
    margin: 0 2rem;
    border-bottom: 1px solid #ddd;
  }
`

export const Logo = styled('img')`
  height: 60px;
  max-width: 70vw
`

export const SocialIcons = styled('div')`
  display: inline-flex;
  padding-right: 2rem;
  
  & > a {
    text-decoration: none;
    color: #999;
    transition: all 300ms;
    cursor: pointer;
    
    &:hover {
      color: ${accentColor};
      transform: scale(1.1)
    }    
  }
  
  @media screen and (max-width: ${mdScreen}) {
    margin-top: 2rem;
  }
`