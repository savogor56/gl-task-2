import s from './style.module.scss'
import {AboutButton} from './components/AboutButton'
import {useState} from 'react'
import {AboutModal} from './components/AboutModal'
import {AboutInfo} from './components/AboutInfo'

export const About = () => {
    const [open, setOpen] = useState(false)
    const [modalType, setModalType] = useState('')

    const handleModalOpen = (type: string) => {
        setOpen(true)
        setModalType(type)
    }

    const handleModalClose = () => {
        setOpen(false)
    }

    return (
        <div className={s.root}>
            <AboutButton type="about1" modalOpen={handleModalOpen} />
            <AboutButton type="about2" modalOpen={handleModalOpen} />
            <AboutModal open={open} onClose={handleModalClose}>
                <AboutInfo onClose={handleModalClose} type={modalType} />
            </AboutModal>
        </div>
    )
}