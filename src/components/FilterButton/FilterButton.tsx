import './filter-button.scss'
import knife from '../../assets/images/knife.svg'
import cup from '../../assets/images/icon-cup.svg'

import { FilterButtonProps } from './type'

const FilterButton: React.FC<FilterButtonProps> = ({ ...props }) => {
  const { title, icon, handleSelect } = props

  return (
    <div className='filter-wrapper flex cursor-pointer items-center justify-center' onClick={() => handleSelect(title)}>
      <div className='button flex flex-col items-center justify-center'>
        <img src={icon === 'knife' ? knife : cup} alt='note' width={56} height={56} />
        <div>{title}</div>
      </div>
    </div>
  )
}

export default FilterButton
