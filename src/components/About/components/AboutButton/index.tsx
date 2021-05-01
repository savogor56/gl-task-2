import cam from './assets/cam.png'
import s from './style.module.scss'

export const AboutButton = () => {
    return (
        <div className={s.root}>
            <div className={s.button}>
                    <img src={cam} alt='camera' />
            </div>
            <span>Подробнее</span>
        </div>
    )
}