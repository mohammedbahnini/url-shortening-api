import React from 'react'
import CardList from './Statistics/CardList'
import Process from './ProcessShortenLink/Process'
import Boost from './Boost/Boost'


function Main() {
    return (
        <main>

            <section className=' relative after:absolute after:left-0 after:right-0 after:top-20 after:bottom-0 after:bg-gray after:-z-[3] lg:after:top-[86px] ' >
                <div className="container">
                    <Process />
                    <CardList />
                </div>
                
            </section>

            <Boost />

        </main>
    )
}

export default Main
