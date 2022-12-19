import React, { useState } from 'react';
import axios from 'axios';
import Login from './Login';
const Landing = (props) => {

    const [register, setRegister] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })


    const [errors, setErrors] = useState({
        register: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
    })
    // ------------------------------------

    // handle onChange for registre inputs
    const handleRegisterChange = (e) => {
        e.preventDefault();
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        })
    }


    // -----------------------------------

    //=========================
    // when forms are submitted
    // ========================
    // Handle register form onSumbit 
    const registerHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/register", register, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                setRegister({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                })
                setErrors({
                    register: {
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: "",
                        confirmPassword: ""
                    },

                })
            })
            .catch(err => setErrors({
                ...errors,
                register: err.response.data
            }))


    }
    // Handle login form onSumbit
    



    return (
        <div>
            <div className="container ">
                <div className="row mt-3">
                    {/* Register Section */}
                    <div className="register col bg-light ">
                        <h2>Register</h2>
                        <form className='col-8' onSubmit={registerHandler}>
                            <div className="mb-3">
                                <label className="form-label">First name</label>
                                <input name="firstName" onChange={handleRegisterChange} type="text" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Last name</label>
                                <input name="lastName" onChange={handleRegisterChange} type="text" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input name="email" onChange={handleRegisterChange} type="email" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input name="password" onChange={handleRegisterChange} type="password" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Confirm password</label>
                                <input name="confirmPassword" onChange={handleRegisterChange} type="password" className="form-control" />
                            </div>

                            <button type="submit" className="btn btn-success">Register</button>
                            {errors.register ? Object.entries(errors.register).map(([key, value], index) => value ? <p style={{ color: "red" }} key={index}>{value.message}</p> : null) : null}
                        </form>
                    </div>
                    {/* // empty col div for spacing */}
                    <div className="col-3"></div>
                    {/* Login Section */}
                    <div className="login col bg-light">
                        <h2>Login</h2>
                        <Login/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing