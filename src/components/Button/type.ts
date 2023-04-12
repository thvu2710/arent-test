import { DefaultPropsType } from '../../global/types'

export interface ButtonPropsType extends DefaultPropsType {
  handleClick?: () => void
  color: string
  text: string
  background?: string
  padding?: string
  minWidth?: number
  maxWidth?: number
}
