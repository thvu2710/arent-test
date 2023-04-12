import { DefaultPropsType } from '../../global/types'

export interface MenuItemProps extends DefaultPropsType {
  id?: number
  date?: string
  image?: string
  title?: string
  type?: string
}
