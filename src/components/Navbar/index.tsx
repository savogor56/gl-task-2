import {Card} from './components/Card'
import s from './style.module.scss'

const links = [
    {
        type: 'card1',
        title: 'Покупка',
        text: ''
    },
    {
        type: 'card2',
        title: 'Рассрочка',
        text: ''
    },
    {
        type: 'card3',
        title: 'Пакет ',
        text: '"Всё под контролем"'
    },
    {
        type: 'card4',
        title: 'Пакет',
        text: '"Тысяча пятьсот"'
    },

]

export const Navbar = () => {
    return (
        <div className={s.root}>
            <h1>Приобрести</h1>
            <div className={s.cards}>
                {
                    links.map(({type, title, text}, i) => (
                        <Card key={i} type={type} title={title} text={text} />
                    ))
                }
            </div>
        </div>
    )
}