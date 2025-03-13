import React from 'react'
import classnames from 'classnames'
import { LegacyReactElement } from '../../../types/legacyReactElement'

export const ModalHeading = ({
  className,
  children,
  ...headingProps
}: React.HTMLProps<HTMLHeadingElement>): LegacyReactElement => {
  const classes = classnames('usa-modal__heading', className)

  return (
    <h2 className={classes} {...headingProps}>
      {children}
    </h2>
  )
}
