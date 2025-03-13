import React from 'react'
import { Label } from './Label'
import { LegacyReactElement } from '../../../types/legacyReactElement'

export default {
  title: 'Components/Form elements/Label',
  component: Label,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Label component

Source: https://designsystem.digital.gov/components/form-controls/
`,
      },
    },
  },
}

export const DefaultLabel = (): LegacyReactElement => (
  <Label htmlFor="testInput">Text input label</Label>
)

export const Error = (): LegacyReactElement => (
  <Label htmlFor="testInputError" error>
    Text input error
  </Label>
)

export const WithHint = (): LegacyReactElement => (
  <Label htmlFor="testInputHint" hint={<> (optional)</>}>
    Text input
  </Label>
)

export const WithRequiredMarker = (): LegacyReactElement => (
  <Label htmlFor="testInputRequired" requiredMarker>
    Text input
  </Label>
)
