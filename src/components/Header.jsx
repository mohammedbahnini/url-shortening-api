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
        <header className='bg-white'>
            <div className="container">
                <nav className='flex items-center justify-between pt-10  '>
                    <a href="#" className=''>
                        <img src='/public/images/logo.svg' alt='logo' />
                    </a>
                    <div className={classNames('absolute left-6 right-6 top-24 z-50 bg-dark-violet rounded-[10px] px-6 py-10 origin-top-right transition-[colors_transform] duration-100 ease-in  ' , {
                        'opacity-100 scale-100' : menuOpen , 
                        'scale-0 opacity-0' : !menuOpen
                    })}>
                        <ul className='flex flex-col gap-y-[30px] font-black text-lg'>
                            {
                                links.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href} className='text-white text-center block '>{item.text}</a>
                                    </li>
                                ))
                            }
                        </ul>

                        <div className='w-full h-[1px] bg-gray/20 my-8 '></div>

                        <div>
                            <ul className='flex flex-col gap-y-6'>
                                <li>
                                    <a href="#" className='block text-white font-bold text-lg text-center'>Login</a>
                                </li>
                                <li>
                                    <a href="#" className='btn w-full '>Sign in</a>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <span className='text-grayish-violet block cursor-pointer' onClick={ (e)=> handleClick(e)}>
                        <i className="fa-solid fa-bars"></i>
                    </span>
                </nav>
            </div>
        </header>
    )
}

export default Header
