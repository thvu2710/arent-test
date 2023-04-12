import { DefaultPropsType } from '../../global/types'
import { ApexOptions } from 'apexcharts'

export interface ChartPropsType extends DefaultPropsType {
  type?: string
  options: ApexOptions
  series: ApexOptions['series']
}
