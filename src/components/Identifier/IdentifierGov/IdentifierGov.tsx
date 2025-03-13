import React, { JSX } from 'react'
import classnames from 'classnames'
import { LegacyReactElement } from '../../../types/legacyReactElement'

interface IdentifierGovProps {
  children?: React.ReactNode
  className?: string
}

export const IdentifierGov = ({
  children,
  className,
  ...sectionProps
}: IdentifierGovProps &
  JSX.IntrinsicElements['section']): LegacyReactElement => {
  const classes = classnames(
    'usa-identifier__section usa-identifier__section--usagov',
    className
  )

  return (
    <section data-testid="identifierGov" className={classes} {...sectionProps}>
      <div className="usa-identifier__container">{children}</div>
    </section>
  )
}

export default IdentifierGov
