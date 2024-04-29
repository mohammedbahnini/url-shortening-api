import React from 'react'
import { motion } from 'framer-motion'

function Card({icon , title , text  , index}) {
    return (
        <motion.div 
        initial={{ opacity : 0 , y : '5rem'}}
        whileInView={ { opacity: 1 , y : 0}}
        transition={ { duration : .5 , ease : 'easeOut' , delay : index * 0.2}}
        viewport={{ once : true , amount : 0.5}}
        className={`flex flex-col items-center rounded-md px-8 pb-10 relative after:absolute after:w-full after:bg-white after:top-11 after:bottom-0 after:-z-[2] after:rounded-md z-10 lg:[&:nth-of-type(2)]:mt-11 lg:[&:nth-of-type(3)]:mt-[88px] lg:self-start   `} >
            <div className='bg-very-dark-violet rounded-full p-6 aspect-square w-[88px] mb-8 relative lg:self-start '> 
                <img src={icon} alt="" className='w-[40px] ' />
            </div>
            <div className='text-center flex flex-col gap-y-3 lg:text-left '>
                <h2 className='font-bold text-2xl  '>{title}</h2>
                <p className='text-grayish-violet font-medium text-[15px] '>{text}</p>
            </div>
        </motion.div>
    )
}

export default Card
