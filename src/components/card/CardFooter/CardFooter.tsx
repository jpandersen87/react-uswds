import React, { JSX } from 'react'
import classnames from 'classnames'
import { LegacyReactElement } from '../../../types/legacyReactElement'

export const CardFooter = ({
  exdent,
  children,
  className,
  ...footerProps
}: {
  exdent?: boolean
} & JSX.IntrinsicElements['div']): LegacyReactElement => {
  const classes = classnames(
    'usa-card__footer',
    {
      'usa-card__footer--exdent': exdent,
    },
    className
  )

  return (
    <div className={classes} {...footerProps} data-testid="CardFooter">
      {children}
    </div>
  )
}

export default CardFooter
