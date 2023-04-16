import { RecommendCategoryPropsType } from './type'

const RecommendCategory: React.FC<RecommendCategoryPropsType> = ({ ...props }) => {
  const { type, title, description, handleChange, selected } = props
  return (
    <div
      className={`relative flex cursor-pointer items-center justify-center bg-dark`}
      onClick={() => handleChange(type)}
    >
      <div className='z-20 flex flex-col items-center gap-[11px] px-[8px] pb-[14px] pt-[22px] text-[15px] font-normal leading-defaultTextLH text-white'>
        <div className='max-w-[200px] text-center text-[22px] leading-[27px] text-yellow'>{title}</div>
        <div className='border-t py-[8px] text-[18px] leading-[26px] text-white'>{description}</div>
      </div>
    </div>
  )
}

export default RecommendCategory
