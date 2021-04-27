import s from './style.module.scss'

export const Feedback = () => {
    return (
        <div className={s.root}>
            <h2>Оставьте заявку, и мы позвоним вам в ближайшее время</h2>
            <div>
                <input type="text"/>
            </div>
            <div>
                Button
            </div>
        </div>
    )
}