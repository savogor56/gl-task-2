import {ReactComponent as Logo} from './assets/logo.svg'
import s from './style.module.scss'

export const Header = () => {
    return (
        <header className={s.root}>
            <div className={s.title}>
                <Logo/>
                <h1>Датчик спокойствия</h1>
            </div>
            <div className={s.content}>
                Комплекс из камеры <br/>
                и мобильного приложения,<br/>
                который помогает <br/>
                в любой момент <br/>
                убедиться, что с близкими <br/>
                и домом всё в порядке. <br/>
            </div>
        </header>
    )
}