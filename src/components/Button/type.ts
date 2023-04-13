import { DefaultPropsType } from '../../global/types'

export interface ButtonPropsType extends DefaultPropsType {
  text: string
  handleClick?: () => void
}
