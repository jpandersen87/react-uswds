import React from 'react'
import classnames from 'classnames'

export type BreadcrumbProps = {
  children: React.ReactNode
  className?: string
  current?: boolean
} & JSX.IntrinsicElements['li']

const Breadcrumb = ({
  children,
  current = false,
  className,
  ...listItemProps
}: BreadcrumbProps): React.ReactElement => {
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

export default Breadcrumb