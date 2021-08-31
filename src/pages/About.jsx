import React  from 'react'
import aboutimg from '../imgs/code.svg'
import Common from './Common'

const About = () => {
    return(
        <>
        <section id="about" className="pt-5">
            <Common 
            heading="I am a tech enthusiast and expert in React js"
            secondary="Wanna work with me"
            btnname="Contact"
            link="contact"
            imgsrc={aboutimg}
            str     ong=" "
            />
        </section>
        </>
    )
}


export default About;