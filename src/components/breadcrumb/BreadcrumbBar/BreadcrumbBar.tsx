import React, { ReactElement, JSX } from 'react'
import classnames from 'classnames'
import { BreadcrumbProps } from '../Breadcrumb/Breadcrumb'
import { LegacyReactElement } from '../../../types/legacyReactElement'

type BreadcrumbBarProps = {
  children: ReactElement<BreadcrumbProps> | ReactElement<BreadcrumbProps>[]
  variant?: 'default' | 'wrap'
  className?: string
  navProps?: JSX.IntrinsicElements['nav']
  listProps?: JSX.IntrinsicElements['ol']
}

export const BreadcrumbBar = ({
  variant = 'default',
  children,
  className,
  navProps,
  listProps,
}: BreadcrumbBarProps): LegacyReactElement => {
  const classes = classnames(
    'usa-breadcrumb',
    {
      'usa-breadcrumb--wrap': variant === 'wrap',
    },
    className
  )

  return (
    <nav className={classes} aria-label="Breadcrumbs" {...navProps}>
      <ol className="usa-breadcrumb__list" {...listProps}>
        {children}
      </ol>
    </nav>
  )
}
