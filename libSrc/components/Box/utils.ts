/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { ElementType, FunctionComponent, ComponentPropsWithRef } from 'react'
import { PolyComponent } from '../../utils/polymorphic.js'

/**
 * Wrap component functions that proxy the Box component with this function
 * in order to get proper typing.
 */
export const polymorphicBox = <
  Props extends object = {},
  Default extends OnlyAs | unknown = unknown,
  OnlyAs extends ElementType = ElementType,
>(
  Component: FunctionComponent<
    Props & {
      asCustom?: OnlyAs
      _ref?: ComponentPropsWithRef<
        Default extends OnlyAs ? Default : 'div'
      >['ref']
    }
  >
): PolyComponent<Default extends OnlyAs ? Default : OnlyAs, Props, OnlyAs> => {
  return Component as any
}
