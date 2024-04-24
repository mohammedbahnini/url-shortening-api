import classNames from 'classnames'
import React, { useState } from 'react'
import ProcessResultItem from './ProcessResultItem'

function ProcessResults() {
    return (
        <div className='flex flex-col gap-y-6 mt-6'>
            <ProcessResultItem />
            <ProcessResultItem />
            <ProcessResultItem />
        </div>


    )

}

export default ProcessResults
