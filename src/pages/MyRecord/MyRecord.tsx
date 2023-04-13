import { useEffect, useState } from 'react'
import BackToTop from 'components/BackToTop'
import useScroll from '../../hooks/useScroll'
import Header from 'components/Header'
import Footer from 'components/Footer'
import MyRecordCategoryList from '../../components/MyRecordCategory'
import ChartWrapper from 'components/Chart'

export default function MyRecord() {
  const scroll = useScroll()
  const [isShowBackToTopBtn, setIsShowBackToTopBtn] = useState(false)

  const [selectedCategory, setSelectedCategory] = useState('record')

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
      title: 'BODY RECORD',
      description: '自分のカラダの記録',
      type: 'record'
    },
    {
      id: 2,
      title: 'MY EXERCISE',
      description: '自分の運動の記録',
      type: 'exercise'
    },
    {
      id: 3,
      title: 'MY DIARY',
      description: '自分の日記',
      type: 'diary'
    }
  ]

  const dataChart = {
    options: {
      colors: ['#8FE9D0', '#FFCC21'],
      dataLabels: {
        enabled: false
      },
      title: {
        text: 'BODY RECORD 2021.05.21',
        style: {
          fontSize: '15px',
          fontWeight: 400,
          color: '#fff',
          lineHeight: '30px',
          fontFamily: 'Inter, sans-serif'
        }
      },
      chart: {
        id: 'apexchart-example',
        background: '#2E2E2E',
        toolbar: {
          show: false
        }
      },
      xaxis: {
        categories: ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'],
        labels: {
          style: {
            colors: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff']
          }
        }
      },
      yaxis: {
        labels: {
          show: false,
          style: {
            colors: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff']
          }
        }
      },
      legend: {
        show: false
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        }
      },
      markers: {
        size: 3,
        colors: '#fff'
      }
    },
    series: [
      {
        data: [90, 80, 65, 60, 50, 48, 50, 38, 35, 30, 30, 20]
      },
      {
        data: [90, 83, 50, 65, 55, 60, 70, 53, 50, 45, 40, 30]
      }
    ],
    annotations: {
      position: 'front'
    }
  }

  const handleChange = (category: string) => {
    setSelectedCategory(category)
    debugger
  }

  return (
    <>
      <Header />

      <MyRecordCategoryList
        list={categoryList}
        selected={selectedCategory}
        handleChange={handleChange}
      ></MyRecordCategoryList>

      {selectedCategory === 'record' && (
        <div className='flex justify-center'>
          <ChartWrapper {...dataChart} style={{ width: 1024, height: 304 }} />
        </div>
      )}

      <Footer />

      <BackToTop isShow={isShowBackToTopBtn}></BackToTop>
    </>
  )
}
