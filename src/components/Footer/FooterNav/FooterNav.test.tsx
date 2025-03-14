/*  eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import { render } from '@testing-library/react'
import { FooterNav } from './FooterNav'

const links = Array(4).fill(
  <a className="usa-footer__primary-link" href="#">
    Primary Link
  </a>
)

const extendedLinks = [
  [
    'Types of Cats',
    ...Array(2).fill(
      <a className="usa-footer__secondary-link" href="#">
        Cheetah
      </a>
    ),
  ],
  [
    'Musical Gifts',
    ...Array(3).fill(
      <a className="usa-footer__secondary-link" href="#">
        Purple Rain
      </a>
    ),
  ],
]

describe('FooterNav component', () => {
  it('renders without errors', () => {
    const { getByRole } = render(<FooterNav links={links} />)
    expect(getByRole('navigation')).toBeInTheDocument()
  })

  it('renders links', () => {
    const { container, getAllByText } = render(<FooterNav links={links} />)
    expect(container.querySelectorAll('a').length).toBe(4)
    expect(getAllByText('Primary Link').length).toBe(4)
  })

  it('renders links with size="big"', () => {
    const { container, getAllByText } = render(
      <FooterNav links={links} size="big" />
    )
    expect(container.querySelectorAll('a').length).toBe(4)
    expect(getAllByText('Primary Link').length).toBe(4)
  })

  it('renders extended link sections with size="big"', () => {
    const { container } = render(<FooterNav links={extendedLinks} size="big" />)

    expect(container.querySelectorAll('a').length).toBe(5)
    expect(container.querySelectorAll('section').length).toBe(2)
  })

  it('renders list headings with size="big"', () => {
    const { container, getByText } = render(
      <FooterNav links={extendedLinks} size="big" />
    )
    expect(container.querySelectorAll('h4').length).toBe(2)
    expect(getByText('Types of Cats')).toBeInTheDocument()
    expect(getByText('Musical Gifts')).toBeInTheDocument()
  })

  it('does not render extended nav links without size="big"', () => {
    const { container } = render(<FooterNav links={extendedLinks} />)
    expect(container.querySelectorAll('a').length).toBe(0)
  })
})
