import React, { useState }  from 'react'
import axios from 'axios'

//mypersonalmailserverisa

const  Contact = () => {
    const url = '/'
    const [data, setData] = useState({ name : '', from : 'isservice', email : '' , msg : ''});
    const sendmail = (e) =>{
        e.preventDefault();
        axios.post(url , data)
        alert("Thanks for contacting , I will be responding soon")
        setData({ ...data , email : '' })
        setData({ ...data , name : ''})
        setData({ ...data , msg : ''})
    }

    return(
        <>
        <section id="contact" className="pt-5">
            <div>
                <h1 className="text-center">Contact me</h1>
                <div>
                    
                        <div className="container contact_div">
                            <div className="row">
                                <div className="col-md-6 col-10 mx-auto">
                                    <form onSubmit={sendmail} >
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Name</label>
                                            <input value={data.name} onChange={(e) => setData({ ...data , name : e.target.value})} type="text" required class="form-control"  placeholder="Enter your name" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                            <input value={data.email} onChange={(e) => setData({ ...data ,email : e.target.value})} type="email" required class="form-control"  placeholder="name@example.com" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                            <textarea value={data.msg} onChange={(e) => setData({ ...data , msg : e.target.value})} class="form-control" required  rows="3"></textarea>
                                        </div>
                                        <div class="col-12">
                                            <button type="submit" class="btn btn-primary" href="/">Submit form</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                </div>
            </div>
            </section>
        </>
    )
}


export default Contact;