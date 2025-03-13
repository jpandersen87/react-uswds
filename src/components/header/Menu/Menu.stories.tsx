import React from 'react'
import { Menu } from './Menu'
import { LegacyReactElement } from '../../../types/legacyReactElement'

export default {
  title: 'Components/Header/Menu',
  component: Menu,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Menu component used within the Header component

Source: https://designsystem.digital.gov/components/header/
`,
      },
    },
  },
}

const testItems = [
  <a href="#linkOne" key="one">
    Simple link
  </a>,
  <a href="#linkTwo" key="two">
    Simple link Two
  </a>,
]

export const DefaultDropDownMenu = (): LegacyReactElement => (
  <Menu items={testItems} isOpen={true} />
)
