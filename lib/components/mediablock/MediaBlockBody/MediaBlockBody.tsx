import React, { ReactElement } from 'react'
import classNames from 'classnames'

export type MediaBlockBodyProps = JSX.IntrinsicElements['div']

const MediaBlockBody = ({
  children,
  className,
  ...divProps
}: MediaBlockBodyProps): ReactElement => {
  const classes = classNames('usa-media-block__body', className)

  return (
    <div className={classes} {...divProps}>
      {children}
    </div>
  )
}

export default MediaBlockBody