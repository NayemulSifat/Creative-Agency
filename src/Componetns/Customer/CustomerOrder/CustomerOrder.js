import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const CustomerOrder = () => {

    const [loggedInUser] = useContext(UserContext);

    const handleOrder = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const orderName = e.target.orderName.value;
        const details = e.target.details.value;
        const price = e.target.price.value;



        const newOrder = {
            name: name,
            email: email,
            orderName: orderName,
            details: details,
            price: price
        }


        fetch('https://afternoon-woodland-35533.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {

             });

             alert('Order successfull')
    }


    return (
        <div>
            <form onSubmit={handleOrder} style={{ width: '80%', margin: 'auto' }}>
                <h3> Order</h3>
                <div className="form-group">
                    <input type='text' name="name" className="form-control" id="exampleFormControlInput2" placeholder="Your name / company's name" required />
                </div>
                <div className="form-group">
                    <input type='email' name="email" className="form-control" id="exampleFormControlInput1" placeholder="Your email address" defaultValue={loggedInUser.email} required />
                </div>
                <div className="form-group">
                    <input type='text' name="orderName" className="form-control" id="exampleFormControlInput1" placeholder="Order name" required />
                </div>
                <div className="form-group">
                    <input type='text' name="details" className="form-control " id="exampleFormControlTextarea1" placeholder="Your message" style={{ height: "400px" }} required />
                </div>
                <div className="d-flex">
                    <div className="form-group">
                        <input type='text' name="price" className="form-control text-center" id="exampleFormControlInput1" placeholder="Price" style={{ width: "50%" }} required />
                    </div>
                    <div className="form-group">
                        <input type='file' className="form-control" id="exampleFormControlInput1" />
                    </div>
                </div>
                <div className="form-group">
                    <input className="btn btn-dark" type="submit" value="send" />
                </div>
            </form>
        </div>
    );
};

export default CustomerOrder;