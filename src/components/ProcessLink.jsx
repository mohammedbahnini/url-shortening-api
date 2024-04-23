import classNames from 'classnames'
import React, { useState } from 'react'

function ProcessLink() {
    const [hasError, setHasError] = useState(false);

    return (
        <section>
            <div className="container bg-[#EFF1F7]  ">
                <div className='bg-dark-violet  p-6 rounded-[10px] relative -top-20 bg-[url("/public/images/bg-shorten-mobile.svg")] bg-no-repeat bg-right-top '>

                    <form action="#" className='flex flex-col'>
                        <input type="text" placeholder='Shorten a link here...' className={classNames('bg-white rounded-md outline-none px-4 py-[6px] text-base leading-loose placeholder:font-medium', {
                            'border-red-400 border-4 placeholder:text-red-400/70 ': hasError , 
                            'border-none  ' : !hasError
                        })} />
                        {
                            hasError && (
                                <span className='italic text-xs block leading-normal text-red-400 mt-1 '>
                                    Please add a link
                                </span>
                            )
                        }
                        <button className='btn rounded-md mt-4'>Shorten It!</button>
                    </form>

                </div>

            </div>
        </section>
    )
}

export default ProcessLink
