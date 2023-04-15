import MyDiary from './MyDiary'
import { MyDiaryProps, MyDiaryListProps } from './type'
import './my-diary.scss'

const MyDiaryList: React.FC<MyDiaryListProps> = ({ ...props }) => {
  const { list } = props

  return (
    <div className='container mx-auto mb-[24px] flex lg:max-w-[1024px]'>
      <div className=' flex-col justify-center'>
        <div className=' flex flex-col justify-center'>
          <div className='flex flex-wrap'>
            {list.map((item: MyDiaryProps) => (
              <MyDiary key={item.id} {...item}></MyDiary>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyDiaryList
