import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'


const AdminService = () => {
    const [status, setStatus] = useState('');


    const [allOrder, setAllOrder] = useState([]);
    useEffect(() => {
        fetch('https://afternoon-woodland-35533.herokuapp.com/allOrder')
            .then(res => res.json())
            .then(data => {
                setAllOrder(data)
            })

    }, [])

    const statusHandler = (e) => {
        console.log(e)
        setStatus(e)
    }

    return (
        <div>
            <h2>Service List</h2>
            <table style={{ width: "100%", backgroundColor: "white", borderRadius: "15px" }}>
                <thead>
                    <tr style={{ borderRadius: "10px", backgroundColor: "#E5E5E5", marginTop: "10px" }}>
                        <th style={{ padding: "15px" }}>Name</th>
                        <th style={{ padding: "15px" }}>Email ID</th>
                        <th style={{ padding: "15px" }}>Service</th>
                        <th style={{ padding: "15px" }}>Project Details</th>
                        <th style={{ padding: "15px" }}>Status</th>
                    </tr>
                </thead>
                {
                    allOrder.map(service => <tbody key={service._id}>
                        <tr >
                            <td style={{ padding: "15px" }}>{service.name}</td>
                            <td style={{ padding: "15px" }}>{service.email}</td>
                            <td style={{ padding: "15px" }}>{service.orderName}</td>
                            <td style={{ padding: "15px" }}>{service.details}</td>
                            <td style={{ padding: "15px" }}> <DropdownButton
                                alignRight
                                title={status}
                                id="dropdown-menu-align-right"
                                onSelect={statusHandler}

                            >
                                <Dropdown.Item eventKey="Pending">Pending</Dropdown.Item>
                                <Dropdown.Item eventKey="Cancel">Cancel</Dropdown.Item>
                                <Dropdown.Item eventKey="Accept">Accept</Dropdown.Item>
                            </DropdownButton></td>
                        </tr>
                    </tbody>)
                }

            </table>
        </div>
    );
};

export default AdminService;