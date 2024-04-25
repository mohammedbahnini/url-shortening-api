import React from 'react'

function Card({icon , title , text }) {
    return (
        <div className={`flex flex-col items-center rounded-md px-8 pb-10 relative after:absolute after:w-full after:bg-white after:top-11 after:bottom-0 after:-z-[2] after:rounded-md z-10 lg:[&:nth-of-type(2)]:mt-11 lg:[&:nth-of-type(3)]:mt-[88px] lg:self-start   `} >
            <div className='bg-very-dark-violet rounded-full p-6 aspect-square w-[88px] mb-8 relative lg:self-start '> 
                <img src={icon} alt="" className='w-[40px] ' />
            </div>
            <div className='text-center flex flex-col gap-y-3 lg:text-left '>
                <h2 className='font-bold text-2xl  '>{title}</h2>
                <p className='text-grayish-violet font-medium text-[15px] '>{text}</p>
            </div>
        </div>
    )
}

export default Card
