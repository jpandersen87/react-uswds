import { useCallback, useMemo, useState } from 'react'
import type { AccordionItemProps } from '../AccordionItem/AccordionItem.js'
import { parseClasses } from './utils.js'

export interface WithAccordionProps {
  bordered?: boolean
  multiselectable?: boolean
  items: AccordionItemProps[]
  className?: string
}

function withAccordion({
  items,
  bordered,
  className,
  multiselectable,
}: WithAccordionProps) {
  const [openItems, setOpenState] = useState(
    items.filter((i) => !!i.expanded).map((i) => i.id)
  )

  const classes = useMemo(
    () => parseClasses(className, { bordered }),
    [className, bordered]
  )

  const toggleItem = useCallback(
    (itemId: string): void => {
      setOpenState((curr) => {
        // always remove on close toggle
        if (curr.includes(itemId)) {
          return curr.filter((i) => i !== itemId)
        } else {
          if (multiselectable) {
            return [...curr, itemId]
          } else {
            return [itemId]
          }
        }
      })
    },
    [multiselectable]
  )

  const result = useMemo(
    () => ({
      classes,
      toggleItem,
      openItems,
      setOpenState,
    }),
    [classes, toggleItem, openItems, setOpenState]
  )

  return result
}

export default withAccordion
