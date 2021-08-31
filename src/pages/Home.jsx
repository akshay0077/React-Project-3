import React  from 'react'
import webimg from '../imgs/hero-img.png'
import Common from './Common'

const Home= () => {
    return(
        <>
            <section id="home" >
            <Common
                heading="Grow your business with"
                secondary="I am a Front-end Web developer"
                btnname="Get Started"
                link="service"
                imgsrc={webimg}
                strong="kherWebSolution"
            />
            </section>

        </>
    )
}


export default Home;