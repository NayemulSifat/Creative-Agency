import React, { useContext } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { UserContext } from '../../../App';
import AddService from '../AddService/AddService';
import AdminService from '../AdminService/AdminService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faPlus, faThList } from '@fortawesome/free-solid-svg-icons'

const Admin = () => {
    const [loggedInUser] = useContext(UserContext);

    return (
        <main>
            <div className="d-flex justify-content-between" style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                <Link to='/home'>
                    <img src="https://i.ibb.co/GPkmCwG/logo.png" alt="logo" border="0" style={{ height: '35px' }} />
                </Link>
                <span>{loggedInUser.name}</span>
            </div>
            <Router>
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
                        </div>                    </div>
                    <div className="col-md-8 col-sm-12 m-auto" style={{ backgroundColor: '#E5E5E5', height: "100%" }}>
                        <Route path="/adminServiceList" component={AdminService} />
                        <Route path="/addService" component={AddService} />
                        <Route path="/makeAdmin" component={MakeAdmin} />
                    </div>
                </div>
            </Router>

        </main>
    );
};

export default Admin;