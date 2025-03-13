import React from 'react'
import classnames from 'classnames'
import { LegacyReactElement } from '../../../types/legacyReactElement'

type FormGroupProps = {
  children: React.ReactNode
  className?: string
  error?: boolean
}

export const FormGroup = ({
  children,
  className,
  error,
}: FormGroupProps): LegacyReactElement => {
  const classes = classnames(
    'usa-form-group',
    { 'usa-form-group--error': error },
    className
  )

  return (
    <div data-testid="formGroup" className={classes}>
      {children}
    </div>
  )
}
