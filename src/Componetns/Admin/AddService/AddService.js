import React, { useState } from 'react';

const AddService = () => {


    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null);

    const handleInfo = (e) => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)

    }

    const handleFile = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }

    const handleAddService = (e) => {
        e.preventDefault();


        const formData = new FormData();
        formData.append('file', file);
        formData.append('serviceTitle', info.serviceTitle);
        formData.append('serviceDiscription', info.serviceDiscription);


        fetch('http://localhost:8080/addServices',{
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {

             });
             alert("File added successfully")

            }
    return (
        <div>
            <h3> Add Service </h3>
            <form onSubmit={handleAddService} style={{width: '80%', margin: 'auto'}}>
                
                <div className="form-group">
                    <label htmlFor="">Service Title</label>
                    <input onBlur={handleInfo} type="text" name="serviceTitle" className="form-control" placeholder="Service Title" required/>
                </div>
                <div className="form-group">
                <label htmlFor="">Service Discrption</label>
                    <input onBlur={handleInfo} type="text"name="serviceDiscription" className="form-control" placeholder="Type Your Discription" style={{ height: "200px" }} required/>
                </div>
                <div className="form-group">
                    <input onChange={handleFile} type="file" className="form-control" />
                </div>
                <div className="form-group">
                    <input  className="btn btn-success" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default AddService;