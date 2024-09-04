import React from 'react'
import ArticleCard from '../components/ArticleCard'

type Props = {}

const BlogPage = (props: Props) => {
  return (
    <div className='max-w-[680px] mx-auto px-4'>
      <h2 className='font-bold text-5xl mb-2 sm:mb-10 sm:mt-20'>Blog</h2>
      <div className='divide-y-2 '>
        <ArticleCard
            className='py-7'
            title="UI Interactions of the week"
            date="12 Feb 2019"
            tags={['Express', 'Handlebars']}
            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            noPaddingX
            noRounding
            noShadow
            grayTags
        />
        <ArticleCard
            className='py-7'
            title="UI Interactions of the week"
            date="12 Feb 2019"
            tags={['Express', 'Handlebars']}
            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            noPaddingX
            noRounding
            noShadow
            grayTags
        />
        <ArticleCard
            className='py-7'
            title="UI Interactions of the week"
            date="12 Feb 2019"
            tags={['Express', 'Handlebars']}
            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            noPaddingX
            noRounding
            noShadow
            grayTags
        />
        <ArticleCard
            className='py-7'
            title="UI Interactions of the week"
            date="12 Feb 2019"
            tags={['Express', 'Handlebars']}
            text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            noPaddingX
            noRounding
            noShadow
            grayTags
        />
      </div>
    </div>
  )
}

export default BlogPage