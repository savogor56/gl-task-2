import s from './style.module.scss'
import ReactInputMask from 'react-input-mask'

export const Input = () => {
    return (
        <div className={s.root}>
            <ReactInputMask type="tel" mask="+7 999 999 99 99" placeholder="+7 ___ ___ __ __" />
        </div>
    )
}