import React, { JSX } from 'react'
import classnames from 'classnames'
import { LegacyReactElement } from '../../../types/legacyReactElement'

interface IdentifierLogosProps {
  children: React.ReactNode
  className?: string
}

export const IdentifierLogos = ({
  children,
  className,
  ...divProps
}: IdentifierLogosProps & JSX.IntrinsicElements['div']): LegacyReactElement => {
  const classes = classnames('usa-identifier__logos', className)
  return (
    <div data-testid="identifierLogos" className={classes} {...divProps}>
      {children}
    </div>
  )
}

export default IdentifierLogos
