import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const CustomerReview = () => {

    const [loggedInUser] = useContext(UserContext);
    
        const handleReview = (e) => {
            const name = e.target.name.value;
            const companyname = e.target.companyname.value;
            const designation = e.target.designation.value;
            const review = e.target.review.value;
    
    
    
            const newReview = {
                name: name,
                companyname: companyname,
                designation: designation,
                review: review,
            }
    
    
            fetch('http://localhost:8080/addReview', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newReview)
            })
                .then(res => res.json())
                .then(data => {
    
                 });
    
                 alert('Thank You for Reviewing Us')
        }
    return (
        <div>
            <form onSubmit={handleReview} style={{width: '80%', margin: 'auto'}}>
                <h3> Review </h3>
                <div className="form-group">
                    <input type="text" name="name" className="form-control" id="exampleFormControlInput2" placeholder="Your name" defaultValue={loggedInUser.name} required/>
                </div>
                <div className="form-group">
                    <input type="text" name="companyname"className="form-control" id="exampleFormControlInput1" placeholder="Your company name" required/>
                </div>
                <div className="form-group">
                    <input type="text" name="designation" className="form-control" id="exampleFormControlInput1" placeholder="Designation" required/>
                </div>
                <div className="form-group">
                    <input  type="text" name="review" className="form-control" id="exampleFormControlTextarea1" placeholder="Your Review" style={{ height: "200px" }} required/>
                </div>
                <div className="form-group">
                    <input className="btn btn-dark" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default CustomerReview;