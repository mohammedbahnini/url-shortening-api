import classNames from 'classnames';
import React, { useState } from 'react'

function Header() {
    const links = [
        {
            href: '#',
            text: 'Features'
        },
        {
            href: '#',
            text: 'Pricing'
        },
        {
            href: '#',
            text: 'Resources'
        }
    ];

    const [ menuOpen , setMenuOpen] = useState(false);

    const handleClick = (e)=>{
        setMenuOpen( (prev)=>{
            return !prev;
        })
    }


    return (
        <header className='bg-white lg'>
            <div className="container">
                <nav className='flex items-center justify-between pt-10  '>
                    <a href="#" className=''>
                        <img src='/images/logo.svg' alt='logo' />
                    </a>
                    <div className={classNames(`absolute left-6 right-6 top-24 z-50 bg-dark-violet rounded-[10px] px-6 py-10 origin-top-right transition-[colors_transform] duration-100 ease-in
                    lg:static lg:scale-100 lg:opacity-100 lg:flex-1 lg:flex lg:flex-   lg:bg-transparent lg:py-0 lg:px-0   ` , {
                        'scale-100' : menuOpen , 
                        'scale-0' : !menuOpen
                    })}>
                        <ul className={`flex flex-col gap-y-[30px] font-black text-lg 
                        lg:flex-row lg:flex-1 lg:gap-x-8 lg:items-center lg:pl-11 `}>
                            {
                                links.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href} className='text-white text-center block transition-colors duration-100 lg:text-grayish-violet lg:hover:text-very-dark-violet lg:text-base '>{item.text}</a>
                                    </li>
                                ))
                            }
                        </ul>

                        <div className='w-full h-[1px] bg-gray/20 my-8 lg:hidden '></div>

                        <div>
                            <ul className='flex flex-col gap-y-6 lg:flex-row lg:items-center lg:gap-x-9'>
                                <li>
                                    <a href="#" className='block text-white font-bold text-lg text-center lg:text-grayish-violet lg:text-base '>Login</a>
                                </li>
                                <li>
                                    <a href="#" className='btn w-full lg:text-base '>Sign in</a>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <span className='text-grayish-violet block cursor-pointer lg:hidden' onClick={ (e)=> handleClick(e)}>
                        <i className="fa-solid fa-bars"></i>
                    </span>
                </nav>
            </div>
        </header>
    )
}

export default Header
