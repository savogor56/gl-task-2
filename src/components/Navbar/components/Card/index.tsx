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
                {type === 'card1' &&
                <div className={s.cam}>
                    <Cam />
                </div>}
                {type === 'card2' &&
                <div className={s.ras}>
                    <Ras />
                </div>}
                {type === 'card3' &&
                <div className={s.groupImg}>
                    <div className={s.hundred}>
                        <Hundred />
                    </div>
                    <div className={s.cam}>
                        <Cam />
                    </div>
                    <div className={s.wifi}>
                        <Wifi />
                    </div>
                </div>
                }
                {type === 'card4' &&
                    <>
                        <div className={s.btv}>
                            <Btv />
                        </div>
                        <div className={s.groupImg}>
                            <div className={s.hundred}>
                                <Hundred />
                            </div>
                            <div className={s.cam}>
                                <Cam />
                            </div>
                            <div className={s.wifi}>
                                <Wifi />
                            </div>
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