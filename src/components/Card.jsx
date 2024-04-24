import React from 'react'

function Card() {
    return (
        <div className='flex flex-col items-center rounded-md px-8 pb-10 relative after:absolute after:w-full after:bg-white after:top-11 after:bottom-0 after:-z-[2] after:rounded-md z-10 '>
            <div className='bg-very-dark-violet rounded-full p-6 aspect-square w-[88px] mb-8 relative '> 
                <img src="/public/images/icon-brand-recognition.svg" alt="" className='w-[40px] ' />
            </div>
            <div className='text-center flex flex-col gap-y-3 '>
                <h2 className='font-bold text-2xl  '>Brand Recognition</h2>
                <p className='text-grayish-violet font-medium text-[15px] '>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
            </div>
        </div>
    )
}

export default Card
