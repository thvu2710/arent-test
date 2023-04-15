import { MenuItemProps } from './type'
import './menu-list.scss'

const MenuItem: React.FC<MenuItemProps> = ({ ...props }) => {
  const { title, image, date } = props
  return (
    <div className='menu-item-wrapper relative'>
      <div className='absolute left-0 bottom-0	 bg-yellow px-[10px] py-[7px] text-[15px] font-normal leading-defaultTextLH text-white'>{`${date}.${title}`}</div>
      <img className='object-cover' src={`/${image}`} alt='menu item' width={234} height={234} />
    </div>
  )
}

export default MenuItem
