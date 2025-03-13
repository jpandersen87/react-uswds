import classnames from 'classnames'
import React, { ReactNode, JSX } from 'react'
import { LegacyReactElement } from '../../../types/legacyReactElement'

interface IconListIconProps {
  className?: string
  children: ReactNode
}

export const IconListIcon = ({
  className,
  children,
  ...divProps
}: IconListIconProps & JSX.IntrinsicElements['div']): LegacyReactElement => {
  const classes = classnames(className, 'usa-icon-list__icon')

  return (
    <div className={classes} {...divProps} data-testid="iconListIcon">
      {children}
    </div>
  )
}
export default IconListIconProps
