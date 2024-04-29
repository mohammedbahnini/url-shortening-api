import React from 'react'

function FooterLinksGroup() {
    const links = [
        {
            text : 'Link Shortening' , 
            href :  '#'
        } , 
        {
            text : 'Branded Links' , 
            href :  '#'
        } , 
        {
            text : 'Analytics' , 
            href :  '#'
        }
    ];

    return (
        <div className='text-center  lg:text-left  '>
            <h3 className='text-white font-bold text-base mb-[22px] '>Features</h3>
            <ul className='flex flex-col gap-y-[10px] text-[15px] '>
               {
                links.map( (item , index) =>(
                    <li key={index}>
                        <a href={item.href} className='text-grayish-violet hover:text-cyan transition-colors duration-100 '>{item.text}</a>
                    </li>
                ))
               }
            </ul>
        </div>
    )
}

export default FooterLinksGroup
