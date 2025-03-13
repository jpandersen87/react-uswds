import React from 'react'
import classnames from 'classnames'

import {
  CustomLinkProps,
  DefaultLinkProps,
  isCustomProps,
  Link,
} from '../../Link/Link'
import { LegacyReactElement } from '../../../types/legacyReactElement'

export function IdentifierLink(props: DefaultLinkProps): LegacyReactElement
export function IdentifierLink<T>(props: CustomLinkProps<T>): LegacyReactElement
export function IdentifierLink<FCProps = DefaultLinkProps>({
  className,
  ...passThroughProps
}: DefaultLinkProps | CustomLinkProps<FCProps>): LegacyReactElement {
  const classes = classnames(className, 'usa-identifier__required-link')
  const linkProps = {
    ...passThroughProps,
    className: classes,
  } as DefaultLinkProps | CustomLinkProps<FCProps>

  if (isCustomProps(linkProps)) {
    return <Link<FCProps> {...linkProps} />
  }

  return <Link {...linkProps} />
}
