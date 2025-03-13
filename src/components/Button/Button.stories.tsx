import React from 'react'
import { Button } from './Button'
import { LegacyReactElement } from '../../types/legacyReactElement'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Button component

Source: https://designsystem.digital.gov/components/button/
`,
      },
    },
  },
}

export const DefaultButton = (): LegacyReactElement => (
  <Button type="button">Click Me</Button>
)

export const Secondary = (): LegacyReactElement => (
  <Button type="button" secondary>
    Click Me
  </Button>
)

export const AccentCool = (): LegacyReactElement => (
  <Button type="button" accentStyle="cool">
    Click Me
  </Button>
)

export const AccentWarm = (): LegacyReactElement => (
  <Button type="button" accentStyle="warm">
    Click Me
  </Button>
)

export const Base = (): LegacyReactElement => (
  <Button type="button" base>
    Click Me
  </Button>
)

export const Outline = (): LegacyReactElement => (
  <Button type="button" outline>
    Click Me
  </Button>
)

export const Inverse = (): LegacyReactElement => (
  <Button type="button" inverse>
    Click Me
  </Button>
)

export const Big = (): LegacyReactElement => (
  <Button type="button" size="big">
    Click Me
  </Button>
)

export const Unstyled = (): LegacyReactElement => (
  <Button type="button" unstyled>
    Click Me
  </Button>
)

export const CustomClass = (): LegacyReactElement => (
  <Button type="button" className="custom-class">
    Click Me
  </Button>
)

export const Disabled = (): LegacyReactElement => (
  <Button type="button" disabled>
    Click Me
  </Button>
)
