import './my-exercise.scss'

import { MyExerciseProps } from './type'

const FilterButton: React.FC<MyExerciseProps> = ({ ...props }) => {
  const { title, kcal, time } = props
  return (
    <li className='mx-[15px] flex-[45%]	basis-[45%]'>
      <div className='flex justify-between border-b border-b-gray p-[5px]'>
        <div className='flex flex-col'>
          <div className=' text-[15px] text-white'>{title}</div>
          <div className='leading-[18px] text-yellow'>{kcal} kal</div>
        </div>
        <div className='text-yellow'>{time} min</div>
      </div>
    </li>
  )
}

export default FilterButton
