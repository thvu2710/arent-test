import ChartWrapper from '../Chart/ChartWrapper'
import CircleProgress from '../CircleProgress/CircleProgress'
import './main-banner.scss'

export default function MainBanner() {
  const dataChart = {
    options: {
      colors: ['#8FE9D0', '#FFCC21'],
      dataLabels: {
        enabled: false
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
        data: [90, 80, 65, 60, 50, 48, 40, 38, 35, 30, 20, 10]
      },
      {
        data: [90, 83, 68, 65, 55, 60, 55, 53, 50, 45, 40, 30]
      }
    ]
  }
  return (
    <div className='flex flex-row justify-center bg-[#2E2E2E]'>
      <div className='left-banner w-[45%]'>
        <CircleProgress percentage={75} date='05/21'></CircleProgress>
      </div>
      <div className='w-[55%]'>
        <ChartWrapper {...dataChart} />
      </div>
    </div>
  )
}
