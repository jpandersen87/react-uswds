import React, { JSX } from 'react'
import classnames from 'classnames'
import { LegacyReactElement } from '../../../types/legacyReactElement'

export interface IdentifierLinkItemProps {
  children: React.ReactNode
  className?: string
}

export const IdentifierLinkItem = ({
  children,
  className,
  ...listItemProps
}: IdentifierLinkItemProps &
  JSX.IntrinsicElements['li']): LegacyReactElement => {
  const classes = classnames('usa-identifier__required-links-item', className)
  return (
    <li className={classes} {...listItemProps}>
      {children}
    </li>
  )
}
