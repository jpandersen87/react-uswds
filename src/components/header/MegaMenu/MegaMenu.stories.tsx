import React from 'react'
import { MegaMenu } from './MegaMenu'
import { LegacyReactElement } from '../../../types/legacyReactElement'

export default {
  title: 'Components/Header/MegaMenu',
  component: MegaMenu,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 MegaMenu component used within the Header component

Source: https://designsystem.digital.gov/components/header/
`,
      },
    },
  },
}

const testItems = [
  [
    <a href="#linkOne" key="one">
      Simple link
    </a>,
    <a href="#linkTwo" key="two">
      Simple link
    </a>,
  ],
  [
    <a href="#linkThree" key="three">
      Simple link Two
    </a>,
    <a href="#linkFour" key="four">
      Simple link Two
    </a>,
  ],
]

export const DefaultMegaMenu = (): LegacyReactElement => (
  <MegaMenu items={testItems} key="testItemOne" isOpen={true} />
)
