import React from 'react'
import { Radio } from './Radio'
import { LegacyReactElement } from '../../../types/legacyReactElement'

export default {
  title: 'Components/Radio buttons',
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Radio component

Source: https://designsystem.digital.gov/components/radio-buttons
`,
      },
    },
  },
}

export const DefaultRadio = (): LegacyReactElement => (
  <Radio id="input-radio" name="input-radio" label="My Radio Button" />
)

export const Selected = (): LegacyReactElement => (
  <Radio
    id="input-radio"
    name="input-radio"
    label="My Radio Button"
    defaultChecked
  />
)

export const Disabled = (): LegacyReactElement => (
  <Radio id="input-radio" name="input-radio" label="My Radio Button" disabled />
)

export const WithLabelDescription = (): LegacyReactElement => (
  <Radio
    id="input-radio"
    name="input-radio"
    label="My Radio Button"
    labelDescription="This is optional text that can be used to describe the label in more detail."
  />
)

export const Tile = (): LegacyReactElement => (
  <Radio id="input-radio" name="input-radio" label="My Radio Button" tile />
)

export const TileWithLabelDescription = (): LegacyReactElement => (
  <Radio
    id="input-radio"
    name="input-radio"
    label="My Radio Button"
    labelDescription="This is optional text that can be used to describe the label in more detail."
    tile
  />
)
