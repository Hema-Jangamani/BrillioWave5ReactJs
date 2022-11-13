import React, { useState,useEffect } from 'react'
import Contact from '../Contact/Contact'
import AddContact from '../AddContact/AddContact';
export default function ContactList() {
    const [contacts, setContacts] = useState([]);
    function AddContactFunction(contact) {
        setContacts([...contacts, contact]);
    }

    useEffect(() => {
       fetch('http://localhost:3002/contacts')
       .then(res=>res.json())
       .then(data=>setContacts(data));
    }, [])
    
    function DeleteContactFunction(id) {
        let filteredcontacts = contacts.filter(x => x.id !== id);
        setContacts(filteredcontacts);
        fetch(`http://localhost:3002/contacts/${id}`,{
            method:'DELETE'
        })
    }
    return (
        <div className="container mt-3">
        
            <div className="row">
                <h2 id="mainheading">Contact List</h2>
                {
                    contacts.map(item => <Contact DeleteContact={DeleteContactFunction} key={item.phone} id={item.id} fname={item.fname} lname={item.lname} 
                        email={item.email} city={item.city} phone={item.phone} />)
                }
            </div>
        </div>
    )
}
