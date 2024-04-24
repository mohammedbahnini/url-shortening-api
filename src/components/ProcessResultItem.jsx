import classNames from 'classnames'
import React, { useState } from 'react'

function ProcessResultItem() {

    const [isCopied, setIsCopied] = useState(false)
    return (
        <div className='bg-white rounded-md px-4 pb-4 '>
            <div className="py-[6px] ">
                <p className='text-very-dark-blue text-base leading-9 font-medium truncate '>https://www.frontendmentor.io/6546494949494</p>
            </div>
            <div className='w-full bg-grayish-violet/50 h-[1px] '></div>
            <div className='flex flex-col gap-y-2 '>
                <p className='text-cyan text-base leading-9 font-medium '>https://rel.ink/k4lKyk</p>
                <button className={classNames('btn rounded-md py-2', { 'bg-very-dark-violet hover:bg-dark-violet': isCopied })} onClick={() => setIsCopied(true)}>
                    {isCopied ? 'Copied!' : 'Copy'}
                </button>
            </div>
        </div>
    )
}

export default ProcessResultItem
