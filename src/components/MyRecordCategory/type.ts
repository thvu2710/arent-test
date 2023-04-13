import { DefaultPropsType } from '../../global/types'

export interface MyRecordCategoryPropsType extends DefaultPropsType {
  id: number
  title: string
  description: string
  type: string
  selected?: string
  handleChange: (type: string) => void
}
