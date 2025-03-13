import React from 'react'
import { LegacyReactElement } from '../../../types/legacyReactElement'

export const RequiredMarker = (): LegacyReactElement => {
  return (
    <abbr title="required" className="usa-hint usa-hint--required">
      *
    </abbr>
  )
}
export default RequiredMarker
