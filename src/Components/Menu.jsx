import React from 'react'
import Img from '../images/chicago.jpg'
const Manu = () => {
    return (
        <div>
            <div className='container about pt-3 my-5'>
                <div className='row pt-3'>
                    <div className='col-md-6 col-xs-10 text col-10 order-2'>
                        <h3>the pizza menu</h3>
                        <h1>chicago thin crust</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.A maiores
                            nobis cupiditate rem repellendus, laboriosam, aperiam similique fuga
                            ratione asperiores dolore tenetur omnis vel impedit, harum adipisci
                            sint totam assumenda praesentium ullam necessitatibus delectus ut
                            unde.Pariatur, minus.Voluptates, nihil.
                        </p>
                        <button type='button' className='btn btn-outline-light'>read more</button>
                    </div>
                    <div className='col-md-6 col-xs-10  pt-4 col-10 order-'>
                        <img src={Img} alt='menu' className='menu-img' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Manu
