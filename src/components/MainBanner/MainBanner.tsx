import CircleProgress from '../CircleProgress/CircleProgress'
import './main-banner.scss'

export default function MainBanner() {
  return (
    <div className='container mx-auto flex flex-row justify-center'>
      <div className='left-banner' style={{ width: '75%' }}>
        <CircleProgress percentage={75} date='05/21'></CircleProgress>
      </div>
      <div style={{ width: '60%' }}></div>
    </div>
  )
}
