import React, {useState} from 'react'
import { useHistory } from 'react-router';
import {v4 as uuidv4} from 'uuid';
export default function AddContact(props) {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');

    let history=useHistory();
    function AddContactHandler() {
        fetch('http://localhost:3002/contacts',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({id:uuidv4(),fname,lname,email,city,phone})
    }).then(res=>{
        history.push('/');
    });
    }
    

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <h2 className="text-center">Add Contact</h2>
                    <div className="mb-2">
                        <input id="txtFname" type="text" onChange={(e)=>setFname(e.target.value)} className="form-control" placeholder="First Name"/>
                    </div>
                    <div className="mb-2">
                        <input id="txtLname" type="text" onChange={(e)=>setLname(e.target.value)} className="form-control" placeholder="Second Name"/>
                    </div>
                    <div className="mb-2">
                        <input id="txtEmail" type="text" onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email"/>
                    </div>
                    <div className="mb-2">
                        <input id="txtCity" type="text" onChange={(e)=>setCity(e.target.value)} className="form-control" placeholder="City"/>
                    </div>
                    <div className="mb-2">
                        <input id="txtPhone" type="text" onChange={(e)=>setPhone(e.target.value)} className="form-control" placeholder="Phone"/>
                    </div>
                    <div className="mb-2">
                        <button id="btnAdd" data-testid="btnAdd" type="button" className="btn btn-secondary" onClick={AddContactHandler}>Add Contacts</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
