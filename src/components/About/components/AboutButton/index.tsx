import cam from './assets/cam.png'
import s from './style.module.scss'

interface Props {
    modalOpen: (type: string) => void
    type: string
}

export const AboutButton: React.FC<Props> = ({modalOpen, type}) => {
    const handleClick = () => {
        modalOpen(type)
    }

    return (
        <div className={s.root}>
            <div className={s.button} onClick={handleClick}>
                <img src={cam} alt='camera' />
            </div>
            <span onClick={handleClick}>Подробнее</span>
        </div>
    )
}