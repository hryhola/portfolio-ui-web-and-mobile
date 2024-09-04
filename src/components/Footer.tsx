import React from 'react'
import FacebookLogo from './logos/FacebookLogo'
import InstagramLogo from './logos/InstagramLogo'
import TwitterLogo from './logos/TwitterLogo'
import LinkedInLogo from './logos/LinkedInLogo'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='h-48 flex flex-col gap-8 justify-center items-center'>
      <div className='flex min-w-56 justify-between'>
        <a href="https://www.facebook.com/"><FacebookLogo /></a>
        <a href="https://www.instagram.com/"><InstagramLogo /></a>
        <a href="https://x.com/"><TwitterLogo /></a>
        <a href="https://www.linkedin.com/"><LinkedInLogo /></a>
      </div>
      <div className='text-[14px]'>
        Copyright ©2020 All rights reserved 
      </div>
    </div>
  )
}

export default Footer