import {ReactComponent as Close} from './assets/close.svg'
import {ReactComponent as Wifi} from './assets/ic-wifi.svg'
import {ReactComponent as Resolution} from './assets/ic-resolution.svg'
import {ReactComponent as Night} from './assets/ic-night.svg'
import {ReactComponent as Record} from './assets/ic-record.svg'
import {ReactComponent as Angle} from './assets/ic-angle.svg'
import {ReactComponent as Cable} from './assets/ic-cable.svg'
import {ReactComponent as Move} from './assets/ic-move.svg'
import {ReactComponent as Server} from './assets/ic-server.svg'
import {ReactComponent as Access} from './assets/ic-acces.svg'
import {ReactComponent as Archive} from './assets/ic-archive.svg'
import {ReactComponent as Geo} from './assets/ic-geo.svg'
import {ReactComponent as Notifications} from './assets/ic-notifications.svg'
import cam from './assets/cam.png'
import smart from './assets/smart.png'

import s from './style.module.scss'
import cn from 'classnames'

interface Props {
    type: string,
    onClose: () => void
}

const content = {
    about1: [
        {
            title: 'Работает по Wi-Fi или кабелю',
            Icon: Wifi
        },
        {
            title: 'Разрешение 1280х960 (HD)',
            Icon: Resolution
        },
        {
            title: 'Ночная съемка',
            Icon: Night
        },
        {
            title: 'Запись звука и видео',
            Icon: Record
        },
        {
            title: 'Угол обзора 100°',
            Icon: Angle
        },
        {
            title: 'Длина кабеля 1.5 метра',
            Icon: Cable
        }
    ],
    about2: [
        {
            title: 'Уведомление на телефон о движении',
            Icon: Move
        },
        {
            title: 'Хранение данных на защищенных серверах',
            Icon: Server
        },
        {
            title: 'Совместный доступ у членов семьи',
            Icon: Access
        },
        {
            title: 'Скачивание/удаление архивных записей',
            Icon: Archive
        },
        {
            title: 'Доступ из любой точки мира',
            Icon: Geo
        },
        {
            title: 'Уведомление о приходе «Домашних»',
            Icon: Notifications
        }
    ]
}

export const AboutInfo: React.FC<Props> = ({type, onClose}) => {
    const cards = type === 'about1' ? content.about1 : content.about2

    const handleClick = () => {
        onClose()
    }

    return (
        <div className={cn(s.root, s[type])}>
            <div className={cn(s.substrate, s[type])}>
                <div onClick={handleClick} className={s.close}>
                    <Close />
                </div>
                <img src={type === 'about1' ? cam : smart} alt=""/>
            </div>
            <div className={s.content}>
                {
                   cards.map(({Icon, title}) => (
                        <div className={s.card}>
                            <div className={s.icon}>
                                <Icon />
                            </div>
                            <h2>{title}</h2>
                        </div>
                    ))
                }
                <div className={s.close}>
                    <div className={s.icon} onClick={handleClick}>
                        <Close />
                    </div>
                </div>
            </div>
        </div>
    )
}