import React, { JSX } from 'react'
import classnames from 'classnames'
import { LegacyReactElement } from '../../../types/legacyReactElement'

interface SummaryBoxTextProps {
  children?: React.ReactNode
  className?: string
}

export const SummaryBoxContent = ({
  children,
  className,
  ...divProps
}: SummaryBoxTextProps & JSX.IntrinsicElements['div']): LegacyReactElement => {
  const classes = classnames('usa-summary-box__text', className)
  return (
    <div className={classes} {...divProps}>
      {children}
    </div>
  )
}

export default SummaryBoxContent
