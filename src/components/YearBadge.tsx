import clsx from 'clsx'
import React from 'react'

type Props = {
    year: number | string
    color?: 'primary' | 'dark'
}

const YearBadge = (props: Props) => {
    return (
        <span className={clsx(
            'inline-block text-white rounded-3xl px-2 py-px',
            { 'bg-dark': props.color !== 'primary', 'bg-primary/80': props.color === 'primary'}
        )}
        >{props.year}</span>
    )
}

export default YearBadge