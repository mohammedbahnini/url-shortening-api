import React from 'react'
import ProcessLink from './ProcessLink'
import CardList from './CardList'
import Boost from './Boost'
import Footer from './Footer'
import ProcessResults from './ProcessResults'

function Main() {
    return (
        <main>
            <section className=' relative after:absolute after:left-0 after:right-0 after:top-20 after:bottom-0 after:bg-gray after:-z-[3] ' >
                <div className="container">
                    <ProcessLink />
                    <ProcessResults />
                    <CardList />

                </div>
                
            </section>

            <div>
                <Boost />
            </div>

        </main>
    )
}

export default Main
