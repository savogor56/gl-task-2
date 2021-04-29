import s from './style.module.scss'
import {Input} from './components/Input'

export const Feedback = () => {
    return (
        <div className={s.root}>
            <h2>Оставьте заявку, и мы позвоним вам в ближайшее время</h2>
            <Input />
            <div>
                Button
            </div>
        </div>
    )
}