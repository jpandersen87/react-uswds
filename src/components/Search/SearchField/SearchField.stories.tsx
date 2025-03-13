import React from 'react'
import { SearchField } from './SearchField'
import { LegacyReactElement } from '../../../types/legacyReactElement'

export default {
  title: 'Components/Search/SearchField',
  component: SearchField,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Search Field component

Source: https://designsystem.digital.gov/components/search/
`,
      },
    },
  },
}

export const DefaultSearchField = (): LegacyReactElement => (
  <SearchField placeholder="Search..." />
)

export const BigSearchField = (): LegacyReactElement => (
  <SearchField placeholder="Type something here..." isBig />
)
