import { DefaultPropsType } from '../../global/types'

export interface RecommendCategoryPropsType extends DefaultPropsType {
  id: number
  title: string
  description: string
  type: string
  selected?: string
  handleChange: (type: string) => void
}
