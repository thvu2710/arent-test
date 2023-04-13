import MenuItem from './MenuItem'
import { MenuItemProps } from './type'
import './menu-list.scss'

const MenuList: any = ({ ...props }) => {
  const { list } = props
  return (
    <div className='flex justify-center'>
      <div className='container mt-[25px] mb-[25px] grid gap-[8px] sm:grid-cols-2 md:grid-cols-3 lg:max-w-[960px] lg:grid-cols-4'>
        {list.map((item: MenuItemProps) => (
          <MenuItem key={item.id} {...item}></MenuItem>
        ))}
      </div>
    </div>
  )
}

export default MenuList
