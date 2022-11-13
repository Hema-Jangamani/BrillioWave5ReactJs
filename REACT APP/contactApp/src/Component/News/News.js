import React, { useEffect } from 'react'

export default function News() {
    useEffect(() => {
        fetch(' http://localhost:3001/api/v1/news ',{
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res=>res.json())
        .then(data=>console.log(data));
       
    }, [])
    return (
        <div>
            
        </div>
    )
}
