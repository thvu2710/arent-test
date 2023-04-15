import { useEffect, useState, useRef } from 'react'
import BackToTop from 'components/BackToTop'
import useScroll from '../../hooks/useScroll'
import Header from 'components/Header'
import Footer from 'components/Footer'
import MyRecordCategoryList from '../../components/MyRecordCategory'
import ChartWrapper from 'components/Chart'
import MyExerciseList from 'components/MyExercise/MyExerciseList'
import MyDiaryList from 'components/MyDiary/MyDiaryList'
import Button from 'components/Button'

export default function MyRecord() {
  const bodyRecordRef = useRef<HTMLInputElement>(null)
  const exerciseRef = useRef<HTMLInputElement>(null)
  const diaryRef = useRef<HTMLInputElement>(null)

  const scroll = useScroll()
  const [isShowBackToTopBtn, setIsShowBackToTopBtn] = useState(false)

  const [selectedCategory, setSelectedCategory] = useState('')

  useEffect(() => {
    if (selectedCategory) {
      let moveRef = null

      switch (selectedCategory) {
        case 'record':
          moveRef = bodyRecordRef
          break
        case 'exercise':
          moveRef = exerciseRef
          break
        case 'diary':
          moveRef = diaryRef
          break
      }

      moveRef?.current?.scrollIntoView()
    }
  }, [selectedCategory])

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

  const exerciseData = {
    title: 'MY EXERCISE',
    time: '2021.05.21',
    list: [
      {
        id: 1,
        title: '家事全般（立位・軽い）',
        kcal: 26,
        time: 10
      },
      {
        id: 2,
        title: '家事全般（立位・軽い）',
        kcal: 26,
        time: 10
      },
      {
        id: 3,
        title: '家事全般（立位・軽い）',
        kcal: 26,
        time: 10
      },
      {
        id: 4,
        title: '家事全般（立位・軽い）',
        kcal: 26,
        time: 10
      },
      {
        id: 5,
        title: '家事全般（立位・軽い）',
        kcal: 26,
        time: 10
      },
      {
        id: 6,
        title: '家事全般（立位・軽い）',
        kcal: 26,
        time: 10
      },
      {
        id: 7,
        title: '家事全般（立位・軽い）',
        kcal: 26,
        time: 10
      },
      {
        id: 8,
        title: '家事全般（立位・軽い）',
        kcal: 26,
        time: 10
      },
      {
        id: 9,
        title: '家事全般（立位・軽い）',
        kcal: 26,
        time: 10
      },
      {
        id: 10,
        title: '家事全般（立位・軽い）',
        kcal: 26,
        time: 10
      },
      {
        id: 11,
        title: '家事全般（立位・軽い）',
        kcal: 26,
        time: 10
      },
      {
        id: 12,
        title: '家事全般（立位・軽い）',
        kcal: 26,
        time: 10
      }
    ]
  }

  const diaryData = [
    {
      id: 1,
      title: '私の日記の記録が一部表示されます。',
      content:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      date: '2021.05.21',
      time: '23:25'
    },
    {
      id: 2,
      title: '私の日記の記録が一部表示されます。',
      content:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      date: '2021.05.21',
      time: '23:25'
    },
    {
      id: 3,
      title: '私の日記の記録が一部表示されます。',
      content:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      date: '2021.05.21',
      time: '23:25'
    },
    {
      id: 4,
      title: '私の日記の記録が一部表示されます。',
      content:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      date: '2021.05.21',
      time: '23:25'
    },
    {
      id: 5,
      title: '私の日記の記録が一部表示されます。',
      content:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      date: '2021.05.21',
      time: '23:25'
    },
    {
      id: 6,
      title: '私の日記の記録が一部表示されます。',
      content:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      date: '2021.05.21',
      time: '23:25'
    },
    {
      id: 7,
      title: '私の日記の記録が一部表示されます。',
      content:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      date: '2021.05.21',
      time: '23:25'
    },
    {
      id: 8,
      title: '私の日記の記録が一部表示されます。',
      content:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      date: '2021.05.21',
      time: '23:25'
    }
  ]

  const handleChange = (category: string) => {
    setSelectedCategory(category)
  }
  const handleClickViewMore = () => {}

  const buttonProps = {
    handleClick: handleClickViewMore,
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

      <div>
        <MyRecordCategoryList
          list={categoryList}
          selected={selectedCategory}
          handleChange={handleChange}
        ></MyRecordCategoryList>
      </div>

      <div className='flex justify-center' ref={bodyRecordRef}>
        <ChartWrapper {...dataChart} style={{ width: 1024, height: 304 }} />
      </div>

      <div ref={exerciseRef}>
        <MyExerciseList {...exerciseData}></MyExerciseList>
      </div>

      <div ref={diaryRef}>
        <MyDiaryList list={diaryData}></MyDiaryList>
      </div>

      <div className='mb-[64px] flex justify-center'>
        <Button {...buttonProps} />
      </div>

      <Footer />

      <BackToTop isShow={isShowBackToTopBtn}></BackToTop>
    </>
  )
}
