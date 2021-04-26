import cam from './assets/cam.png'
import s from './style.module.scss'

export const AboutButton = () => {
    return (
        <div className={s.root}>
            <div className={s.btnWrap}>
                <div className={s.shadow}>
                    <img src={cam} alt='camera' />
                </div>
            </div>
            <span>Подробнее</span>
        </div>
    )
}