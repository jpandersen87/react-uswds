import React, { JSX } from 'react'
import classnames from 'classnames'
import { LegacyReactElement } from '../../../types/legacyReactElement'

interface IdentifierIdentityProps {
  children: React.ReactNode
  domain: string
  className?: string
}

export const IdentifierIdentity = ({
  children,
  domain,
  className,
  ...divProps
}: IdentifierIdentityProps &
  JSX.IntrinsicElements['div']): LegacyReactElement => {
  const classes = classnames('usa-identifier__identity', className)
  return (
    <div data-testid="identifierIdentity" className={classes} {...divProps}>
      <p className="usa-identifier__identity-domain">{domain}</p>
      <p className="usa-identifier__identity-disclaimer">{children}</p>
    </div>
  )
}

export default IdentifierIdentity
