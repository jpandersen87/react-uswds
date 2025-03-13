import React, { JSX } from 'react'
import classnames from 'classnames'
import { LegacyReactElement } from '../../../types/legacyReactElement'

type InputPrefixProps = {
  className?: string
  children: React.ReactNode
} & JSX.IntrinsicElements['div']

export const InputPrefix = ({
  className,
  children,
  ...divProps
}: InputPrefixProps): LegacyReactElement => {
  const classes = classnames('usa-input-prefix', className)

  return (
    <div
      className={classes}
      aria-hidden="true"
      {...divProps}
      data-testid="InputPrefix">
      {children}
    </div>
  )
}
