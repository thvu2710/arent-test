import './my-diary.scss'

import { MyDiaryProps } from './type'

const FilterButton: React.FC<MyDiaryProps> = ({ ...props }) => {
  const { title, date, content, time } = props
  return (
    <div className='m-[12px] flex-[22%] border border-gray p-[16px]'>
      <div className='flex flex-col'>
        <div className='max-w-[70px] text-[15px] text-black'>{date}</div>
        <div className='text-[22px] text-black'>{time}</div>
        <div className=' text-[15px] text-black'>{title}</div>
        <div className='leading-[18px] text-black'>{content}</div>
      </div>
    </div>
  )
}

export default FilterButton
