import MyExercise from './MyExercise'
import { MyExerciseProps, MyExerciseListProps } from './type'
import './my-exercise.scss'

const MyExerciseList: React.FC<MyExerciseListProps> = ({ ...props }) => {
  const { title, time, list } = props

  return (
    <div className='container mx-auto mb-[56px] flex bg-titanBlack px-[24px] py-[16px] lg:max-w-[1024px]'>
      <div className='flex justify-center  '>
        <div className=' flex flex-col justify-center'>
          <div className='flex'>
            <div className='max-w-[70px] text-[15px] text-white'>{title}</div>
            <div className='text-[22px] text-white'>{time}</div>
          </div>
          <ul className='scroll-custom flex max-h-[192px] list-disc flex-wrap gap-y-[5px] overflow-auto text-white	'>
            {list.map((item: MyExerciseProps) => (
              <MyExercise key={item.id} {...item}></MyExercise>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MyExerciseList
