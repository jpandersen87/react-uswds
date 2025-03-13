import React, { ReactNode, JSX } from 'react'
import classnames from 'classnames'
import { LegacyReactElement } from '../../../types/legacyReactElement'

interface IconListItemProps {
  className?: string
  children: ReactNode
}

export const IconListItem = ({
  className,
  children,
  ...liProps
}: IconListItemProps & JSX.IntrinsicElements['li']): LegacyReactElement => {
  const classes = classnames(className, 'usa-icon-list__item')

  return (
    <li className={classes} {...liProps} data-testid="iconListItem">
      {children}
    </li>
  )
}

export default IconListItem
