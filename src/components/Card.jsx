import React  from 'react'
import { Link } from 'react-scroll'



const Card = (props) => {
    return(
        <>
            <div class="card" >
                <img src={props.imgsrc}  style={{width: '100%' , height:'200px'}}  class="card-img-top" alt="..." />
                <hr/>
                <div class="card-body">
                    <div className="d-flex justify-content-center flex-column aligh-item-center">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.body}</p>
                    <Link to="contact" smooth={true} duration={1000} class="btn btn-primary">{props.btnname}</Link>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Card;