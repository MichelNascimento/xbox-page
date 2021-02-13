import LongButton from '../../components/Buttons/LongButton'
import LongInput from '../../components/Inputs/LongInput'
import ShortInput from '../../components/Inputs/ShortInput'

import './styles.css'

const UserRegister = () => {
  return (
    <>
      <div className="wrapper">
        <div className="register-container">
          <span>Faça seu cadastro</span>
          <LongInput type="text" placeholder="E-mail" />
          <ShortInput type="password" placeholder="Senha"/>
          <ShortInput type="password" placeholder="Confirmar senha"/>
          <LongInput type="text" placeholder="Nome" />
          <LongButton type="submit" text="Cadastrar" onClick={() => alert('clicou no botão de cadastro! :D')}/>
        </div>
      </div>
    </>
  )
}

export default UserRegister