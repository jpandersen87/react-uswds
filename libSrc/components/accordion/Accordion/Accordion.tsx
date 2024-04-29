import React, { type ElementType } from 'react'

import AccordionItem, {
  type AccordionItemProps,
} from '../AccordionItem/AccordionItem.js'
import Box, { BoxProps } from '../../Box/Box.js'
import { polymorphicBox } from '../../Box/utils.js'
import withAccordion from './withAccordion.js'

export interface BaseAccordionProps {
  bordered?: boolean
  multiselectable?: boolean
  items: AccordionItemProps[]
  className?: string
}

export type AccordionProps<T extends ElementType | unknown = unknown> =
  BoxProps<T>

/**
 * @see https://designsystem.digital.gov/components/accordion/
 */
const Accordion = polymorphicBox<BaseAccordionProps>(
  ({
    asCustom,
    bordered,
    items,
    className,
    multiselectable = false,
    _ref,
    ...props
  }) => {
    const { classes, toggleItem, openItems } = withAccordion({
      items,
      bordered,
      className,
      multiselectable,
    })

    return (
      <Box
        asCustom={asCustom}
        className={classes}
        data-testid="accordion"
        data-allow-multiple={multiselectable || undefined}
        ref={_ref}
        {...props}>
        {items.map((item, i) => (
          <AccordionItem
            key={`accordionItem_${i}`}
            {...item}
            expanded={openItems.indexOf(item.id) > -1}
            handleToggle={(): void => {
              toggleItem(item.id)
            }}
          />
        ))}
      </Box>
    )
  }
)

export default Accordion
