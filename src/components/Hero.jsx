import React from 'react'

function Hero() {
    return (
        <section>
            <div className="container">

                <div className="flex flex-col pt-6 pb-[168px]  gap-y-9">
                    <div className='w-fit' >
                        <img src="/public/images/illustration-working.svg" alt="" className={/* scale-[152%] origin-top-left*/`w-[152%] max-w-none`} />
                    </div>

                    <div className='text-center'>
                        <h1 className='text-[42px] font-bold leading-[1.14em] mb-4 text-very-dark-blue '>
                            More than just shorter links
                        </h1>
                        <p className='text-lg text-gray leading-relaxed font-medium mb-8'>
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
