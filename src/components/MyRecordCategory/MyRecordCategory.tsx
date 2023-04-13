import { MyRecordCategoryPropsType } from './type'

const MyRecordCategory: React.FC<MyRecordCategoryPropsType> = ({ ...props }) => {
  const { type, title, description, handleChange, selected } = props
  return (
    <div
      className={`relative flex h-[288px] w-[288px] items-center justify-center ${selected === type && 'bg-yellow'} `}
      onClick={() => handleChange(type)}
    >
      <div className='z-20 flex flex-col items-center gap-[11px] px-[10px] py-[7px] text-[15px] font-normal leading-defaultTextLH text-white'>
        <div className='text-[25px] leading-[30px] text-yellow'>{title}</div>
        <div className='w-fit bg-orange px-[10px] text-[14px] leading-[20px]'>{description}</div>
      </div>
      <div className='absolute h-[240px] w-[240px] bg-black'>
        <img
          src={`/${type}.jpg`}
          alt='menu item'
          height={240}
          width={240}
          className='h-full object-cover	opacity-25	mix-blend-luminosity	'
        />
      </div>
    </div>
  )
}

export default MyRecordCategory
