import './footer.scss'

export default function Footer() {
  return (
    <div className='flex items-center justify-center bg-titanBlack'>
      <div className='header container  mx-auto flex w-full px-2 lg:max-w-[960px]'>
        <div className='flex w-full gap-[45px] py-[56px] text-white'>
          <p>会員登録</p>
          <p>運営会社</p>
          <p>利用規約</p>
          <p>個人情報の取扱について</p>
          <p>特定商取引法に基づく表記</p>
          <p>お問い合わせ</p>
        </div>
      </div>
    </div>
  )
}
