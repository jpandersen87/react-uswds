import React, { JSX } from 'react'

import classnames from 'classnames'
import { LegacyReactElement } from '../../../types/legacyReactElement'

type SummaryBoxProps = {
  children?: React.ReactNode
  className?: string
}

export const SummaryBox = ({
  children,
  className,
  ...divProps
}: SummaryBoxProps & JSX.IntrinsicElements['div']): LegacyReactElement => {
  const classes = classnames('usa-summary-box', className)
  return (
    <div className={classes} data-testid="summary-box" {...divProps}>
      <div className="usa-summary-box__body">{children}</div>
    </div>
  )
}

export default SummaryBox
