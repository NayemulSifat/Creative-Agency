import React, { useEffect, useState } from 'react';

const AdminService = () => {
    const [allOrder, setAllOrder] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/allOrder')
            .then(res => res.json())
            .then(data => {
                setAllOrder(data)
            })

    }, [])

    return (
        <div>
            <h2>Service List</h2>
            <table  style={{width: "100%", backgroundColor: "white", borderRadius: "15px"}}>
                <thead>
                <tr style={{ borderRadius: "10px", backgroundColor: "#E5E5E5", marginTop: "10px"}}>
                    <th style={{ padding: "15px"}}>Name</th>
                    <th style={{ padding: "15px"}}>Email ID</th>
                    <th style={{ padding: "15px"}}>Service</th>
                    <th style={{ padding: "15px"}}>Project Details</th>
                    <th style={{ padding: "15px"}}>Status</th>
                </tr>
                </thead>
                {
                    allOrder.map(service => <tbody key={service._id}>
                        <tr >
                        <td style={{ padding: "15px"}}>{service.name}</td>
                        <td style={{ padding: "15px"}}>{service.email}</td>
                        <td style={{ padding: "15px"}}>{service.orderName}</td>
                        <td style={{ padding: "15px"}}>{service.details}</td>
                        <td style={{ padding: "15px"}}>pending</td>
                    </tr>
                    </tbody>)
                }

            </table>
        </div>
    );
};

export default AdminService;