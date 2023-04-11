import { DefaultPropsType } from '../../global/types'

import './circle-progress.scss'

export interface CircleProgressPropsType extends DefaultPropsType {
  percentage: number
  date: string
}

const CircleProgress: React.FC<CircleProgressPropsType> = ({ ...props }) => {
  const { percentage, date } = props
  return (
    <div className={`circle percentage-${percentage}`}>
      <div className='data'>
        <div className='date'>{date}</div>
        {percentage}%
      </div>
      <div className='percentage-bar'></div>
    </div>
  )
}

export default CircleProgress
