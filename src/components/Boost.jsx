import React from 'react'

function Boost() {
    return (
        <section className='bg-very-dark-violet bg-[url("/public/images/bg-boost-mobile.svg")] bg-no-repeat bg-[length:100%] lg:bg-[url("/public/images/bg-boost-desktop.svg")] lg:bg-cover '> 
            <div className='container  '>
                <div className='px-0 py-[90px] flex flex-col items-center gap-y-4 lg:py-[57px] '>
                    <h1 className='text-center text-white font-bold text-[28px] leading-[48px] lg:mb-8 lg:text-[40px] '>Boost your links today</h1>
                    <a href="#" className="btn">Get Started</a>
                </div>
            </div>
        </section>
    )
}

export default Boost
