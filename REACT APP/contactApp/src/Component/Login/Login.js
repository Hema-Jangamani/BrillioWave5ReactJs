import React, { useState } from 'react'
import { useHistory } from 'react-router';
export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginState, setLoginState] = useState(false);
    const history = useHistory();
    function Login() {
        fetch('http://localhost:3001/auth/v1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }).then(res => res.json())
            .then(data =>{
                if (!data.message) {
                    setLoginState(false);
                    localStorage.setItem('token', data.token)
                    history.push('/');
                } else {
                    setLoginState(true);
                }

            });
    }


    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <h2 className="text-center">Login</h2>
                    <div className="mb-2">
                        <input type="text" id="username" onChange={(e)=>setUsername(e.target.value)} className="form-control" placeholder="Username"/>
                    </div>
                    <div className="mb-2">
                        <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password"/>
                    </div>
                    <div className="mb-2">
                        <button className="btn btn-success" id="btnLogin" onClick={Login}>Login</button>
                    </div>
                    <div className="mb-2">
                        {
                            loginState ? <div className="alert alert-danger text-center" role="alert">
                                Invalid Username or Password
                            </div> : <div></div>
                        }

                    </div>

                </div>
            </div>
        </div>
    )
}
