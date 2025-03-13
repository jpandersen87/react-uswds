/*  eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'

import { SiteAlert } from './SiteAlert'
import { Link } from '../Link/Link'
import { LegacyReactElement } from '../../types/legacyReactElement'

export default {
  title: 'Components/SiteAlert',
  component: SiteAlert,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 SiteAlert component

Source: http://designsystem.digital.gov/components/site-alert
`,
      },
    },
  },
  argTypes: {
    slim: {
      control: {
        type: 'boolean',
      },
    },
    showIcon: {
      control: {
        type: 'boolean',
      },
    },
    variant: {
      options: ['info', 'emergency'],
      control: { type: 'radio' },
    },
  },
  args: {
    variant: 'info',
  },
}

type StorybookArguments = {
  slim: boolean
  showIcon: boolean
  variant: 'info' | 'emergency'
}

const infoHeading = 'Short alert message'

const additionalContext = (
  <p className="usa-alert__text">
    Additional context and followup information including{' '}
    <Link className="usa-link" href="#">
      a link
    </Link>
    .
  </p>
)

const emergencyHeading = 'Emergency alert message'

const infoWithList = (
  <ul className="usa-list">
    <li>
      The primary informational message and{` `}
      <Link href="#">a link</Link>
      {` `}for supporting context.
    </li>
    <li>
      Another message,{` `}
      <Link href="#">and another link</Link>.
    </li>
    <li>A final informational message.</li>
  </ul>
)

const emergencyWithList = (
  <ul className="usa-list">
    <li>
      The primary emergency message and{` `}
      <Link href="#">a link</Link>
      {` `}for supporting context.
    </li>
    <li>
      Another message,{` `}
      <Link href="#">and another link</Link>.
    </li>
    <li>A final emergency message.</li>
  </ul>
)

const shortAlertContent = (
  <p className="usa-alert__text">
    <strong>Short alert message.</strong>
    &nbsp;Additional context and followup information including&nbsp;
    <Link href="#">a link</Link>.
  </p>
)

export const StandardInformationalSiteAlert = (): LegacyReactElement => (
  <SiteAlert variant="info" heading={infoHeading}>
    {additionalContext}
  </SiteAlert>
)

export const StandardEmergencySiteAlert = (): LegacyReactElement => (
  <SiteAlert variant="emergency" heading={emergencyHeading}>
    {additionalContext}
  </SiteAlert>
)

export const InformationalAlertWithNoHeader = (): LegacyReactElement => (
  <SiteAlert variant="info">{shortAlertContent}</SiteAlert>
)

export const EmergencyAlertWithNoHeader = (): LegacyReactElement => (
  <SiteAlert variant="emergency">{shortAlertContent}</SiteAlert>
)

export const InformationalAlertWithList = (): LegacyReactElement => (
  <SiteAlert variant="info" heading={infoHeading}>
    {infoWithList}
  </SiteAlert>
)

export const EmergencyAlertWithList = (): LegacyReactElement => (
  <SiteAlert
    variant="emergency"
    heading={emergencyHeading}
    aria-label="Site alert">
    {emergencyWithList}
  </SiteAlert>
)

export const SlimEmergencyAlert = (): LegacyReactElement => (
  <SiteAlert slim variant="emergency">
    {shortAlertContent}
  </SiteAlert>
)

export const EmergencyAlertNoIcon = (): LegacyReactElement => (
  <SiteAlert showIcon={false} variant="emergency">
    {shortAlertContent}
  </SiteAlert>
)

export const AlertWithCustomControls = {
  render: (argTypes: StorybookArguments): LegacyReactElement => (
    <SiteAlert
      slim={argTypes.slim}
      showIcon={argTypes.showIcon}
      variant={argTypes.variant}>
      {shortAlertContent}
    </SiteAlert>
  ),
}

export const AlertWithStringContent = (): LegacyReactElement => (
  <SiteAlert variant="info">Short alert content</SiteAlert>
)

export const AlertWithMultipleChildContent = (): LegacyReactElement => (
  <SiteAlert variant="info">
    <p className="usa-alert__text">Alert content</p>
    <em>which includes</em> <strong>formatting tags</strong> and{' '}
    <Link href="#">links</Link>.
  </SiteAlert>
)
