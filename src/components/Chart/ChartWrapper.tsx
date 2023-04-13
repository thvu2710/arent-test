import { ChartPropsType } from './type'
import Chart from 'react-apexcharts'

const ChartWrapper: React.FC<ChartPropsType> = ({ ...props }) => {
  const { series, options, type = 'line', style } = props
  return (
    <div>
      <Chart options={options} series={series} type={type} width={style?.width} height={style?.height} />
    </div>
  )
}

export default ChartWrapper
