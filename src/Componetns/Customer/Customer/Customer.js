import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import CustomerOrder from '../CustomerOrder/CustomerOrder';
import CustomerReview from '../CustomerReview/CustomerReview';
import CustomerService from '../CustomerService/CustomerService'
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCommentAlt, faThList } from '@fortawesome/free-solid-svg-icons'



const Customer = () => {

    const [loggedInUser] = useContext(UserContext);


    return (
        <main>
            <div className="d-flex justify-content-between" style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                <Link to='/home'>
                    <img src="https://i.ibb.co/GPkmCwG/logo.png" href="/home" alt="logo" border="0" style={{ height: '35px' }} />
                </Link>
                <span>{loggedInUser.name}</span>
            </div>
            <Router>
                <div className="row" style={{ marginTop: "50px" }} >
                    <div className="col-md-3 col-sm-12 " style={{ marginLeft: "20px" }}>
                        <div style={{ padding: "10px" }}>
                            <Link to='/CustomerOrder'> <FontAwesomeIcon icon={faShoppingCart} /> Order</Link>
                        </div>
                        <div style={{ padding: "10px" }}>
                            <Link to='/ServiceList'> <FontAwesomeIcon icon={faThList} /> Service List</Link>
                        </div>
                        <div style={{ padding: "10px" }}>
                            <Link to='/Review'> <FontAwesomeIcon icon={faCommentAlt} /> Review </Link>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-12 m-auto" style={{ backgroundColor: '#E5E5E5', height: "100%" }}>
                        <Route path="/CustomerOrder" component={CustomerOrder} />
                        <Route path="/ServiceList" component={CustomerService} />
                        <Route path="/Review" component={CustomerReview} />

                    </div>


                </div>
            </Router>
        </main>
    );
};

export default Customer;