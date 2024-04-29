import React from 'react'
import Card from './Card'

function CardList() {
    const cadrs = [
        {
            icon : '/images/icon-brand-recognition.svg' , 
            title : 'Brand Recognition' , 
            text : 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
        } , 
        {
            icon : '/images/icon-detailed-records.svg' , 
            title : 'Detailed Records' , 
            text : 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
        } , 
        {
            icon : '/images/icon-fully-customizable.svg' , 
            title : 'Fully Customizable' , 
            text : 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
        }
    ]
    return (
        <div  className='pb-20 pt-20 lg:pt-[120px] lg:pb-[120px] '>
            <div className='text-center'>
                <h1 className='font-bold text-[28px] leading-[48px] lg:text-[40px] lg:mb-[18px]  '>Advanced Statistics</h1>
                <p className='text-base text-grayish-violet leading-[28px] font-medium lg:text-lg lg:leading-8 max-w-[540px] mx-auto '>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>

            <div className='mt-12 flex flex-col gap-y-12 relative after:absolute after:left-[50%] after:w-2 after:bg-cyan after:h-full after:-translate-x-1 lg:flex-row lg:gap-x-8 lg:after:w-10/12 lg:after:h-2 lg:after:translate-x-[-50%] lg:after:top-[50%] lg:after:translate-y-[50%] '>
                {
                    cadrs.map( (card , index) => <Card icon={card.icon} title={card.title} text={card.text} key={index} index={index} />)
                }
            </div>
        </div>
    )
}

export default CardList
