import { Link } from 'react-router-dom'
import './footer.scss'

export default function Footer() {
  return (
    <div className='flex items-center justify-center bg-titanBlack'>
      <div className='container  mx-auto flex w-full lg:max-w-[1024px]'>
        <div className='flex w-full gap-[45px] py-[56px] text-white'>
          <Link to={'#'}>
            <p>会員登録</p>
          </Link>
          <Link to={'#'}>
            <p>運営会社</p>
          </Link>
          <Link to={'#'}>
            <p>利用規約</p>
          </Link>
          <Link to={'#'}>
            <p>個人情報の取扱について</p>
          </Link>
          <Link to={'#'}>
            <p>特定商取引法に基づく表記</p>
          </Link>
          <Link to={'#'}>
            <p>お問い合わせ</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
