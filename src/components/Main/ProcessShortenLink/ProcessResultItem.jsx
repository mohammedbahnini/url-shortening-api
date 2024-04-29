import classNames from 'classnames'
import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

function ProcessResultItem({ item }) {

    const [isCopied, setIsCopied] = useState(false);

    return (
        <div className='bg-white rounded-md px-4 pb-4 lg:flex lg:py-[18px] '>
            <div className="py-[6px] lg:w-[65%] lg:pr-8 ">
                <p className='text-very-dark-blue text-base leading-9 font-medium truncate '>{item.url}</p>
            </div>
            <div className='w-full bg-grayish-violet/50 h-[1px] lg:hidden '></div>
            <div className='flex flex-col gap-y-2 lg:flex-row lg:items-center lg:w-[35%] lg:justify-between  ' >
                <p className='text-cyan text-base leading-9 font-medium truncate  '>{item.shortenUrl}</p>
                <CopyToClipboard text={item.shortenUrl} onCopy={ ()=> setIsCopied(true)}>
                    <button className={classNames('btn rounded-md py-2 lg:px-0 lg:w-[103px] ', { 'bg-very-dark-violet hover:bg-dark-violet': isCopied })} onClick={() => setIsCopied(true)}>
                        {isCopied ? 'Copied!' : 'Copy'}
                    </button>
                </CopyToClipboard>
            </div>
        </div>
    )
}

export default ProcessResultItem
