import React, { ReactElement, JSX } from 'react'
import classNames from 'classnames'
import { LegacyReactElement } from '../../../types/legacyReactElement'

type BannerProps = {
  divProps?: JSX.IntrinsicElements['div']
}

export const Banner = ({
  children,
  divProps,
  className,
  ...sectionProps
}: BannerProps & JSX.IntrinsicElements['section']): LegacyReactElement => {
  const classes = classNames('usa-banner', className)

  const { className: divClassName, ...remainingDivProps } = divProps || {}
  const divClasses = classNames('usa-accordion', divClassName)

  return (
    <section className={classes} {...sectionProps}>
      <div className={divClasses} {...remainingDivProps}>
        {children}
      </div>
    </section>
  )
}
