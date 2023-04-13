import { useEffect, useState } from 'react'
import Button from 'components/Button'
import FilterButtonGroup from '../../components/FilterButton'
import Footer from 'components/Footer'
import Header from 'components/Header'
import MainBanner from 'components/MainBanner'
import MenuList from 'components/MenuList/MenuList'
import BackToTop from 'components/BackToTop'
import useScroll from '../../hooks/useScroll'

export default function Home() {
  const scroll = useScroll()
  const [isShowBackToTopBtn, setIsShowBackToTopBtn] = useState(false)

  useEffect(() => {
    if (scroll > 50) {
      setIsShowBackToTopBtn(true)
    } else {
      setIsShowBackToTopBtn(false)
    }
  }, [scroll])

  const listFilterItem = [
    {
      id: 1,
      icon: 'knift',
      title: 'Morning'
    },
    {
      id: 2,
      icon: 'knift',
      title: 'Lunch'
    },
    {
      id: 3,

      icon: 'knift',
      title: 'Dinner'
    },
    {
      id: 4,
      icon: 'cup',
      title: 'Snack'
    }
  ]

  const menuItem = [
    {
      id: 1,
      image: 'morning.png',
      date: '05.21',
      title: 'Morning',
      type: 'Morning'
    },
    {
      id: 2,
      image: 'lunch1.png',
      date: '05.21',
      title: 'Lunch',
      type: 'Lunch'
    },
    {
      id: 3,
      image: 'dinner1.png',
      date: '05.21',
      title: 'Dinner',
      type: 'Dinner'
    },
    {
      id: 4,
      image: 'snack1.png',
      date: '05.21',
      title: 'Snack',
      type: 'Snack'
    },
    {
      id: 5,
      image: 'morning.png',
      date: '05.20',
      title: 'Morning',
      type: 'Morning'
    },
    {
      id: 6,
      image: 'lunch2.png',
      date: '05.20',
      title: 'Lunch',
      type: 'Lunch'
    },
    {
      id: 7,
      image: 'dinner2.png',
      date: '05.20',
      title: 'Dinner',
      type: 'Dinner'
    },
    {
      id: 8,
      image: 'snack2.png',
      date: '05.21',
      title: 'Snack',
      type: 'Snack'
    }
  ]
  const handleClick = () => {}
  const buttonProps = {
    handleClick: handleClick,
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
      <Header />
      <MainBanner />
      <FilterButtonGroup list={listFilterItem} />
      <MenuList list={menuItem} />

      <div className='mb-[64px] flex justify-center'>
        <Button {...buttonProps} />
      </div>

      <Footer />
      <BackToTop isShow={isShowBackToTopBtn}></BackToTop>
    </>
  )
}
