import React from 'react'
import ArticleCard from '../components/ArticleCard'
import WorkCard from '../components/WorkCard'
import { Link } from 'react-router-dom'

type Props = {}

const HomePage = (props: Props) => {
    return (<>
        <div className="container mx-auto mb-16">
            <section className="flex flex-col sm:flex-row-reverse items-center sm:justify-between gap-4 sm:gap-6 px-4 pt-4 sm:pt-36">
                <img className="object-scale-down max-h-52 sm:max-h-60 lg:max-h-96" src="/images/dude.png" alt="dude" />
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4 sm:gap-10 ">
                    <h1 className="text-3.5xl sm:text-5xl sm:leading-11 font-bold max-w-[500px]" >Hi, I am John,<br />Creative Technologist</h1>
                    <p className="text-base max-w-[500px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <button className="bg-primary text-xl text-white px-4 py-3">Download Resume</button>
                </div>
            </section>
        </div>

        <section className="bg-light px-4 pb-8">
            <div className="container mx-auto">
                <div className="flex items-center justify-center sm:justify-between py-4">
                    <p className="text-center  text-lg sm:text-1.5xl">Recent Posts</p>
                    <Link className="text-secondary hidden sm:block" to="/blog">View All</Link>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <ArticleCard
                        title="Making a design system from scratch"
                        date="12 Feb 2020"
                        tags={['Design', 'Pattern']}
                        text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                    />
                    <ArticleCard
                        title="Creating pixel perfect icons in Figma"
                        date="12 Feb 2020"
                        tags={['Design', 'Pattern']}
                        text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                    />
                </div>
            </div>
        </section>
        <section className="px-4 flex flex-col space-y-4 pb-8">
            <div className="container mx-auto">
                <div className="flex items-center justify-center sm:justify-between py-4">
                    <p className="text-center text-lg">Featured works</p>
                </div>
                <div className="flex flex-col gap-8">
                    <WorkCard
                        title="Designing Dashboards"
                        imgSrc="/images/Work1.png"
                        imgAlt="Work Dashboard"
                        tags={['Dashboard']}
                        year={2020}
                        text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                    />
                    <WorkCard
                        title="Vibrant Portraits of 2020"
                        imgSrc="/images/Work2.png"
                        imgAlt="Work Dashboard"
                        tags={['Illustration']}
                        year={2018}
                        text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                    />
                    <WorkCard
                        title="36 Days of Malayalam type"
                        imgSrc="/images/Work3.png"
                        imgAlt="Work Dashboard"
                        tags={['Typography']}
                        year={2018}
                        text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                    />
                </div>
            </div>
        </section>
    </>)
}

export default HomePage
