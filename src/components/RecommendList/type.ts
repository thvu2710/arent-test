import { DefaultPropsType } from '../../global/types'

export interface RecommendItemProps extends DefaultPropsType {
  id?: number
  date?: string
  image?: string
  content?: string
  tags?: string[]
  type?: string
}
