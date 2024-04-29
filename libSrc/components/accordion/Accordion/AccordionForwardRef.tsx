import React from 'react'

import { polymorphicForwardRef } from '../../../utils/polymorphic.js'
import Accordion, { BaseAccordionProps } from './Accordion.js'

const AccordionForwardRef = polymorphicForwardRef<'div', BaseAccordionProps>(
  (props, ref) => {
    return <Accordion _ref={ref} {...props} />
  }
)

export type { BaseAccordionProps, AccordionProps } from './Accordion.js'

export default AccordionForwardRef
