import React from 'react'
import classnames from 'classnames'

import NavCloseButton from '../NavCloseButton/NavCloseButton.js'
import NavList from '../NavList/NavList.js'

export type PrimaryNavProps = {
  items: React.ReactNode[]
  onToggleMobileNav?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
  mobileExpanded?: boolean
} & JSX.IntrinsicElements['nav']

const PrimaryNav = ({
  items,
  onToggleMobileNav,
  mobileExpanded,
  children,
  className,
  ...navProps
}: PrimaryNavProps): React.ReactElement => {
  const classes = classnames(
    'usa-nav',
    {
      'is-visible': mobileExpanded,
    },
    className
  )

  return (
    <nav className={classes} {...navProps}>
      <NavCloseButton onClick={onToggleMobileNav} />
      <NavList items={items} type="primary" />
      {children}
    </nav>
  )
}

export default PrimaryNav