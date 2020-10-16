import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Service.css'




const Service = () => {
    
    const [allServices, setAllServices] = useState([])
    useEffect(() => {
        fetch('https://afternoon-woodland-35533.herokuapp.com/allService')
            .then(res => res.json())
            .then(data => {
                setAllServices(data)
            })

    }, [])

    const history = useHistory();
    
    const handleService = () => {
            history.push(`/customer`)
            
    }
    
    return (
       <div style={{marginTop: "100px"}}>
            <div className="text-center">
            <h2>Provide awesome <span style={{color: "#7AB259"}}>services</span></h2>
            <div className="row " style={{marginTop:"40px"}}>
                 {
                    allServices.map(
                        service =>
                         <div key={service._id} className="card-deck col-md-4 col-sm-12 d-flex m-auto " onClick={handleService}>
                            <div className="card text-center service" style={{marginTop: "20px"}}>
                                <img src={`data:image/png;base64,${service.image.img}`} className="card-img-top" alt="..." style={{ height: "74px", width: "74px", margin: "auto" }} />
                                <div className="card-body">
                                    <h4 className="card-title">{service.serviceTitle}</h4>
                                    <p className="card-text">{service.serviceDiscription}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
       </div>
    );
};

export default Service;