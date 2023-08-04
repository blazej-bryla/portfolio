import { TechnologiesCategory as TechnologiesCategoryType } from '@/app/types'
import React from 'react'
import { TechnologiesItem } from '../../components/'

export const TechnologiesCategory = ({
  item
}: {
  item: TechnologiesCategoryType
}) => {
  return (
    <div className="group flex cursor-pointer flex-col gap-2 rounded-lg border border-dark p-4 transition duration-300 dark:border-active  dark:md:hover:bg-lightDark">
      <i className="group-md:hover:text-active text-lg text-dark transition duration-300 dark:text-white">
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
