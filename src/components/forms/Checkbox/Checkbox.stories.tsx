import React from 'react'
import { Checkbox } from './Checkbox'
import { LegacyReactElement } from '../../../types/legacyReactElement'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Checkbox component

Source: https://designsystem.digital.gov/components/checkbox
`,
      },
    },
  },
}

export const DefaultCheckbox = (): LegacyReactElement => (
  <Checkbox id="checkbox" name="checkbox" label="My Checkbox" />
)

export const Checked = (): LegacyReactElement => (
  <Checkbox id="checkbox" name="checkbox" label="My Checkbox" defaultChecked />
)

export const Disabled = (): LegacyReactElement => (
  <Checkbox id="checkbox" name="checkbox" label="My Checkbox" disabled />
)

export const WithRichLabel = (): LegacyReactElement => (
  <Checkbox
    id="checkbox"
    name="checkbox"
    label={<strong>My Checkbox</strong>}
  />
)

export const WithLabelDescription = (): LegacyReactElement => (
  <Checkbox
    id="checkbox"
    name="checkbox"
    label="My Checkbox"
    labelDescription="This is optional text that can be used to describe the label in more detail."
  />
)

export const Tile = (): LegacyReactElement => (
  <Checkbox id="checkbox" name="checkbox" label="My Checkbox" tile />
)

export const TileWithLabelDescription = (): LegacyReactElement => (
  <Checkbox
    id="checkbox"
    name="checkbox"
    label="My Checkbox"
    labelDescription="This is optional text that can be used to describe the label in more detail."
    tile
  />
)
