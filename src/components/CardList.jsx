import React from 'react'
import Card from './Card'

function CardList() {
    return (
        <div  className='pb-20 pt-20'>
            <div className='text-center'>
                <h1 className='font-bold text-[28px] leading-[48px] '>Advanced Statistics</h1>
                <p className='text-base text-grayish-violet leading-[28px] font-medium '>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>

            <div className='mt-12 flex flex-col gap-y-12 relative after:absolute after:left-[50%] after:w-2 after:bg-cyan after:h-full after:-translate-x-1 '>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default CardList
