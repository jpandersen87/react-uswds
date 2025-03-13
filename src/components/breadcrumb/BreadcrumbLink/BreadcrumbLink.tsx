import classnames from 'classnames'
import React from 'react'
import {
  CustomLinkProps,
  DefaultLinkProps,
  isCustomProps,
  Link,
} from '../../Link/Link'
import { LegacyReactElement } from '../../../types/legacyReactElement'

export function BreadcrumbLink(props: DefaultLinkProps): LegacyReactElement

export function BreadcrumbLink<T>(props: CustomLinkProps<T>): LegacyReactElement
export function BreadcrumbLink<FCProps = DefaultLinkProps>({
  className,
  ...passThroughProps
}: DefaultLinkProps | CustomLinkProps<FCProps>): LegacyReactElement {
  const classes = classnames(className, 'usa-breadcrumb__link')

  const linkProps = {
    ...passThroughProps,
    className: classes,
  } as DefaultLinkProps | CustomLinkProps<FCProps>

  if (isCustomProps(linkProps)) {
    return <Link<FCProps> {...linkProps} variant="unstyled" />
  }

  return <Link {...linkProps} variant="unstyled" />
}
