import './ShortInputStyles.css'

const ShortInput = (props) => {
  return (
    <input type={props.type} placeholder={props.placeholder}/>
  )
}

export default ShortInput