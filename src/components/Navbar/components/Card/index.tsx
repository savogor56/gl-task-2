import {ReactComponent as Cam} from './assets/cam.svg'
import {ReactComponent as Ras} from './assets/ras.svg'
import {ReactComponent as Hundred} from './assets/100.svg'
import {ReactComponent as Btv} from './assets/btv.svg'
import {ReactComponent as Wifi} from './assets/wifi.svg'

import s from './style.module.scss'

interface Props {
    type: string,
    title: string,
    text: string
}

export const Card: React.FC<Props> = ({type, title, text}) => {
    return (
        <div className={s.root}>
            <div className={s.cardImg}>
                {type === 'card1' && <Cam />}
                {type === 'card2' && <Ras />}
                {type === 'card3' &&
                <div className={s.groupImg}>
                    <Hundred />
                    <Cam />
                    <Wifi />
                </div>
                }
                {type === 'card4' &&
                    <>
                        <Btv />
                        <div className={s.groupImg}>
                            <Hundred />
                            <Cam />
                            <Wifi />
                        </div>
                    </>
                }
            </div>
            <div className={s.content}>
                <p>{title}</p>
                {text && <p>{text}</p>}
            </div>
        </div>
    )
}