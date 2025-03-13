import React from 'react'
import { render } from '@testing-library/react'

import { GovBanner } from './GovBanner'

describe('GovBanner component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<GovBanner />)

    const banner = queryByTestId('govBanner')
    expect(banner).toBeInTheDocument()
    expect(banner).toHaveAttribute(
      'aria-label',
      'Official website of the United States government'
    )
  })

  it('renders section attributes passed in through props', () => {
    const { queryByTestId } = render(
      <GovBanner aria-label="Official government website" />
    )
    expect(queryByTestId('govBanner')).toHaveAttribute('aria-label')
  })

  it('renders with language and tld props passed', () => {
    const { queryByTestId } = render(
      <GovBanner language="english" tld=".mil" />
    )
    expect(queryByTestId('govBanner')).toBeInTheDocument()
  })

  describe('static content', () => {
    it('renders consistently with default props', () => {
      const tree = render(<GovBanner />)
      expect(tree.container).toMatchSnapshot()
    })

    it('renders consistently in English for .gov sites', () => {
      const tree = render(<GovBanner language="english" tld=".gov" />)
      expect(tree.container).toMatchSnapshot()
    })

    it('renders consistently in English for .mil sites', () => {
      const tree = render(<GovBanner language="english" tld=".mil" />)
      expect(tree.container).toMatchSnapshot()
    })

    it('renders consistently in Spanish for .gov sites', () => {
      const tree = render(<GovBanner language="spanish" tld=".gov" />)
      expect(tree.container).toMatchSnapshot()
    })

    it('renders consistently in Spanish for .mil sites', () => {
      const tree = render(<GovBanner language="spanish" tld=".mil" />)
      expect(tree.container).toMatchSnapshot()
    })
  })
})
