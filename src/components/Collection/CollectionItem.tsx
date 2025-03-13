import React, { JSX } from 'react'
import classnames from 'classnames'
import { LegacyReactElement } from '../../types/legacyReactElement'

interface CollectionItemProps {
  variantComponent?: React.ReactNode
}

export const CollectionItem = ({
  className,
  children,
  variantComponent,
  ...props
}: CollectionItemProps & JSX.IntrinsicElements['li']): LegacyReactElement => {
  const classes = classnames('usa-collection__item', className)

  return (
    <li className={classes} {...props}>
      {variantComponent}
      <div className="usa-collection__body">{children}</div>
    </li>
  )
}
