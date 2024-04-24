import classNames from 'classnames'
import React, { useState } from 'react'

function ProcessLink() {
    const [hasError, setHasError] = useState(false);

    const handleSubmiit = (e)=>{
        e.preventDefault();
        setHasError( prev => !prev );
    }

    return (
        <div className='bg-dark-violet  p-6 rounded-[10px] relative -top-0 bg-[url("/public/images/bg-shorten-mobile.svg")] bg-no-repeat bg-right-top '>

            <form action="#" className='flex flex-col lg:flex-row lg:items-center lg:gap-x-6 '>
                <input type="text" placeholder='Shorten a link here...' className={classNames('bg-white rounded-md outline-none px-4 py-[6px] text-base leading-loose placeholder:font-medium lg:flex-1 lg:px-8 lg:py-[14px] ', {
                    'outline-red-400 outline-4 -outline-offset-4 placeholder:text-red-400/70 ': hasError,
                    'border-none  ': !hasError
                })} />
                {
                    hasError && (
                        <span className='italic text-xs block leading-normal text-red-400 mt-1 '>
                            Please add a link
                        </span>
                    )
                }
                <button className='btn rounded-md mt-4 ' onClick={handleSubmiit}>Shorten It!</button>
            </form>

        </div>

    )
}

export default ProcessLink
