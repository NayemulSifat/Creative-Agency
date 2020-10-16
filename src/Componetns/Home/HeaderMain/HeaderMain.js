import React from 'react';

const HeaderMain = () => {
    return (
        <main style={{marginTop: "40px"}}>
            <div className="row mt-50px">
                <div className="col-md-4 col-sm-6 m-auto">
                    <h1 style={{ fontSize: '48px' }}>Let's Grow Your Brand To The Next Level</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro commodi voluptas perferendis saepe maxime? Enim similique quasi est ipsam accusantium dignissimos, voluptatum corrupti molestias odio adipisci consectetur reiciendis natus reprehenderit.</p>
                    <button className="btn  btn-dark">Hire Us</button>
                </div>
                <div className="col-md-6 col-sm-6 m-auto">
                    <img src="https://i.ibb.co/4S36rvb/Frame.png" alt="Frame" style={{ width: "100%" }} />
                </div>
            </div>
            
        </main>
    );
};

export default HeaderMain;