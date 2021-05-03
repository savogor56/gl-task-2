import s from './style.module.scss'
import cn from 'classnames'

interface Props {
    open: boolean
    onClose: () => void
}

export const AboutModal: React.FC<Props> = ({open, onClose, children}) => {
    const handleClose = () => {
        onClose()
    }

    return (
        <div className={cn(s.root, {
            [s.active]: open
        })} onClick={handleClose}>
            <div className={cn(s.modal, {
                [s.active]: open
            })} onClick={(event => event.stopPropagation())}>
                {children}
            </div>
        </div>
    )
}