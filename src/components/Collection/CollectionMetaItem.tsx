import React, { JSX } from 'react'
import classnames from 'classnames'
import { LegacyReactElement } from '../../types/legacyReactElement'

export const CollectionMetaItem = ({
  className,
  children,
  ...props
}: JSX.IntrinsicElements['li']): LegacyReactElement => {
  const classes = classnames('usa-collection__meta-item', className)

  return (
    <li className={classes} {...props}>
      {children}
    </li>
  )
}
