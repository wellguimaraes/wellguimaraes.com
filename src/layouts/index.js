import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { HeaderRoot, Logo, SocialIcons } from '../styles/layouts/index.styles'
import logo from '../assets/logo.svg'
import favicon from '../assets/favicon.ico'

const Header = () => (
  <HeaderRoot>
    <Logo src={ logo }/>
    <SocialIcons>
      <a href="https://twitter.com/wellguimaraes" target="_blank"><i className="flaticon-twitter"/></a>
      <a href="https://github.com/wellguimaraes" target="_blank"><i className="flaticon-github"/></a>
      <a href="https://linkedin.com/in/wellguimaraes" target="_blank"><i className="flaticon-linkedin"/></a>
    </SocialIcons>
  </HeaderRoot>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Well Guimaraes: Front-end Engineer"
      meta={ [
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ] }
    >
      <link rel="shortcut icon" href={ favicon }/>
      <link
        href="https://fonts.googleapis.com/css?family=Bree+Serif|Open+Sans:400,700"
        rel="stylesheet"
      />
    </Helmet>
    <Header/>
    <div>
      { children() }
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
