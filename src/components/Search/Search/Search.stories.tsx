import React from 'react'
import { Search } from './Search'
import { LegacyReactElement } from '../../../types/legacyReactElement'

export default {
  title: 'Components/Search/Search',
  component: Search,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Search component

Source: https://designsystem.digital.gov/components/search/
`,
      },
    },
  },
}

const mockSubmit = (): void => {
  /* mock submit fn */
}

const sampleLocalization = {
  buttonText: 'Buscar',
}

export const DefaultSearch = (): LegacyReactElement => (
  <Search onSubmit={mockSubmit} />
)

export const BigSearch = (): LegacyReactElement => (
  <Search size="big" onSubmit={mockSubmit} />
)

export const SmallSearch = (): LegacyReactElement => (
  <Search
    placeholder="(Optional) Placeholder Text"
    size="small"
    onSubmit={mockSubmit}
  />
)

export const DefaultSpanishSearch = (): LegacyReactElement => (
  <Search onSubmit={mockSubmit} i18n={sampleLocalization} />
)

export const BigSpanishSearch = (): LegacyReactElement => (
  <Search size="big" onSubmit={mockSubmit} i18n={sampleLocalization} />
)

export const SmallSpanishSearch = (): LegacyReactElement => (
  <Search
    placeholder="(Optional) Spanish Placeholder Text"
    size="small"
    onSubmit={mockSubmit}
    i18n={sampleLocalization}
  />
)
