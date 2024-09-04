import { useState } from 'react'
import clsx from 'clsx'
import HeaderLink from './HeaderLink'
import HamburgerMenuLogo from './logos/HamburgerMenuLogo'

const Header = () => {
    const [currentRoute, setCurrentRoute] = useState('/')
    const [isHeaderOpen, setIsHeaderOpen] = useState(false)
    
    const createRouteProps = (route: string) => ({
        onClick: () => {
            setCurrentRoute(route);
            setIsHeaderOpen(false);
        },
        to: route
    })

    return (
        <div className='container mx-auto flex justify-end items-center h-12 bg-white'>
            <button onClick={() => setIsHeaderOpen((prev) => !prev)} className='sm:hidden mr-3'>
                <HamburgerMenuLogo />
            </button>
            <div className={clsx(
                'gap-4 bg-white',
                {
                    'absolute flex top-12 w-full flex-col p-4': isHeaderOpen,
                    'hidden sm:flex': !isHeaderOpen 
                })}
            >
                <HeaderLink label='Works' {...createRouteProps('/works')} highlight={currentRoute === '/works'} />
                <HeaderLink label='Blog' {...createRouteProps('/blog')} highlight={currentRoute === '/blog'} />
                <HeaderLink label='Contact' {...createRouteProps('/')} highlight={currentRoute === '/'} />
            </div>
        </div>
    )
}

export default Header