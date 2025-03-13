import React, { JSX } from 'react'
import classnames from 'classnames'
import { LegacyReactElement } from '../../../types/legacyReactElement'

export const DateInputGroup = ({
  children,
  className,
  ...divAttributes
}: JSX.IntrinsicElements['div']): LegacyReactElement => {
  const classes = classnames('usa-memorable-date', className)

  return (
    <div className={classes} {...divAttributes} data-testid="dateInputGroup">
      {children}
    </div>
  )
}

export default DateInputGroup
