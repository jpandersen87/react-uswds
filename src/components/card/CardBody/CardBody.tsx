import React, { JSX } from 'react'
import classnames from 'classnames'
import { LegacyReactElement } from '../../../types/legacyReactElement'

export const CardBody = ({
  exdent,
  children,
  className,
  ...bodyProps
}: {
  exdent?: boolean
} & JSX.IntrinsicElements['div']): LegacyReactElement => {
  const classes = classnames(
    'usa-card__body',
    {
      'usa-card__body--exdent': exdent,
    },
    className
  )

  return (
    <div className={classes} {...bodyProps} data-testid="CardBody">
      {children}
    </div>
  )
}

export default CardBody
