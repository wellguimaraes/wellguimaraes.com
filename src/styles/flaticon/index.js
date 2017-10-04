import { fontFace, injectGlobal } from 'emotion'

import flaticonWoff from './Flaticon.woff'
import flaticonTtf from './Flaticon.ttf'

fontFace`
  font-family: 'Flaticon';
  src:  url('${flaticonWoff}') format('woff'),
        url('${flaticonTtf}') format('truetype');
  font-weight: normal;
  font-style: normal;
`

injectGlobal`
  [class^="flaticon-"]:before, [class*=" flaticon-"]:before,
  [class^="flaticon-"]:after, [class*=" flaticon-"]:after {   
    font-family: Flaticon;
    font-size: 32px;
    font-style: normal;
    margin-left: 32px;
  }
  
  .flaticon-twitter:before { content: "\\f100"; }
  .flaticon-linkedin:before { content: "\\f101"; }
  .flaticon-github:before { content: "\\f102"; }
`