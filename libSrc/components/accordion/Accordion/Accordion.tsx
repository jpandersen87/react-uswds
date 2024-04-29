import React, { ElementType, useState } from 'react'
import classnames from 'classnames'

import AccordionItem, {
  type AccordionItemProps,
} from '../AccordionItem/AccordionItem.js'
import Box, { BoxProps } from '../../Box/Box.js'
import { polymorphicBox } from '../../Box/utils.js'

export interface BaseAccordionProps {
  bordered?: boolean
  multiselectable?: boolean
  items: AccordionItemProps[]
  className?: string
}

export type AccordionProps<T extends ElementType | unknown = unknown> =
  BoxProps<T>

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
    const [openItems, setOpenState] = useState(
      items.filter((i) => !!i.expanded).map((i) => i.id)
    )

    const classes = classnames(
      'usa-accordion',
      {
        'usa-accordion--bordered': bordered,
      },
      className
    )

    const toggleItem = (itemId: AccordionItemProps['id']): void => {
      const newOpenItems = [...openItems]
      const itemIndex = openItems.indexOf(itemId)
      const isMultiselectable = multiselectable

      if (itemIndex > -1) {
        newOpenItems.splice(itemIndex, 1)
      } else {
        if (isMultiselectable) {
          newOpenItems.push(itemId)
        } else {
          newOpenItems.splice(0, newOpenItems.length)
          newOpenItems.push(itemId)
        }
      }
      setOpenState(newOpenItems)
    }

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
