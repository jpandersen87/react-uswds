import React, { JSX } from 'react'
import classnames from 'classnames'
import { LegacyReactElement } from '../../../types/legacyReactElement'

type InputSuffixProps = {
  className?: string
  children: React.ReactNode
} & JSX.IntrinsicElements['div']

export const InputSuffix = ({
  className,
  children,
  ...divProps
}: InputSuffixProps): LegacyReactElement => {
  const classes = classnames('usa-input-suffix', className)

  return (
    <div
      className={classes}
      aria-hidden="true"
      {...divProps}
      data-testid="InputSuffix">
      {children}
    </div>
  )
}
