import React from 'react'
import { GovBanner } from './GovBanner'
import { LegacyReactElement } from '../../../types/legacyReactElement'

export default {
  title: 'Components/Banner',
  component: GovBanner,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Banner component

Source: https://designsystem.digital.gov/components/banner/
`,
      },
    },
  },
}

export const GovBannerDefault = (): LegacyReactElement => (
  <GovBanner aria-label="Official government website" />
)

export const GovBannerEnglishDotGov = (): LegacyReactElement => (
  <GovBanner
    language="english"
    tld=".gov"
    aria-label="Official government website"
  />
)

export const GovBannerEnglishDotMil = (): LegacyReactElement => (
  <GovBanner
    language="english"
    tld=".mil"
    aria-label="Official government website"
  />
)

export const GovBannerSpanishDotGov = (): LegacyReactElement => (
  <GovBanner
    language="spanish"
    tld=".gov"
    aria-label="Official government website"
  />
)

export const GovBannerSpanishDotMil = (): LegacyReactElement => (
  <GovBanner
    language="spanish"
    tld=".mil"
    aria-label="Official government website"
  />
)
