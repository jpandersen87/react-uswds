import React, { JSX } from 'react'
import classnames from 'classnames'
import { LegacyReactElement } from '../../types/legacyReactElement'

export const CollectionMeta = ({
  className,
  children,
  ...props
}: JSX.IntrinsicElements['ul']): LegacyReactElement => {
  const classes = classnames('usa-collection__meta', className)

  return (
    <ul className={classes} {...props}>
      {children}
    </ul>
  )
}
