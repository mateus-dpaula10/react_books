import style from './App.module.scss'
import Logo from './components/Logo'
import Perfil from './assets/perfil.svg'
import Sacola from './assets/sacola.svg'

function App() {
  const textOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
  const icones = [Perfil, Sacola]

  return (
    <div className={style.app}>
      <header className={style.appHeader}>
        <Logo />
        <ul className={style.opcoes}>
          {textOpcoes.map((item) => (
            <li className={style.opcao}><p>{item}</p></li>
          ))}
        </ul>

        <ul className={style.icones}>
            {icones.map((icone) => (
              <li className={style.icone}><img src={icone} /></li>
            ))}
        </ul>
      </header>
    </div>
  )
}

export default App
