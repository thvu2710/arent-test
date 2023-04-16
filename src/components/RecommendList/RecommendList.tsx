import RecommendItem from './ReccommendItem'
import { RecommendItemProps } from './type'
import Button from 'components/Button'
import './recommend-list.scss'

const RecommendList: any = ({ ...props }) => {
  const { list, handleGetMoreList } = props

  const buttonProps = {
    handleClick: handleGetMoreList,
    text: '記録をもっと見る',
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
      <div className='flex justify-center'>
        <div>
          <div className='container grid gap-x-[8px] gap-y-[18px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {list.map((item: RecommendItemProps) => (
              <RecommendItem key={item.id} {...item}></RecommendItem>
            ))}
          </div>
        </div>
      </div>
      <div className='mt-[26px] mb-[64px] flex justify-center'>
        <Button {...buttonProps} />
      </div>
    </>
  )
}

export default RecommendList
