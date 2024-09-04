import React from 'react'
import YearBadge from '../components/YearBadge'

type Props = {}

const WorkDetailPage = (props: Props) => {
  return (
    <div className='max-w-[680px] mx-auto px-4'>
      <h1 className='max-w-[500px] font-bold text-3.5xl mb-10 sm:mt-20'>Designing Dashboards with usability in mind</h1>
      <div className='flex space-x-4 items-start'>
          <YearBadge year={2020} color='primary'/>
          <span className='inline-block'>Dashboard, User Experience Design</span>
      </div>
      <p className='py-10'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      <img src="/portfolio-ui-web-and-mobile/images/ArticleImg1.png" alt="Dashboard" />
      <h2 className='font-medium text-3xl mt-10 mb-4'>Heading 1</h2>
      <h3 className='font-medium text-1.5xl mb-3'>Heading 2</h3>
      <p className='mb-10'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      <img className='mb-4' src="/portfolio-ui-web-and-mobile/images/ArticleImg2.png" alt="Card" />
      <img src="/portfolio-ui-web-and-mobile/images/ArticleImg3.png" alt="Picker" />
    </div>
  )
}

export default WorkDetailPage