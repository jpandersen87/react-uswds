import React, { JSX } from 'react'
import classnames from 'classnames'
import { LegacyReactElement } from '../../../types/legacyReactElement'
export interface BreadcrumbProps {
  children: React.ReactNode
  className?: string
  current?: boolean
}

export const Breadcrumb = ({
  children,
  current = false,
  className,
  ...listItemProps
}: BreadcrumbProps & JSX.IntrinsicElements['li']): LegacyReactElement => {
  const classes = classnames(
    'usa-breadcrumb__list-item',
    {
      'usa-current': current,
    },
    className
  )

  return (
    <li
      className={classes}
      aria-current={current ? 'page' : undefined}
      {...listItemProps}>
      {children}
    </li>
  )
}
