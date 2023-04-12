import { ChartPropsType } from './type'
import Chart from 'react-apexcharts'

const ChartWrapper: React.FC<ChartPropsType> = ({ ...props }) => {
  const { series, options } = props
  return (
    <div>
      <Chart options={options} series={series} type='line' width={'100%'} height={350} />
    </div>
  )
}

export default ChartWrapper
