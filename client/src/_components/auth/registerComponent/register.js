import React, { useState } from "react";
//import { useTranslation } from 'react-i18next';
// import { toast } from 'react-toastify';


const Register = (props) => {
    // const { t } = useTranslation();
    // const history = useHistory();
    const [error, setError] = useState(false);
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleChange = e => {
        setError(false);
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {

        }
    }
    const validateForm = () => {
        return userData.email && userData.password && userData.firstName && userData.lastName;
    }

    return (
        <form className="auth-form">
            <h6 className="auth-title">Register form</h6>
            <section>
                <div className="form-group custom-input">
                    <input id='firstname' className="form-control" type="text" name="firstName" value={userData.firstName} onChange={handleChange} placeholder="firstname" />
                </div>
                <div className="form-group custom-input">
                    <input id='lastName' className="form-control" type="text" name="lastName" value={userData.lastName} onChange={handleChange} placeholder="Lastname" />
                </div>
                <div className="form-group custom-input">
                    <input id="email" className="form-control" type="text" name="email" value={userData.email} onChange={handleChange} placeholder="email" />
                </div>
                <div className="form-group custom-input">
                    <input id="password" className="form-control" type="password" name="password" value={userData.password} onChange={handleChange} placeholder="•••••••" />
                </div>
                {error ? <div className="message-alert"><p>All fields are required</p></div> : null}
                {invalidEmail ? <div className="message-alert"><p>Please enter valid email address!</p></div> : null}
                {invalidPassword ? <div className="message-alert"><p>Password needs to be longer than 3 characters!</p></div> : null}
            </section>
            <button className="btn btn-blue" onClick={(e) => { handleSubmit(e) }}>Register</button>
        </form>
    )
}
export default Register;