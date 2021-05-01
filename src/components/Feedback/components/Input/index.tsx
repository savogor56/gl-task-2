import {useRef, useState} from 'react'
import cn from 'classnames'

import ReactInputMask from 'react-input-mask'

import s from './style.module.scss'

interface Props {
    isValid: boolean,
    isTouched?: boolean
}


export const Input: React.FC<Props> = ({isValid, isTouched, ...rest}) => {
    const [focused, setFocused] = useState(false)
    const input = useRef<HTMLInputElement | null>(null)

    const isComplete = isValid
        && !focused
        && isTouched
        && !input.current?.value?.includes('_')
        && input.current?.value?.length === 16

    const handleFocus = () => setFocused(true)
    const handleBlur = () => setFocused(false)

    const handleClick = () => {
        input.current?.focus()
    }

    return (
        <div onClick={handleClick} className={cn(s.root, {
            [s.active]: focused,
            [s.complete]: isComplete,
            [s.error]: !isValid
        })}>
            <ReactInputMask
                {...rest}
                onFocus={handleFocus}
                onBlur={handleBlur}
                type="tel"
                mask="+7 999 999 99 99"
                placeholder="+7 ___ ___ __ __"
            >
                {({...inputProps}) => (
                    <input
                        className={s.input}
                        {...inputProps}
                        ref={input}
                    />
                )
                }
            </ReactInputMask>
        </div>
    )
}