/** Default Components Props Type */

export interface DefaultPropsType {
  style?: StyleType
  className?: ClassNameType
}
export interface ChildrenPropsType {
  children?: ChildrenType
}

export type ChildrenType = React.ReactNode
export type StyleType = React.CSSProperties
export type ClassNameType = string
