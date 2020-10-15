import React from 'react';

const MakeAdmin = () => {

    const handleAddAdmin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const adminEmail = {
            email: email
        }

        fetch('http://localhost:8080/makeAdmin',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(adminEmail)
        })
            .then(res => res.json())
            .then(data => {

             });

             alert('New Admin Added Successfully')
            }
    return (
        <div>
            <h3>Make Admin</h3>
            <form onSubmit={handleAddAdmin} style={{width: '80%', margin: 'auto'}}>
                
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email"className="form-control" id="exampleFormControlInput2" placeholder="Admin's email" style={{width: "40%"}} required />
                </div>
                <div className="form-group">
                    <input className="btn btn-success" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default MakeAdmin;