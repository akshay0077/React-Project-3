import React  from 'react'
import { Link } from 'react-scroll'

const Common= (props) => {
    return(
        <>
            <section className="d-flex justify-content-center home100 align-items-center" id='header'>
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 mt-4 mt-lg-0 pt-lg-0 order-2 order-lg-1  d-flex justify-content-center flex-column">
                                    <h1>{props.heading} <strong>{props.strong}</strong> </h1>
                                    <h2 className='my-3'>{props.secondary} </h2>
                                    <div className="mt-3">
                                        <Link className="btn btn-primary btn-get-started" smooth={true} duration={1000} to={props.link}>{props.btnname}</Link>
                                        </div>
                                </div>
                                <div className="col-md-6 order-1 order-lg-2 header img">
                                    <img src={props.imgsrc} alt="animated" className="img-fluid animated"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Common;