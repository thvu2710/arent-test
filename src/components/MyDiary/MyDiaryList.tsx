import Button from 'components/Button'
import MyDiary from './MyDiary'
import { MyDiaryProps, MyDiaryListProps } from './type'
import './my-diary.scss'

const MyDiaryList: React.FC<MyDiaryListProps> = ({ ...props }) => {
  const { list, handleClickViewMore } = props
  const buttonProps = {
    handleClick: handleClickViewMore,
    text: '自分の日記をもっと見る',
    style: {
      background: 'linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)',
      color: '#fff',
      padding: '15px 0',
      minWidth: 296,
      maxWidth: 296
    }
  }
  return (
    <>
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

      <div className='mb-[64px] flex justify-center'>
        <Button {...buttonProps} />
      </div>
    </>
  )
}

export default MyDiaryList
