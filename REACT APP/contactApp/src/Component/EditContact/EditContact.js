import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom';
export default function EditContact() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    let {id}=useParams();
    useEffect(() => {
       fetch(`http://localhost:3002/contacts/${id}`)
       .then(res=>res.json())
       .then(data=>{
           setFname(data.fname)
           setLname(data.lname)
           setEmail(data.email)
           setCity(data.city)
           setPhone(data.phone)
        });
        
    }, [])

    let history=useHistory();
    function EditContact() {
        fetch(`http://localhost:3002/contacts/${id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({fname,lname,email,city,phone})
    }).then(res=>{
        history.push('/');
    });
    }
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <h2 className="text-center">Edit Contact</h2>
                    <div className="mb-2">
                        <input type="text" onChange={(e)=>setFname(e.target.value)} value={fname} className="form-control" placeholder="First Name"/>
                    </div>
                    <div className="mb-2">
                        <input type="text" onChange={(e)=>setLname(e.target.value)} value={lname} className="form-control" placeholder="Second Name"/>
                    </div>
                    <div className="mb-2">
                        <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email} className="form-control" placeholder="Email"/>
                    </div>
                    <div className="mb-2">
                        <input type="text" onChange={(e)=>setCity(e.target.value)} value={city} className="form-control" placeholder="City"/>
                    </div>
                    <div className="mb-2">
                        <input type="text" onChange={(e)=>setPhone(e.target.value)} value={phone} className="form-control" placeholder="Phone"/>
                    </div>
                    <div className="mb-2">
                        <button data-testid="btnAdd" onClick={EditContact} type="button"  className="btn btn-secondary">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
