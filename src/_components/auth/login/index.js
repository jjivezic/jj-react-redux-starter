import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { userActions } from "../../../_store/actions/user.actions";

const Login = () => {
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const handleChange = e => {
        setError(false);
        const { name, value } = e.target;
        setUserData(userData => ({ ...userData, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            dispatch(userActions.login(userData));
        } else {
            setError(true);
        }
    }

    const validateForm = () => {
        return userData.email && userData.password;
    }

    return (
        <form onSubmit={handleSubmit} className="auth-form" style={{ textAlign: "center" }}>
            <h6 className="auth-title">Login </h6>
            <section>
                <div className="form-group custom-input">
                    <input id='email' className="form-control" type="text" name="email" onChange={handleChange} placeholder="email" />
                </div>
                <div className="form-group custom-input">
                    <input id='password' className="form-control" type="password" name="password" onChange={handleChange} placeholder="password" />
                </div>
                {error ? <div className="message-alert"><p>All fields are required</p></div> : null}
            </section>
            <button type="submit" className="btn btn-blue" >SIgn in</button>
        </form>
    )
}
export default Login;