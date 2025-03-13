import React, { JSX } from 'react'
import classname from 'classnames'
import { LegacyReactElement } from '../../types/legacyReactElement'

export const CollectionDescription = ({
  className,
  children,
  ...props
}: JSX.IntrinsicElements['p']): LegacyReactElement => {
  const classes = classname('usa-collection__description', className)
  return (
    <p className={classes} {...props}>
      {children}
    </p>
  )
}
