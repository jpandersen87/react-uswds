import classNames from 'classnames'

export interface AccordionClassOptions {
  bordered?: boolean
}

export function parseClasses(
  className?: string,
  { bordered }: AccordionClassOptions | undefined = {}
) {
  return classNames(
    'usa-accordion',
    {
      'usa-accordion--bordered': bordered,
    },
    className
  )
}
