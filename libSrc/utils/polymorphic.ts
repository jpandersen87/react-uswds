/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FunctionComponent,
  forwardRef,
  type ComponentPropsWithRef,
  type ElementType,
  type ForwardRefExoticComponent,
  type ForwardRefRenderFunction,
  type ReactElement,
} from 'react'

export type DistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never

export type Merge<A, B> = Omit<A, keyof B> & B
export type DistributiveMerge<A, B> = DistributiveOmit<A, keyof B> & B

export type AsProps<
  Component extends ElementType,
  PermanentProps extends object,
  ComponentProps extends object,
> = DistributiveMerge<ComponentProps, PermanentProps & { asCustom?: Component }>

export type PolymorphicWithRef<
  Default extends OnlyAs,
  Props extends object = {},
  OnlyAs extends ElementType = ElementType,
> = <T extends OnlyAs = Default>(
  props: AsProps<T, Props, ComponentPropsWithRef<T>>
) => ReactElement | null

export type PolyForwardComponent<
  Default extends OnlyAs,
  Props extends object = {},
  OnlyAs extends ElementType = ElementType,
> = Merge<
  ForwardRefExoticComponent<
    Merge<ComponentPropsWithRef<Default>, Props & { asCustom?: Default }>
  >,
  PolymorphicWithRef<Default, Props, OnlyAs>
>

export type PolyRefFunction = <
  Default extends OnlyAs,
  Props extends object = {},
  OnlyAs extends ElementType = ElementType,
>(
  Component: ForwardRefRenderFunction<any, Props & { asCustom?: OnlyAs }>
) => PolyForwardComponent<Default, Props, OnlyAs>

export type ComponentPropsWith_Ref<T extends ElementType> = Omit<
  ComponentPropsWithRef<T>,
  'ref'
> & { _ref?: ComponentPropsWithRef<T>['ref'] }

export type PolymorphicWith_Ref<
  Default extends OnlyAs,
  Props extends object = {},
  OnlyAs extends ElementType = ElementType,
> = <T extends OnlyAs = Default>(
  props: AsProps<T, Props, ComponentPropsWith_Ref<T>>
) => ReactElement | null

export type PolyComponent<
  Default extends OnlyAs,
  Props extends object = {},
  OnlyAs extends ElementType = ElementType,
> = Merge<
  FunctionComponent<
    Merge<ComponentPropsWith_Ref<Default>, Props & { asCustom?: Default }>
  >,
  PolymorphicWith_Ref<Default, Props, OnlyAs>
>

export type PolyComponentProps<
  Default extends OnlyAs,
  Props extends object = {},
  OnlyAs extends ElementType = ElementType,
> = Merge<
  Merge<ComponentPropsWith_Ref<Default>, Props & { asCustom?: Default }>,
  AsProps<Default, Props, ComponentPropsWith_Ref<Default>>
>

/**
 * forwardRef with polymorphic typing
 */
export const polymorphicForwardRef = forwardRef as PolyRefFunction

/**
 * Pass-through function in order to get proper polymorphic typing on passed Component.
 * Allows non-forwardRef functional components to be polymorphic with reference passed
 * via _ref prop.
 *
 * @todo Revisit this for React 19 when ref becomes standard prop across all functional
 * components
 */
export const polymorphic = <
  Default extends OnlyAs,
  Props extends object = {},
  OnlyAs extends ElementType = ElementType,
>(
  Component: FunctionComponent<
    Props & { asCustom?: OnlyAs; _ref?: ComponentPropsWithRef<Default>['ref'] }
  >
): PolyComponent<Default, Props, OnlyAs> => {
  return Component as any
}
