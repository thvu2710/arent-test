import MyRecordCategory from './MyRecordCategory'
import { MyRecordCategoryPropsType } from './type'

const MyRecordCategoryList: any = ({ ...props }) => {
  const { list, selected } = props

  return (
    <div className='mt-[56px] mb-[56px] flex items-center justify-center gap-[84px]'>
      {list.map((item: MyRecordCategoryPropsType) => (
        <MyRecordCategory
          selected={selected}
          key={item.id}
          {...item}
          handleChange={props.handleChange}
        ></MyRecordCategory>
      ))}
    </div>
  )
}

export default MyRecordCategoryList
