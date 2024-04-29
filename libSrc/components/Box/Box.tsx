import React, { ElementType } from 'react'
import {
  PolyComponentProps,
  polymorphicForwardRef,
} from '../../utils/polymorphic.js'

export type BoxProps<T extends ElementType | unknown = 'div'> =
  T extends ElementType ? PolyComponentProps<T> : PolyComponentProps<'div'>

/**
 * Polymorphic component that defaults to div.
 */
const BoxForwardRef = polymorphicForwardRef<'div'>(
  ({ asCustom: Element = 'div', ...props }, ref) => {
    return <Element ref={ref} {...props} />
  }
)

export default BoxForwardRef
