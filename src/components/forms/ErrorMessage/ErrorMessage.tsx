import React from 'react'
import classnames from 'classnames'
import { LegacyReactElement } from '../../../types/legacyReactElement'

type ErrorMessageProps = {
  children: React.ReactNode
  id?: string
  className?: string
}

export const ErrorMessage = ({
  children,
  className,
  id,
}: ErrorMessageProps): LegacyReactElement => {
  const classes = classnames('usa-error-message', className)

  return (
    <span data-testid="errorMessage" className={classes} id={id} role="alert">
      {children}
    </span>
  )
}

export default ErrorMessage
