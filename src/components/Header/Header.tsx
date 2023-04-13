import logo from '../../assets/images/logo.svg'
import note from '../../assets/images/note.svg'
import info from '../../assets/images/info.svg'
import challenger from '../../assets/images/challenger.svg'
import menu from '../../assets/images/menu.svg'
import './header.scss'

export default function Header() {
  return (
    <div className='flex items-center justify-center bg-titanBlack'>
      <div className='header container  mx-auto flex w-full px-2 lg:max-w-[960px]'>
        <nav className='flex w-full items-center justify-between'>
          <div>
            <img src={logo} alt='logo' />
          </div>

          <div className='flex gap-x-7'>
            <div className='jps-text flex items-center text-normal font-light text-white'>
              <img src={note} alt='note' />
              自分の記録
            </div>

            <div className='jps-text flex items-center text-normal font-light text-white'>
              <img src={info} alt='info' />
              チャレンジ
            </div>

            <div className='jps-text flex items-center text-normal font-light text-white'>
              <img src={challenger} alt='challenger' />
              お知らせ
            </div>
            <div className='jps-text ml-[50px] flex items-center text-normal font-light text-white'>
              <img src={menu} alt='menu' />
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
