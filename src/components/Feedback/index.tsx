import cn from 'classnames'

import {Input} from './components/Input'
import {Button} from './components/Button'
import {useForm} from 'react-hook-form'

import s from './style.module.scss'

interface FormValues {
    phone: string
}

export const Feedback = () => {
    const {register, handleSubmit, formState: {errors, touchedFields, isSubmitSuccessful}} = useForm<FormValues>()
    const phoneIsTouched = touchedFields.phone

    const onSubmit = ({phone}: FormValues) => {
        fetch(`https://myjson.com/?${phone.replace(/\D/g, '')}`)
    }
    return (
        <div className={s.root}>
            <form onSubmit={handleSubmit(onSubmit)} className={cn(s.content, s.submitted )}>
                { isSubmitSuccessful &&
                    <>
                        <h2>Оставьте заявку, и мы позвоним вам в ближайшее время</h2>
                        <Input
                            isTouched={!!phoneIsTouched}
                            isValid={!errors.phone}
                            {...register('phone', {
                                required: true,
                                pattern: /^(\+7)\s\d{3}\s\d{3}\s\d{2}\s\d{2}/
                            })}
                        />
                    </>
                }
                {!isSubmitSuccessful &&
                    <h2>Спасибо, что оставили заявку. <br/>
                        Мы скоро вам перезвоним.</h2>
                }
                {errors.phone && "ERROR"}
                <Button  isDisable />
            </form>
        </div>
    )
}