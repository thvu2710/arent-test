import { RecommendItemProps } from './type'
import './recommend-list.scss'

const MenuItem: React.FC<RecommendItemProps> = ({ ...props }) => {
  const { content, image, date, tags } = props
  return (
    <div className='h-[234px] w-[234px]'>
      <div className='relative'>
        <div className='h-[134px] w-[234px]'>
          <img className='h-full w-full object-cover' src={`/${image}`} alt='menu item' />
        </div>

        <div className='absolute left-0 bottom-0	 bg-yellow px-[10px] py-[7px] text-[15px] font-normal leading-defaultTextLH text-white'>
          {date}
        </div>
      </div>

      <div className='mt-[8px]'>{content}</div>
      <div className='flex gap-[10px]'>
        {tags?.map((tag) => (
          <div className='text-orange' key={tag}>
            #{tag}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenuItem
