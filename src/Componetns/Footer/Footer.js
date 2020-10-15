import React from 'react';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#FBD062', padding: "20px", marginTop: "100px" }}>
            <div className="row">
                <div className="col-md-6 m-auto">
                    <span>
                        <h2>Let us handle your project, professionally.</h2>
                        <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </span>
                </div>
                <div className="col-md-6">
                    <form>
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your email address" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Your name / company's name" />
                        </div>
                        <div className="form-group">
                            <input className="form-control d-flex align-items-start" id="exampleFormControlTextarea1" placeholder="Your message" style={{ height: "400px" }} />
                        </div>
                        <div className="form-group">
                            <input className="btn btn-dark" type="submit" value="send" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="text-center " style={{ marginTop: "50px" }}>
                <h5><small>copyright Orange labs 2020</small></h5>
            </div>
        </div>
    );
};

export default Footer;