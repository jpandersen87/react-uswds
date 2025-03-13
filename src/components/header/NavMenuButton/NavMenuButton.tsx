import React, { JSX } from 'react'
import { LegacyReactElement } from '../../../types/legacyReactElement'

type NavMenuButtonProps = {
  label: React.ReactNode
}

export const NavMenuButton = ({
  label,
  onClick,
  ...buttonProps
}: NavMenuButtonProps &
  JSX.IntrinsicElements['button']): LegacyReactElement => {
  return (
    <button
      className="usa-menu-btn"
      onClick={onClick}
      data-testid="navMenuButton"
      {...buttonProps}
      type="button">
      {label}
    </button>
  )
}
