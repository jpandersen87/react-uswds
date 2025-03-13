import React, { JSX } from 'react'
import classnames from 'classnames'
import { LegacyReactElement } from '../../../types/legacyReactElement'

type TitleProps = {
  children: React.ReactNode
}

export const Title = ({
  className,
  children,
  ...divProps
}: TitleProps & JSX.IntrinsicElements['div']): LegacyReactElement => {
  const classes = classnames('usa-logo', className)

  return (
    <div className={classes} {...divProps}>
      <em className="usa-logo__text">{children}</em>
    </div>
  )
}

export default Title
