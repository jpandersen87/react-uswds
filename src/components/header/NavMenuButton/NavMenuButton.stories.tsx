import React from 'react'
import { NavMenuButton } from './NavMenuButton'
import { LegacyReactElement } from '../../../types/legacyReactElement'

export default {
  title: 'Components/Header/NavMenuButton',
  component: NavMenuButton,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 NavMenuButton used within the Header component

Source: https://designsystem.digital.gov/components/header/
`,
      },
    },
  },
}

export const DefaultMenuNavMenuButton = (): LegacyReactElement => (
  <NavMenuButton label="Menu" />
)
