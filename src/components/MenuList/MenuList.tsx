import MenuItem from './MenuItem'
import { MenuItemProps } from './type'
import Button from 'components/Button'
import './menu-list.scss'

const MenuList: any = ({ ...props }) => {
  const { list, handleGetMoreList } = props
  const buttonProps = {
    handleClick: handleGetMoreList,
    text: '記録をもっと見る',
    style: {
      background: 'linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)',
      color: '#fff',
      padding: '15px 0',
      minWidth: 296,
      maxWidth: 296
    }
  }
  return (
    <>
      <div className='flex justify-center'>
        <div className='container grid gap-[8px] sm:grid-cols-2 md:grid-cols-3 lg:max-w-[960px] lg:grid-cols-4'>
          {list.map((item: MenuItemProps) => (
            <MenuItem key={item.id} {...item}></MenuItem>
          ))}
        </div>
      </div>
      <div className='mt-[26px] mb-[64px] flex justify-center'>
        <Button {...buttonProps} />
      </div>
    </>
  )
}

export default MenuList
