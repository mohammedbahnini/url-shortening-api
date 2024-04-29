import React from 'react'
import FooterLinksGroup from './FooterLinksGroup'

function FooterLinksList() {
    const links = [
        {

        }
    ]
    return (
        <div className='flex flex-col gap-y-10 lg:flex-row lg:flex-1 lg:pl-[261px] lg:gap-x-20 '> 


            <FooterLinksGroup />
            <FooterLinksGroup />
            <FooterLinksGroup />

        </div>
    )
}

export default FooterLinksList
