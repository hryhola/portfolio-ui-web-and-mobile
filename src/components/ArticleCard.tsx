import clsx from 'clsx'
import React from 'react'

type Props = {
    className?: string
    title: string
    date: string
    tags: string[]
    text: string
    grayTags?: boolean
    noPaddingX?: boolean
    noRounding?: boolean
    noShadow?: boolean
}

const ArticleCard = (props: Props) => {
  return (
    <article className={clsx('bg-white py-4',
      { 'rounded-s': !props.noRounding, 'px-0': props.noPaddingX, 'px-4': !props.noPaddingX, 'drop-shadow-sm': !props.noShadow },
      props.className
    )}>
        <h3 className='text-1.5xl font-bold'>{props.title}</h3>
        <div className='flex divide-x divide-black py-3'>
          <div className='pr-4'>{props.date}</div>
          <div className={clsx('pl-4', { 'text-ironlight': props.grayTags })}>{props.tags.join(', ')}</div>
        </div>
        <p>{props.text}</p>
    </article>
  )
}

export default ArticleCard