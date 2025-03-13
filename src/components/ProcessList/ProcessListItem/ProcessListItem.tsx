import React, { JSX } from 'react'
import classnames from 'classnames'
import { LegacyReactElement } from '../../../types/legacyReactElement'

export interface ProcessListItemProps {
  className?: string
  children?: React.ReactNode
}

export const ProcessListItem = ({
  className,
  children,
  ...liProps
}: ProcessListItemProps & JSX.IntrinsicElements['li']): LegacyReactElement => {
  const liClasses = classnames('usa-process-list__item', className)
  return (
    <li className={liClasses} {...liProps}>
      {children}
    </li>
  )
}

export default ProcessListItem
