import { TechnologiesCategory as TechnologiesCategoryType } from '@/app/types'
import React from 'react'
import { TechnologiesItem } from '../../components/'

export const TechnologiesCategory = ({
  item
}: {
  item: TechnologiesCategoryType
}) => {
  return (
    <div className="group flex cursor-pointer flex-col gap-2 rounded-lg border-[1px] border-gray p-4 transition duration-300 hover:border-active hover:bg-lightDark">
      <i className="text-lg text-white transition duration-300 group-hover:text-active">
        {item.label}
      </i>
      <div className="flex flex-wrap gap-2">
        {item.items.map((item, i) => (
          <TechnologiesItem item={item} key={i} />
        ))}
      </div>
    </div>
  )
}
