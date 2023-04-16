import { DefaultPropsType } from '../../global/types'

export interface FilterButtonProps extends DefaultPropsType {
  id: number
  icon: string
  title: string
  handleSelect: (title: string) => void
}

export interface FilterButtonGroupProps extends DefaultPropsType {
  list: FilterButtonProps[]
}
