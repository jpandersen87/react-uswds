import React from 'react'
import { Tag } from './Tag'
import { LegacyReactElement } from '../../types/legacyReactElement'

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Tag component

Source: https://designsystem.digital.gov/components/tag/
`,
      },
    },
  },
}

export const DefaultTag = (): LegacyReactElement => <Tag>My Tag</Tag>

export const CustomBg = (): LegacyReactElement => (
  <Tag background="#d83933">My Tag</Tag>
)

export const CustomClass = (): LegacyReactElement => (
  <Tag className="bg-secondary">My Tag</Tag>
)
