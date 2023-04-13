import { DefaultPropsType } from '../../global/types'
import backtoTop from '../../assets/images/scroll-top.svg'

export interface BackToTopPropsType extends DefaultPropsType {
  isShow: boolean
}

const BackToTop: React.FC<BackToTopPropsType> = ({ ...props }) => {
  const { isShow } = props
  return (
    <div>
      {isShow && (
        <img
          style={props.style}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
          }}
          className='fixed top-[50%] right-[10%]'
          src={backtoTop}
          alt='top'
          width={48}
          height={48}
        />
      )}
    </div>
  )
}

export default BackToTop
