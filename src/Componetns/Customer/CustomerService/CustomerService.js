import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const CustomerService = () => {
    const [service, setService] = useState([]);
    const [loggedInUser] = useContext(UserContext);

    useEffect(() => {

        fetch('https://afternoon-woodland-35533.herokuapp.com/userService?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
    }
        , [loggedInUser.email])

    return (
        <div>
            <h2>Service</h2>
            <div className="row">
                {
                    service.map(service => <div key={service._id} className="card-deck col-md-5 col-sm-12 d-flex m-auto">
                        <div className="card text-center" style={{ padding: "25px", marginTop: "20px" }}>
                            <div className="d-flex justify-content-between">
                                <img src={service.img} className="card-img-top " alt="..." style={{ height: "74px", width: "74px" }} />
                                <span>
                                    <button>pending</button>
                                </span>
                            </div>
                            <div className="card-body">
                                <h4>{service.orderName}</h4>
                                <p className="card-text">{service.details}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CustomerService;