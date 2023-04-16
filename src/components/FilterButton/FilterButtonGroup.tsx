import FilterButton from './FilterButton'
import { FilterButtonProps } from './type'
import './filter-button.scss'

const FilterButtonGroup: any = ({ ...props }) => {
  const { list } = props

  return (
    <div className='my-[25px] flex items-center justify-center gap-[84px]'>
      {list.map((item: FilterButtonProps) => (
        <FilterButton key={item.id} {...item}></FilterButton>
      ))}
    </div>
  )
}

export default FilterButtonGroup
