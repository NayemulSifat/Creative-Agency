import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faPlus, faThList, faShoppingCart, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import AddService from '../Admin/AddService/AddService';
import AdminService from '../Admin/AdminService/AdminService';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import CustomerOrder from '../Customer/CustomerOrder/CustomerOrder';
import CustomerReview from '../Customer/CustomerReview/CustomerReview';
import CustomerService from '../Customer/CustomerService/CustomerService'
import { UserContext } from '../../App';


const Dashboard = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://afternoon-woodland-35533.herokuapp.com/findAdmin?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    const test = {...loggedInUser}
                    test.setAdmin = true;
                    setLoggedInUser(test)
                }
                else {
                    const test = {...loggedInUser}
                    test.setAdmin = false;
                    setLoggedInUser(test)
                }
            });
    }, [])

    return (
        <main>
            <div className="d-flex justify-content-between" style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                <Link to='/home'>
                    <img src="https://i.ibb.co/GPkmCwG/logo.png" alt="logo" border="0" style={{ height: '35px' }} />
                </Link>
                <span>{loggedInUser.name}</span>
            </div>
            {
                loggedInUser.setAdmin ? <Router>
                    <div className="row" style={{ marginTop: "50px" }}>
                        <div className="col-md-3 col-sm-12" style={{ marginLeft: "20px" }}>
                            <div style={{ padding: "10px" }}>
                                <Link to='/adminServiceList'> <FontAwesomeIcon icon={faThList} /> Service List</Link>
                            </div>
                            <div style={{ padding: "10px" }}>
                                <Link to='/addService'> <FontAwesomeIcon icon={faPlus} /> Add Service </Link>
                            </div>
                            <div style={{ padding: "10px" }}>
                                <Link to='/makeAdmin'> <FontAwesomeIcon icon={faUserPlus} /> Make Admin </Link>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-12 m-auto" style={{ backgroundColor: '#E5E5E5', height: "100%" }}>
                            <Route path="/adminServiceList" component={AdminService} />
                            <Route path="/addService" component={AddService} />
                            <Route path="/makeAdmin" component={MakeAdmin} />
                        </div>
                    </div>
                </Router> :
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
            }

        </main>
    );
};

export default Dashboard;