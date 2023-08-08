import React from 'react'
import { Tooltip } from '@nextui-org/tooltip'
import { TooltipType } from '../types'

export const MyTooltip = ({ children, content }: TooltipType) => {
  return (
    <Tooltip
      className="rounded-lg border border-dark bg-white p-2 text-xs font-light text-dark dark:border-active dark:bg-lightDark dark:text-white"
      content={content}
      placement="bottom"
      showArrow
    >
      {children}
    </Tooltip>
  )
}
