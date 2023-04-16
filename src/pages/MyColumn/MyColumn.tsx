import { useEffect, useState } from 'react'
import BackToTop from 'components/BackToTop'
import Header from 'components/Header'
import Footer from 'components/Footer'
import RecommendCategoryList from '../../components/RecommendCategory'
import useScroll from '../../hooks/useScroll'
import RecommendList from 'components/RecommendList'

export default function MyColumn() {
  const scroll = useScroll()
  const [isShowBackToTopBtn, setIsShowBackToTopBtn] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('')

  useEffect(() => {
    if (scroll > 50) {
      setIsShowBackToTopBtn(true)
    } else {
      setIsShowBackToTopBtn(false)
    }
  }, [scroll])

  const categoryList = [
    {
      id: 1,
      title: 'RECOMMENDED COLUMN',
      description: 'オススメ',
      type: 'column'
    },
    {
      id: 2,
      title: 'RECOMMENDED DIET',
      description: 'ダイエット',
      type: 'diet'
    },
    {
      id: 3,
      title: 'RECOMMENDED BEAUTY',
      description: '美容',
      type: 'beauty'
    },
    {
      id: 4,
      title: 'RECOMMENDED HEALTH',
      description: '健康',
      type: 'health'
    }
  ]

  const recommendList = [
    {
      id: 1,
      image: 'column-1.jpg',
      date: '2021.05.17   23:25',
      content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      type: 'DIET',
      tags: ['魚料理', '和食', 'DHA']
    },
    {
      id: 2,
      image: 'column-2.jpg',
      date: '2021.05.17   23:25',
      content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      type: 'HEALTH',
      tags: ['魚料理', '和食', 'DHA']
    },
    {
      id: 3,
      image: 'column-3.jpg',
      date: '2021.05.17   23:25',
      content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      type: 'HEALTH',
      tags: ['魚料理', '和食', 'DHA']
    },
    {
      id: 4,
      image: 'column-4.jpg',
      date: '2021.05.17   23:25',
      content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      type: 'DIET',
      tags: ['魚料理', '和食', 'DHA']
    },
    {
      id: 5,
      image: 'column-5.jpg',
      date: '2021.05.17   23:25',
      content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      type: 'BEAUTY',
      tags: ['魚料理', '和食', 'DHA']
    },
    {
      id: 6,
      image: 'column-6.jpg',
      date: '2021.05.17   23:25',
      content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      type: 'BEAUTY',
      tags: ['魚料理', '和食', 'DHA']
    },
    {
      id: 7,
      image: 'column-7.jpg',
      date: '2021.05.17   23:25',
      content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      type: 'DIET',
      tags: ['魚料理', '和食', 'DHA']
    },
    {
      id: 8,
      image: 'column-8.jpg',
      date: '2021.05.17   23:25',
      content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      type: 'COLUMN',
      tags: ['魚料理', '和食', 'DHA']
    }
  ]

  const handleChange = (category: string) => {
    setSelectedCategory(category)
    console.log('Select: ', category)
  }

  const handleGetMoreList = () => {
    console.log('Select get more recommended list')
  }

  return (
    <>
      <Header />

      <RecommendCategoryList
        list={categoryList}
        selected={selectedCategory}
        handleChange={handleChange}
      ></RecommendCategoryList>

      <RecommendList list={recommendList} handleGetMoreList={handleGetMoreList}></RecommendList>

      <Footer />

      <BackToTop isShow={isShowBackToTopBtn}></BackToTop>
    </>
  )
}
