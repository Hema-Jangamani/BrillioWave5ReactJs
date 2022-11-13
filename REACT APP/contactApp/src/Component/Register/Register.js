import React from 'react'

export default function Register() {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <h2 className="text-center">Register Here</h2>
                    <div className="mb-2">
                        <input type="text" className="form-control" placeholder="Username"/>
                    </div>
                    <div className="mb-2">
                        <input type="password" className="form-control" placeholder="Password"/>
                    </div>
                    <div className="mb-2">
                        <button className="btn btn-success">Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
