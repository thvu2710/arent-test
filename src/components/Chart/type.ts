import { DefaultPropsType } from '../../global/types'
import { ApexOptions } from 'apexcharts'

export interface ChartPropsType extends DefaultPropsType {
  type?:
    | 'line'
    | 'area'
    | 'bar'
    | 'histogram'
    | 'pie'
    | 'donut'
    | 'radialBar'
    | 'scatter'
    | 'bubble'
    | 'heatmap'
    | 'treemap'
    | 'boxPlot'
    | 'candlestick'
    | 'radar'
    | 'polarArea'
    | 'rangeBar'
  options: ApexOptions
  series: ApexOptions['series']
}
