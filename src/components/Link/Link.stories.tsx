import React, { JSX } from 'react'
import { Link } from './Link'
import { LegacyReactElement } from '../../types/legacyReactElement'

export default {
  title: 'Components/Link',
  component: Link,
  parameters: {
    docs: {
      description: {
        component: `
Based on Typography guide: https://designsystem.digital.gov/components/typography/#links
`,
      },
    },
  },
}

export const Default = (): LegacyReactElement => (
  <p>
    <Link href={'#'}> This</Link> is a text link.
  </p>
)

export const Visited = (): LegacyReactElement => (
  <p>
    <Link className="usa-color-text-visited" href={'#'}>
      This
    </Link>
    &nbsp;is a visited link.
  </p>
)

export const DarkBackground = (): LegacyReactElement => (
  <div className="usa-dark-background" style={{ padding: '10px' }}>
    <p>
      <Link href={'#'}>This</Link> is a text link on a dark background
    </p>
  </div>
)

export const ExternalLink = (): LegacyReactElement => (
  <p>
    This is a link that goes to an&nbsp;
    <Link variant="external" href={'http://www.truss.works'}>
      external website
    </Link>
    .
  </p>
)

export const NavLink = (): LegacyReactElement => (
  <p>
    This is a&nbsp;
    <Link variant="nav" href={'#'}>
      NavLink
    </Link>
  </p>
)

export const StyledAsButton = (): LegacyReactElement => (
  <p>
    <Link
      className="usa-button"
      variant="unstyled"
      allowSpacebarActivation
      href={'#'}>
      This
    </Link>
    is a link styled to look like a button; it can be activated with the
    spacebar.
  </p>
)

export const CustomComponentLink = (): LegacyReactElement => {
  type MockLinkProps = React.PropsWithChildren<{
    to: string
    className: string
  }> &
    JSX.IntrinsicElements['a']

  const CustomLink: React.FunctionComponent<MockLinkProps> = ({
    to,
    className,
    children,
    ...linkProps
  }: MockLinkProps): LegacyReactElement => (
    <a href={to} className={className} {...linkProps}>
      {children}
    </a>
  )

  return (
    <p>
      <Link<MockLinkProps>
        className="abc"
        asCustom={CustomLink}
        to="http://www.truss.works">
        This
      </Link>
      &nbsp;is a custom component link.
    </p>
  )
}
