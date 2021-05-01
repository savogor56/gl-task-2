import {ReactComponent as Send} from './assets/send.svg'
import s from './style.module.scss'

interface Props {
    isDisable: boolean
}

export const Button: React.FC<Props> = ({isDisable}) => {
    return (
        <button type="submit" className={s.root} disabled={isDisable}>
            Отправить заявку <Send />
        </button>
    )
}