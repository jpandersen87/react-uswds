import React, { JSX } from 'react'
import classnames from 'classnames'
import { LegacyReactElement } from '../../types/legacyReactElement'

export const CollectionThumbnail = ({
  className,
  src,
  alt,
  ...props
}: JSX.IntrinsicElements['img']): LegacyReactElement => {
  const classes = classnames('usa-collection__img', className)

  return <img className={classes} src={src} alt={alt} {...props} />
}
