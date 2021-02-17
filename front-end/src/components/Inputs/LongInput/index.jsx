import './styles.css'

const LongInput = (props) => {
  return (
    <input className="long-input" type={props.type} placeholder={props.placeholder}/>
  )
}

export default LongInput