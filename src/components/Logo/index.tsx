import style from './Logo.module.scss'
import logoImg from '../../assets/logo.svg'

export default function Logo() {
    return (
        <div className={style.logo}>
            <img 
                src={logoImg} 
                alt="logo"
                className={style.logoImg}
            />
            <p><strong>Alura</strong> Books</p>
        </div>
    )
}
