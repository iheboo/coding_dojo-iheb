import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()

    const [errors, setErrors] = useState({})
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })
        // handle onChange for login inputs
        const handleLoginChange = (e) => {
            e.preventDefault();
            setLogin({
                ...login,
                [e.target.name]: e.target.value
            })
        }

    const loginHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/login", login, { withCredentials: true })
            .then(res => {
                console.log("Cookie be like", document.cookie);
                console.log("Data be like", res.data);
                navigate('/movies');
            })
            .catch(err => {console.log("lkjhlh",err.response.data);
            setErrors(
                
                err.response.data
            )
        
        });

    }
  return (
    <form className='col-8' onSubmit={loginHandler}>
    <div className="mb-3">
        <label className="form-label">Email address</label>
        <input name="email" onChange={handleLoginChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else 😅</div>
    </div>
    <div className="mb-3">
        <label className="form-label">Password</label>
        <input name="password" onChange={handleLoginChange} type="password" className="form-control" id="exampleInputPassword1" />
    </div>

    <button type="submit" className="btn btn-primary">Login</button>
    {errors.msg}
</form>
  )
}

export default Login