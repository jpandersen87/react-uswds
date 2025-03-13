import React, { JSX } from 'react'
import { Icon } from '../../Icon/Icons'
import { Button } from '../../Button/Button'
import { LegacyReactElement } from '../../../types/legacyReactElement'

interface ModalCloseButtonProps {
  handleClose: () => void
}

export const ModalCloseButton = ({
  handleClose,
  ...buttonProps
}: ModalCloseButtonProps &
  JSX.IntrinsicElements['button']): LegacyReactElement => {
  return (
    <Button
      aria-label="Close this window"
      {...buttonProps}
      className="usa-modal__close"
      onClick={handleClose}
      data-close-modal
      type="button">
      <Icon.Close aria-hidden="true" />
    </Button>
  )
}
