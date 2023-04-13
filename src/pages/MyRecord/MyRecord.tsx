import { useEffect, useState } from 'react'
import BackToTop from 'components/BackToTop'
import useScroll from '../../hooks/useScroll'
import Header from 'components/Header'
import Footer from 'components/Footer'

export default function MyRecord() {
  const scroll = useScroll()
  const [isShowBackToTopBtn, setIsShowBackToTopBtn] = useState(false)

  useEffect(() => {
    if (scroll > 50) {
      setIsShowBackToTopBtn(true)
    } else {
      setIsShowBackToTopBtn(false)
    }
  }, [scroll])

  return (
    <>
      <Header />

      <Footer />

      <BackToTop isShow={isShowBackToTopBtn}></BackToTop>
    </>
  )
}
