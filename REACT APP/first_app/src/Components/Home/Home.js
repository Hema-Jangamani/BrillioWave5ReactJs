import { useState } from "react";

function Home(){
    const[username, setUsername]=useState('John');
    const[contact, setContact]=useState([
        {
            name:'John',
            email:'john@gmail.com',
            age:25
        },
        {
            name:'Peter',
            email:'peter@gmail.com',
            age:26
        },
        {
            name:'Steve',
            email:'steve@gmail.com',
            age:27
        }
    ]);

    function ChangeState(){
        setUsername('Peter');
    }

    function ChangeContact(){
        let newContact={
            name:'Mary',
            email:'mary@gmail.com',
            age:28
        }
        setContact([...contact,newContact]);
    }
    return(
        <div className="container">
            <h1>Welcome {username}</h1>
            <button onClick={ChangeState}>Change State</button>
            {
                contact.map(item=>
                    <div>
                        <h3>{item.name}</h3>
                        <p>{item.email}</p>
                        <p>{item.age}</p>
                    </div>)
            }
            <button onClick={ChangeContact}>Add Contact</button>
        </div>
    )
}
export default Home;