import { useState } from 'react'
import logo from '../../assets/images/logo.svg'
import note from '../../assets/images/note.svg'
import info from '../../assets/images/info.svg'
import challenger from '../../assets/images/challenger.svg'
import menu from '../../assets/images/menu.svg'
import close from '../../assets/images/icon_close.svg'
import './header.scss'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isOpen, setIsopen] = useState(false)

  const toggleMenu = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true)
  }
  return (
    <div className='flex items-center justify-center bg-titanBlack'>
      <div className='container  mx-auto flex w-full lg:max-w-[1024px]'>
        <nav className='flex w-full items-center justify-between'>
          <Link to={'/'}>
            <img src={logo} alt='logo' />
          </Link>

          <div className='flex gap-x-7'>
            <Link to={'/my-record'}>
              <div className='jps-text flex items-center text-normal font-light text-white'>
                <img src={note} alt='note' />
                自分の記録
              </div>
            </Link>

            <div className='jps-text flex items-center text-normal font-light text-white'>
              <img src={info} alt='info' />
              チャレンジ
            </div>

            <div className='jps-text flex items-center text-normal font-light text-white'>
              <img src={challenger} alt='challenger' />
              お知らせ
            </div>
            <div
              className='jps-text relative ml-[50px] flex items-center text-normal font-light text-white'
              onClick={toggleMenu}
            >
              <img src={isOpen ? close : menu} alt='draw menu' />

              <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
                <div className='sidebar-body'>
                  <ul>
                    <li className='sidebar-item'>
                      <Link to={'/'}>自分の記録</Link>
                    </li>
                    <li className='sidebar-item'>
                      <Link to={'/'}>体重グラフ</Link>
                    </li>
                    <li className='sidebar-item'>
                      <Link to={'/'}>目標</Link>
                    </li>
                    <li className='sidebar-item'>
                      <Link to={'/'}>選択中のコース</Link>
                    </li>
                    <li className='sidebar-item'>
                      <Link to={'/my-column'}>コラム一覧</Link>
                    </li>
                    <li className='sidebar-item'>
                      <Link to={'/'}>設定</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={toggleMenu}></div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
