import './styles.css'

const ShortInput = (props) => {
  return (
    <input className="short-input" type={props.type} placeholder={props.placeholder}/>
  )
}

export default ShortInput