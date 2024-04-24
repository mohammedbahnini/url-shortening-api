import React from 'react'

function Hero() {
    return (
        <section>
            <div className="container">

                <div className="flex flex-col pt-6 pb-[88px]  gap-y-9 lg:flex-row lg:gap-x-[100px] lg:relative lg:pt-16 lg:pb-[138px] lg:mt-20 ">

                    <div className='w-fit  lg:absolute lg:w-[66%] lg:left-[57%] lg:top-0 ' >
                        <img src="/public/images/illustration-working.svg" alt="" className={/* w-[152%] max-w-none  */`lg:w-auto`} />
                    </div>

                    <div className='text-center lg:text-left lg:max-w-[564px]  '>
                        <h1 className='text-[42px] font-bold leading-[1.14em] mb-4 text-very-dark-blue lg:text-[80px] lg:leading-[90px] lg:mb-1 lg:-tracking-[2px] '>
                            More than just shorter links
                        </h1>
                        <p className='text-lg text-grayish-violet leading-relaxed font-medium mb-8 lg:text-[22px]  '>
                            Build your brand’s recognition and get detailed insights on how your links are performing.
                        </p>
                        <a href="#" className='btn'>Get Started</a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero
