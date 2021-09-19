import React from 'react'

const navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand ms-3" href="/">LaserEye</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mx-auto mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Testimonials</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Help</a>
                            </li>
                        </ul>
                        <button className="btn btn-danger me-3"> Sign In</button>
                        <button className="btn btn-outline-danger">Sign Up</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default navbar
