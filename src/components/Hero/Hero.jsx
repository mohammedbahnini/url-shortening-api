import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
    return (
        <section>
            <div className="container overflow-x-hidden lg:overflow-x-visible">

                <div className="flex flex-col pt-6 pb-[88px]  gap-y-9 lg:flex-row lg:gap-x-[100px] lg:relative lg:pt-16 lg:pb-[138px] lg:mt-20 ">

                    <motion.div
                    initial={{ opacity : 0  ,  x : '15rem' }}
                    whileInView={{ opacity : 1  ,  x : 0 }}
                    viewport={{ once : true }} 
                    transition={ { duration : .75 , ease : 'easeOut'}}
                    className='w-fit  lg:absolute lg:w-[66%] lg:left-[57%] lg:top-0 '
                    >
                         <img src="/images/illustration-working.svg" alt="" className={` w-[152%] max-w-none  lg:w-auto`} />
                    </motion.div>

                    <motion.div className='text-center lg:text-left lg:max-w-[564px]  ' 
                   initial={{ opacity : 0  ,  x : '-15rem' }}
                   whileInView={{ opacity : 1  ,  x : 0 }}
                   viewport={{ once : true }} 
                   transition={ { duration : .75 , ease : 'easeOut'}}
                    >
                        <h1 className='text-[42px] font-bold leading-[1.14em] mb-4 text-very-dark-blue lg:text-[80px] lg:leading-[90px] lg:mb-1 lg:-tracking-[2px] '>
                            More than just shorter links
                        </h1>
                        <p className='text-lg text-grayish-violet leading-relaxed font-medium mb-8 lg:text-[22px]  '>
                            Build your brand’s recognition and get detailed insights on how your links are performing.
                        </p>
                        <a href="#" className='btn'>Get Started</a>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}

export default Hero
