import React, { JSX } from 'react'
import classnames from 'classnames'
import { LegacyReactElement } from '../../types/legacyReactElement'

type CollectionProps = {
  condensed?: boolean
}

export const Collection = ({
  children,
  className,
  condensed,
  ...ulProps
}: CollectionProps & JSX.IntrinsicElements['ul']): LegacyReactElement => {
  const classes = classnames(
    'usa-collection',
    { 'usa-collection--condensed': condensed },
    className
  )
  return (
    <ul className={classes} data-testid="collection" {...ulProps}>
      {children}
    </ul>
  )
}
