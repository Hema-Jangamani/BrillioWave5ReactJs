import React from 'react'
import { Link } from "react-router-dom";
export default function Contact(props) {
    function DeleteContactHandler(id){
        props.DeleteContact(id);
    }
    return (
        <div className="col-md-3">
            <div className="card">
                <div className="card-body">
                    <i className="far fa-times-circle fa-lg float-end text-danger" onClick={DeleteContactHandler.bind(this, props.id)}></i>
                    <Link to={`/edit/${props.id}`}><i class="fas fa-pencil-alt fa-lg float-end text-primary px-2"></i></Link>
                    <h5 className="card-title">{props.fname} {props.lname}</h5>
                    <p className="card-text">{props.email}</p>
                    <p className="card-text">{props.city}</p>
                    <p className="card-text">{props.phone}</p>
                </div>
            </div>
        </div>
    )
}

