import React, { ReactElement, JSX } from 'react'
import classNames from 'classnames'
import { LegacyReactElement } from '../../../types/legacyReactElement'

export const BannerGuidance = ({
  children,
  className,
  ...divProps
}: JSX.IntrinsicElements['div']): LegacyReactElement => {
  const divClasses = classNames('usa-banner__guidance', className)

  return (
    <div className={divClasses} {...divProps}>
      {children}
    </div>
  )
}
