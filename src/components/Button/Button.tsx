import { ButtonPropsType } from './type'

const ButtonWrapper: React.FC<ButtonPropsType> = ({ ...props }) => {
  const { text, handleClick } = props
  return (
    <button className='flex items-center justify-center' style={props} onClick={handleClick}>
      {text}
    </button>
  )
}

export default ButtonWrapper
