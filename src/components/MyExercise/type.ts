import { DefaultPropsType } from '../../global/types'

export interface MyExerciseProps extends DefaultPropsType {
  id: number
  title: string
  kcal: number
  time: number
}

export interface MyExerciseListProps extends DefaultPropsType {
  list: MyExerciseProps[]
  title: string
  time: string
}
