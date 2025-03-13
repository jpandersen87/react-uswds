import React, { JSX } from 'react'
import classnames from 'classnames'
import { LegacyReactElement } from '../../../types/legacyReactElement'

export interface IdentifierLogoProps {
  children: React.ReactNode
  className?: string
}

export const IdentifierLogo = ({
  children,
  className,
  ...anchorProps
}: IdentifierLogoProps & JSX.IntrinsicElements['a']): LegacyReactElement => {
  const classes = classnames('usa-identifier__logo', className)
  return (
    <a className={classes} {...anchorProps}>
      {children}
    </a>
  )
}
