import React from 'react'

export default function Contact(props) {
    return (
        <div>
            <div className="card">
               <div classNameName="card-body">
                   <h5 className="card-title">{props.contactitem.name}</h5>
                   <p className="card-text">{props.contactitem.email}</p>
                   <p className="card-text">{props.contactitem.phone}</p>    
                </div>
            </div>
        </div>
    )
}
