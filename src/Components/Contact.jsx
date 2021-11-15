
import React, { useState } from 'react'
const Contact = () => {
    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        Msg: '',
    });
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`${data.fullname}`);
    }
    const inputEvent = (event) => {
        const { name, value } = event.target;
        setData((prev) => {
            return { ...prev, [name]: value, }
        })
    }

    return (
        <>
            <div className='my-2 text-center'>
                <h1 className='contact-head'>contact us</h1>
            </div>
            <div className='container-fluid text-start contact text-capitalize'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>

                        <form onSubmit={formSubmit}>
                            <div className="mb-2">
                                <label for="exampleFormControlInput1" class="form-label" >fullname</label>
                                <input type="fullname"
                                    className="form-control"
                                    name='fullname'
                                    value={data.fullname}
                                    onChange={inputEvent}

                                    placeholder='enter your fullname' />
                            </div>
                            <div className="mb-2">
                                <label for="exampleFormControlInput1" class="form-label" >email</label>
                                <input
                                    type='email'
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    name='email'
                                    value={data.email}
                                    onChange={inputEvent}
                                    placeholder='enter your email' />
                            </div>
                            <div className="mb-2">
                                <label for="exampleFormControlInput1" className="form-label" >phone</label>
                                <input type="phone"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    name='phone'
                                    value={data.phone}
                                    onChange={inputEvent}

                                    placeholder='mobile number' />
                            </div>
                            <div className="mb-5">
                                <label for="exampleFormControlInput1" className="form-label message" >message</label>
                                <textarea type="textarea"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    name='Msg'
                                    rows='3'
                                    value={data.Message}
                                    onChange={inputEvent}
                                    placeholder='message' ></textarea>
                            </div>
                            <button type="submit" className="btn btn-outline-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;