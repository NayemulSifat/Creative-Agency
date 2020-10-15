import React from 'react';

const Links = () => {
    return (
        <div className='row' style={{ marginTop: "100px" }}>
            <div className="col-md-2 col-sm-6 m-auto d-flex justify-content-around">
                <img src="https://i.ibb.co/SBNF9kx/slack.png" alt="slack" style={{ height: "60px", marginTop: '20px', marginTop: '20px' }} />
            </div>
            <div className="col-md-2 col-sm-6 m-auto d-flex justify-content-around">
                <img src="https://i.ibb.co/dk4zbZv/google.png" alt="google" style={{ height: "60px", marginTop: '20px' }} />
            </div>
            <div className="col-md-2 col-sm-6 m-auto d-flex justify-content-around">
                <img src="https://i.ibb.co/C1137xV/uber.png" alt="uber" style={{ height: "60px", marginTop: '20px' }} />
            </div>
            <div className="col-md-2 col-sm-6 m-auto d-flex justify-content-around">
                <img src="https://i.ibb.co/Sxh83bf/netflix.png" alt="netflix" style={{ height: "60px", marginTop: '20px' }} />
            </div>
            <div className="col-md-2 col-sm-6 m-auto d-flex justify-content-around">
                <img src="https://i.ibb.co/jHcHcHb/airbnb.png" alt="airbnb" style={{ height: "60px", marginTop: '20px' }} />
            </div>
        </div>
    );
};

export default Links;