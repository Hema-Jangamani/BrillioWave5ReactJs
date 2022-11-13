import React from 'react'
import { useState, useEffect } from "react";
import Contact from '../Contact/Contact';
export default function ContactList() {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setContacts(data));
    }, [])
    return (
        <div className="container">
            {
                contacts.map(item => <Contact contactitem={item} />)
            }
        </div>
    )
}

