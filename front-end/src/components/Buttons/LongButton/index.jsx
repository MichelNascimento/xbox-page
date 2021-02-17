import './styles.css'

const LongButton = (props) => {
  return (
    <button type={props.type} onClick={props.onClick}>{props.text}</button>
  )
}

export default LongButton