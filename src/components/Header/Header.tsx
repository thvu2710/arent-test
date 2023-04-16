import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import note from '../../assets/images/note.svg'
import info from '../../assets/images/info.svg'
import challenger from '../../assets/images/challenger.svg'
import menu from '../../assets/images/menu.svg'
import close from '../../assets/images/icon_close.svg'
import './header.scss'

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

            <Link to={'/'}>
              <div className='jps-text flex items-center text-normal font-light text-white'>
                <img src={info} alt='info' />
                チャレンジ
              </div>
            </Link>

            <Link to={'/'}>
              <div className='jps-text flex items-center text-normal font-light text-white'>
                <img src={challenger} alt='challenger' />
                お知らせ
              </div>
            </Link>
            <div
              className='jps-text relative ml-[50px] flex cursor-pointer items-center text-normal font-light text-white'
              onClick={toggleMenu}
            >
              <img src={isOpen ? close : menu} alt='draw menu' />

              <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
                <div className='sidebar-body'>
                  <ul>
                    <Link to={''}>
                      <li className='jps-text sidebar-item'>自分の記録</li>
                    </Link>

                    <Link to={''}>
                      <li className='jps-text sidebar-item'>体重グラフ</li>
                    </Link>

                    <Link to={''}>
                      <li className='jps-text sidebar-item'>目標</li>
                    </Link>

                    <Link to={''}>
                      <li className='jps-text sidebar-item'>選択中のコース</li>
                    </Link>

                    <Link to={'/my-column'}>
                      <li className='jps-text sidebar-item'>コラム一覧</li>
                    </Link>

                    <Link to={''}>
                      <li className='jps-text sidebar-item'>設定</li>
                    </Link>
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
