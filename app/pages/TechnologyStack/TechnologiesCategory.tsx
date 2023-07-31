import { TechnologiesCategory as TechnologiesCategoryType } from '@/app/types'
import React from 'react'
import { TechnologiesItem } from './TechnologiesItem'

export const TechnologiesCategory = ({
  item
}: {
  item: TechnologiesCategoryType
}) => {
  return (
    <div className="flex flex-col gap-2 rounded-lg p-4 transition duration-300 hover:bg-lightDark">
      <i className="text-lg text-white hover:text-active">{item.label}</i>
      <div className="flex flex-wrap gap-2">
        {item.items.map((item, i) => (
          <TechnologiesItem item={item} key={i} />
        ))}
      </div>
    </div>
  )
}
