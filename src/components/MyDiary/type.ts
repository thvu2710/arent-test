import { DefaultPropsType } from '../../global/types'

export interface MyDiaryProps extends DefaultPropsType {
  id: number
  title: string
  content: string
  date: string
  time: string
}

export interface MyDiaryListProps extends DefaultPropsType {
  list: MyDiaryProps[]
  handleClickViewMore: () => void
}
