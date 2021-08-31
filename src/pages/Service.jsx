import React  from 'react'
import Card from '../components/Card'
import htmlimg from '../imgs/static.svg'
import server from '../imgs/server.svg'
import responsive from '../imgs/responsive.svg'
import react from '../imgs/react.svg'
import app from '../imgs/appdisplay.svg'
import serverr from '../imgs/serverbug.svg'
import xml from '../imgs/xml.svg'


const Service = () => {
    return(
        <>
        <section id="service" className="pt-5">
            <div >
                <h1 className="text-center">Services</h1>
            </div>
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-4 col-10 gy-4 mx-auto">
                                <Card 
                                title="Static Website"
                                body="A general website with only html and css . Can turn you hand art or sketch into a real living website."
                                btnname="Contact me"
                                imgsrc={server}
                                />
                            </div>
                            <div className="col-md-4 gy-4 col-10 mx-auto">
                                <Card 
                                title="User Interactive Static Website"
                                body="A website with html , css and js . Mini games or a user interactable , animated website."
                                btnname="Contact me"
                                imgsrc={htmlimg}
                                />
                            </div>
                            <div className="col-md-4 gy-4 col-10 mx-auto">
                                <Card 
                                title="Responsive website"
                                body="A cool website with bootstrap and flexbox . Responsive website in all kind of devices and viewports."
                                btnname="Contact me"
                                imgsrc={responsive}
                                />
                            </div>
                            <div className="col-md-4 gy-4 col-10 mx-auto">
                                <Card 
                                title="Modern website with React"
                                body="A cool modern website with react.js . Responsive in all kind of devices and can turn into native app directly."
                                btnname="Contact me"
                                imgsrc={react}
                                />
                            </div>
                            <div className="col-md-4 gy-4 col-10 mx-auto">
                                <Card 
                                title="Native App"
                                body="An app with react native . Awesome modern app with animations and you can do what ever you can imagine to do with a mobile in your hand."
                                btnname="Contact me"
                                imgsrc={app}
                                />
                            </div>
                            <div className="col-md-4 gy-4 col-10 mx-auto">
                                <Card 
                                title="Full-stack Web"
                                body="A website with back end capabilities and database . Can build any kind of websites , webapps and webservers like social media , ecommerce site etc.."
                                btnname="Contact me"
                                imgsrc={serverr}
                                />
                            </div>  
                            <div className="col-md-4 gy-4 col-10 mx-auto">
                                <Card 
                                title="Android App"
                                body="General android app with react native"
                                btnname="Contact me"
                                imgsrc={xml}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}


export default Service;