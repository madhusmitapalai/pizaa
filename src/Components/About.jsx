import React from 'react'
import Img from '../images/pizza.jpg'
const About = () => {
    return (
        <div>
            <div className='container about pt-3'>
                <div className='row pt-3'>
                    <h3>about us</h3>
                    <div className='col-md-6 about-1 text col-10 order-1'>
                        <h1>welcome to maestro pizzini</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.A maiores
                            nobis cupiditate rem repellendus, laboriosam, aperiam similique fuga
                            ratione asperiores dolore tenetur omnis vel impedit, harum adipisci
                            sint totam assumenda praesentium ullam necessitatibus delectus ut
                            unde.Pariatur, minus.Voluptates, nihil.
                        </p>
                        <button type='button' className='btn btn-outline-light'>read more</button>
                    </div>
                    <div className='col-md-6  pt-4 col-10 order-2'>
                        <img src={Img} alt='about-photo' className='about-img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
