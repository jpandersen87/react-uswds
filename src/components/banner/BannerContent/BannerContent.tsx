import React, { JSX } from 'react'
import classNames from 'classnames'
import { LegacyReactElement } from '../../../types/legacyReactElement'

type BannerContentProps = {
  isOpen: boolean
}

export const BannerContent = ({
  children,
  isOpen,
  className,
  ...divProps
}: BannerContentProps & JSX.IntrinsicElements['div']): LegacyReactElement => {
  const classes = classNames(
    'usa-banner__content usa-accordion__content',
    className
  )

  return (
    <div className={classes} hidden={!isOpen} {...divProps}>
      {children}
    </div>
  )
}
