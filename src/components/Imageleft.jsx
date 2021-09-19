import React from 'react'
import mac from '../images/mac.png'

const Imageleft = () => {
    return (
        <div>
            <div className="row featurette container-fluid my-8 mx-auto" style={{ marginTop: 60 }}>
                <div className="col-md-7 my-3">
                    <h1 className="featurette-heading display-4 fw-normal center">Check Out the all-new, quick <br />eye-care tool!</h1>
                    <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus doloribus placeat soluta itaque officia maiores quas! Earum magni incidunt laboriosam deserunt ipsa excepturi voluptatibus inventore?</p>
                    <div className="d-grid gap-2 col-4 my-4">
                        <button className="btn btn-danger" type="button">Get Started</button>
                    </div>
                </div>
                <div className="col-md-5">
                    <img src={mac} alt="" className="w-100" />
                </div>
            </div>
        </div>
    )
}

export default Imageleft
