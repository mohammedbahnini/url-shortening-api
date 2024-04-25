import React from 'react'
import FooterLinksList from './FooterLinksList'
import FooterSocialMedia from './FooterSocialMedia'

function Footer() {
    return (
        <footer className='bg-very-dark-blue py-16 lg:py-[72px] ' >
            <div className="container">
                <div className="flex flex-col items-center gap-y-12 lg:flex-row lg:items-start ">

                    <a href="#">
                        <img src="/public/images/logo.svg" alt="" className='brightness-[100] '  />
                    </a>

                    <FooterLinksList />

                    <FooterSocialMedia />
                </div>
            </div>
        </footer>
    )
}

export default Footer
