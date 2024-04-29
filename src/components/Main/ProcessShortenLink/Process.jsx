import React, { useState } from 'react'
import ProcessLink from './ProcessLink'
import ProcessResults from './ProcessResults'

function Process() {
    const [shortenLinks  , setShortenLinks ] = useState([]);

    return (
        <>
            <ProcessLink setShortenLinks={setShortenLinks}     />
            <ProcessResults shortenLinks={shortenLinks}   />
        </>
    )
}

export default Process
