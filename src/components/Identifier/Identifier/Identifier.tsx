import React, { JSX } from 'react'
import classnames from 'classnames'
import { LegacyReactElement } from '../../../types/legacyReactElement'

type IdentifierProps = {
  className?: string
  children: React.ReactNode
}

export const Identifier = ({
  className,
  children,
  ...divProps
}: IdentifierProps & JSX.IntrinsicElements['div']): LegacyReactElement => {
  const classes = classnames('usa-identifier', className)
  return (
    <div data-testid="identifier" className={classes} {...divProps}>
      {children}
    </div>
  )
}

export default Identifier
