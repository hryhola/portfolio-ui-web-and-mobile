import React from 'react'
import WorkCard from '../components/WorkCard'

type Props = {}

const WorksPage = (props: Props) => {
  return (
    <div className='max-w-[680px] mx-auto px-4'>
      <h2 className='font-black text-5xl mb-2 sm:mb-10 sm:mt-20'>Work</h2>
      <div className=''>
        <WorkCard
          title="Designing Dashboards"
          imgSrc="/images/Work1.png"
          imgAlt="Work Dashboard"
          tags={['Dashboard']}
          year={2020}
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          bigPadding
        />
        <WorkCard
          title="Vibrant Portraits of 2020"
          imgSrc="/images/Work2.png"
          imgAlt="Work Illustration"
          tags={['Illustration']}
          year={2018}
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          bigPadding
        />
        <WorkCard
          title="36 Days of Malayalam type"
          imgSrc="/images/Work3.png"
          imgAlt="Work Typography"
          tags={['Typography']}
          year={2018}
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          bigPadding
        />
        <WorkCard
          title="Components"
          imgSrc="/images/Work4.png"
          imgAlt="Work Components"
          tags={['Components', 'Design']}
          year={2018}
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          bigPadding
        />
      </div>
    </div>
  )
}

export default WorksPage