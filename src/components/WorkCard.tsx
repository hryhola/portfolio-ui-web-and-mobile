import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'
import YearBadge from './YearBadge'

type Props = {
    imgSrc: string
    imgAlt: string
    year: number
    tags: string[]
    text: string
    title: string
    bigPadding?: boolean
}

const WorkCard = (props: Props) => {
  return (
    <article className={clsx('flex flex-col sm:flex-row gap-4 border-b ', { 'py-10': props.bigPadding, 'pb-4' : !props.bigPadding})}>
        <div className='aspect-video max-h-56 sm:max-h-max sm:max-w-60'>
            <img className='rounded-lg object-cover w-full h-full' src={props.imgSrc} alt={props.imgAlt} />
        </div>
        <div className='flex flex-col gap-4'>
            <h3 className='font-bold text-2xl'><Link to={'/work/' + props.title.replaceAll(' ', '-').toLowerCase()}>{props.title}</Link></h3>
            <div className='flex space-x-4 items-start'>
                <YearBadge year={props.year} />
                <span className='inline-block text-ironlight'>{props.tags.join(', ')}</span>
            </div>
            <p className=''>{props.text}</p>
        </div>
    </article>
  )
}

export default WorkCard
