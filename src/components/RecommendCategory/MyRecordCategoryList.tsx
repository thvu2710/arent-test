import RecommendCategory from './RecommendCategory'
import { RecommendCategoryPropsType } from './type'

const RecommendCategoryList: any = ({ ...props }) => {
  const { list, selected } = props

  return (
    <div className='my-[56px] flex items-center justify-center'>
      <div className='flex justify-center gap-[32px]'>
        {list.map((item: RecommendCategoryPropsType) => (
          <RecommendCategory
            selected={selected}
            key={item.id}
            {...item}
            handleChange={props.handleChange}
          ></RecommendCategory>
        ))}
      </div>
    </div>
  )
}

export default RecommendCategoryList
