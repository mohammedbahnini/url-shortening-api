import React from 'react'

function FooterSocialMedia() {
    const links = [
        {
            icon : <i className="fa-brands fa-square-facebook"></i> , 
            href : '#'
        } , 
        {
            icon : <i className="fa-brands fa-twitter"></i> , 
            href : '#' 
        } , 
        {
            icon : <i className="fa-brands fa-pinterest"></i> , 
            href : '#'
        } , 
        {
            icon : <i className="fa-brands fa-instagram"></i> , 
            href : '#'
        }
    ];
    return (
        <div className=''>
            <ul className='flex gap-x-6'>
                {
                    links.map( (item , index) => (
                        <li key={index}>
                            <a href={item.href} className='text-white text-2xl'>{item.icon}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default FooterSocialMedia
