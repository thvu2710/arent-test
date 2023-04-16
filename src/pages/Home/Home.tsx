import { useEffect, useState } from 'react'
import FilterButtonGroup from 'components/FilterButton'
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
      title: 'Morning',
      handleSelect: (title: string) => handleFilter(title)
    },
    {
      id: 2,
      icon: 'knift',
      title: 'Lunch',
      handleSelect: (title: string) => handleFilter(title)
    },
    {
      id: 3,

      icon: 'knift',
      title: 'Dinner',
      handleSelect: (title: string) => handleFilter(title)
    },
    {
      id: 4,
      icon: 'cup',
      title: 'Snack',
      handleSelect: (title: string) => handleFilter(title)
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

  const handleGetMoreList = () => {
    console.log('Select get more menu item')
  }

  const handleFilter = (item: string) => {
    console.log('Select: ', item)
  }

  return (
    <>
      <Header />

      <MainBanner />

      <FilterButtonGroup list={listFilterItem} />

      <MenuList list={menuItem} handleGetMoreList={handleGetMoreList} />

      <Footer />

      <BackToTop isShow={isShowBackToTopBtn}></BackToTop>
    </>
  )
}
