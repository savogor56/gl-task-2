import s from './style.module.scss'
import {AboutButton} from './components/AboutButton'

export const About = () => {
    return (
        <div className={s.root}>
            <AboutButton />
            <AboutButton />
        </div>
    )
}