import MenuItem from './MenuItem'
import { MenuItemProps } from './type'
import './menu-list.scss'

const MenuList: any = ({ ...props }) => {
  const { list } = props
  return (
    <div className='flex  justify-center'>
      <div className='menu-item-wrapper container mt-[25px] mb-[25px] grid max-w-[960px] grid-cols-4 gap-[8px]'>
        {list.map((item: MenuItemProps) => (
          <MenuItem key={item.id} {...item}></MenuItem>
        ))}
      </div>
    </div>
  )
}

export default MenuList