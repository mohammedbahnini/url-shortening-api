import classNames from 'classnames'
import React, { useState } from 'react'
import ProcessResultItem from './ProcessResultItem'

function ProcessResults({ shortenLinks }) {
    return (
        <div className='flex flex-col gap-y-6 mt-6 lg:gap-y-4 '>
            {
                shortenLinks.map( ( item , index) => (
                    <ProcessResultItem item={item}  key={index} />
                ))
            }
        </div>


    )

}

export default ProcessResults
