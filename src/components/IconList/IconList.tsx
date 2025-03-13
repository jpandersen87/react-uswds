import React, { ReactElement, JSX } from 'react'
import classnames from 'classnames'
import { LegacyReactElement } from '../../types/legacyReactElement'

interface IconListProps {
  children: React.ReactNode
  className?: string
}

export const IconList = ({
  children,
  className,
}: IconListProps & JSX.IntrinsicElements['ul']): LegacyReactElement => {
  const classes = classnames(className, 'usa-icon-list')

  return (
    <ul className={classes} data-testid="iconList">
      {children}
    </ul>
  )
}

export default IconList
