import React, { useEffect, useState } from 'react';
const FeedBack = () => {

    const [userReviews, setUserReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/userReview')
            .then(res => res.json())
            .then(data =>  setUserReviews(data))

    }, [])



    return (
        <div style={{ marginTop: "100px" }}>
            <div className="text-center">
                <h2>Clients <span style={{ color: "#7AB259" }}>FeedBack</span></h2>
            </div>
            <div className="row" style={{ marginTop: 70 }}>
                
                {
                    userReviews.map(
                        reviews => <div key={reviews._id} className="card-deck col-md-4 col-sm-6 d-flex m-auto">
                            <div className="card text-center" style={{ padding: "25px", marginTop: '25px' }}>
                                <div className="d-flex m-auto">
                                    {/* <img src={reviews.img} className="card-img-top " alt="..." style={{ height: "74px", width: "74px", marginRight: "20px" }} /> */}
                                    <span>
                                        <h4 className="card-name">{reviews.name}</h4>
                                        <h5><small>{reviews.designation.toUpperCase()}</small>, <small>{reviews.companyname}</small></h5>
                                    </span>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">{reviews.review}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
               
            </div>
            
        </div>
    );
};

export default FeedBack;