import React, { forwardRef } from 'react'
import classnames from 'classnames'

import ModalCloseButton from '../ModalCloseButton/ModalCloseButton.js'

export type ModalWindowProps = {
  modalId: string
  children: React.ReactNode
  handleClose: () => void
  className?: string
  isLarge?: boolean
  forceAction?: boolean
} & JSX.IntrinsicElements['div']

export const ModalWindowForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  ModalWindowProps
> = (
  {
    modalId,
    className,
    children,
    handleClose,
    isLarge = false,
    forceAction = false,
    ...divProps
  },
  ref
): React.ReactElement => {
  const classes = classnames(
    'usa-modal',
    {
      'usa-modal--lg': isLarge,
    },
    className
  )

  return (
    <div
      data-testid="modalWindow"
      className={classes}
      ref={ref}
      data-force-action={forceAction}
      {...divProps}>
      <div className="usa-modal__content">
        <div className="usa-modal__main">{children}</div>
        {!forceAction && (
          <ModalCloseButton aria-controls={modalId} handleClose={handleClose} />
        )}
      </div>
    </div>
  )
}

const ModalWindow = forwardRef(ModalWindowForwardRef)

export default ModalWindow