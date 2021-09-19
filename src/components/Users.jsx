import React from 'react'
import user from '../icons/user.svg'
import location from '../icons/location.svg'
import server from '../icons/server.svg'
import './user.css'

const Users = () => {
    return (
        <div>
            <div className="card mx-auto my-4 w-75" >
                <div className="card-body">
                    <img src={user} alt="" />
                    <div className="text">
                        <h5 className="card-title">100+</h5>
                        <p className="card-text">Users</p>
                        
                    </div>
                    <div class="vl"></div>
                    <img src={location} alt="" />
                    <div className="text">
                        <h5 className="card-title">30+</h5>
                        <p className="card-text">Locations</p>
                    </div>
                    <div class="vl"></div>
                    <img src={server} alt="" />
                    <div className="text">
                        <h5 className="card-title">50+</h5>
                        <p className="card-text">Disease Detection</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users
