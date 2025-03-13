import React from 'react'
import { SearchButton } from './SearchButton'
import { LegacyReactElement } from '../../../types/legacyReactElement'

export default {
  title: 'Components/Search/SearchButton',
  component: SearchButton,
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

const sampleLocalization = {
  buttonText: 'Buscar',
}

export const DefaultSearchButton = (): LegacyReactElement => <SearchButton />

export const BigSearchButton = (): LegacyReactElement => (
  <SearchButton size="big" />
)

export const SmallSearch = (): LegacyReactElement => (
  <SearchButton size="small" />
)

export const DefaultSpanishSearchButton = (): LegacyReactElement => (
  <SearchButton i18n={sampleLocalization} />
)

export const BigSpanishSearchButton = (): LegacyReactElement => (
  <SearchButton size="big" i18n={sampleLocalization} />
)

export const SmallSpanishSearch = (): LegacyReactElement => (
  <SearchButton size="small" i18n={sampleLocalization} />
)
