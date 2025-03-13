import React, { JSX } from 'react'
import classNames from 'classnames'
import { LegacyReactElement } from '../../../types/legacyReactElement'

export const MediaBlockBody = ({
  children,
  className,
  ...divProps
}: JSX.IntrinsicElements['div']): LegacyReactElement => {
  const classes = classNames('usa-media-block__body', className)

  return (
    <div className={classes} {...divProps}>
      {children}
    </div>
  )
}
