import FilterButton from './FilterButton'
import { FilterButtonProps, FilterButtonGroupProps } from './type'
import './filter-button.scss'

const FilterButtonGroup: React.FC<FilterButtonGroupProps> = ({ ...props }) => {
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
