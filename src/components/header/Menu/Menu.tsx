import React from 'react'
import { NavList, NavListProps } from '../NavList/NavList'
import { LegacyReactElement } from '../../../types/legacyReactElement'

type MenuProps = {
  items: React.ReactNode[]
  isOpen: boolean
  type?:
    | 'primary'
    | 'secondary'
    | 'subnav'
    | 'megamenu'
    | 'footerSecondary'
    | 'language'
}

export const Menu = ({
  className,
  items,
  isOpen,
  type,
  ...navListProps
}: MenuProps & NavListProps): LegacyReactElement => {
  return (
    <NavList
      className={className}
      items={items}
      type={type ? type : 'subnav'}
      hidden={!isOpen}
      {...navListProps}
    />
  )
}

export default Menu
