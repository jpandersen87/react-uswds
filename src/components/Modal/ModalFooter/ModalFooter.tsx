import React, { JSX } from 'react'
import classnames from 'classnames'
import { LegacyReactElement } from '../../../types/legacyReactElement'

interface ModalFooterProps {
  children: React.ReactNode
  className?: string
}

export const ModalFooter = ({
  children,
  className,
  ...divProps
}: ModalFooterProps & JSX.IntrinsicElements['div']): LegacyReactElement => {
  const classes = classnames('usa-modal__footer', className)

  return (
    <div className={classes} data-testid="modalFooter" {...divProps}>
      {children}
    </div>
  )
}
