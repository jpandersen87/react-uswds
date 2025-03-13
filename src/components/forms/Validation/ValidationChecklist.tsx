import React, { JSX } from 'react'
import classnames from 'classnames'
import { LegacyReactElement } from '../../../types/legacyReactElement'

type ValidationChecklistProps = {
  id: string
  children: React.ReactNode
}

export const ValidationChecklist = ({
  children,
  className,
  ...ulProps
}: ValidationChecklistProps &
  JSX.IntrinsicElements['ul']): LegacyReactElement => {
  const classes = classnames(className, 'usa-checklist')
  return (
    <ul className={classes} data-testid="validationChecklist" {...ulProps}>
      {children}
    </ul>
  )
}

export default ValidationChecklist
