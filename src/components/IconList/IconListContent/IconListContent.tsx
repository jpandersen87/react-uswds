import classnames from 'classnames'
import React, { ReactNode, JSX } from 'react'
import { LegacyReactElement } from '../../../types/legacyReactElement'

interface IconListContentProps {
  className?: string
  children?: ReactNode
}

export const IconListContent = ({
  className,
  children,
  ...divProps
}: IconListContentProps & JSX.IntrinsicElements['div']): LegacyReactElement => {
  const classes = classnames(className, 'usa-icon-list__content')

  return (
    <div className={classes} {...divProps} data-testid="iconListContent">
      {children}
    </div>
  )
}

export default IconListContent
