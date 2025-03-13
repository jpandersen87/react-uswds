import React, { JSX } from 'react'
import classNames from 'classnames'
import { LegacyReactElement } from '../../../types/legacyReactElement'

export const BannerFlag = ({
  alt,
  className,
  ...imgProps
}: JSX.IntrinsicElements['img']): LegacyReactElement => {
  const classes = classNames('usa-banner__header-flag', className)

  return <img className={classes} alt={alt} {...imgProps} />
}
