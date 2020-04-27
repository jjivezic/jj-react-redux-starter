import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from 'react-redux';
//import { useHistory } from 'react-router-dom';
import userService from '../../../_services/user.service';
import { sessionService } from '../../../_sessionService/storage';
import { userActions } from "../../../_store/actions/user.actions";

const Login = () => {
    //const history = useHistory();
    const [error, setError] = useState(false);
    //const loggingIn = useSelector(state => state.auth.loggingIn);
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
            // let response = await userService.login(userData);
            // sessionService.create(response);
           // setUser(sessionService.getUser());
            // if (sessionService.isAuth()) {
            //     if(response.user.isCompany){
            //         history.push(`/dashboard/company/${response.user._id}`);
            //     }else{
            //         history.push("/dashboard/folder");
            //     }
              
            //     toast.success("User is successfully loged !", toastOptions);
            // }
        } else {
            setError(true);
        }
    }

    const validateForm = () => {
        return userData.email && userData.password.length > 3;
    }

    return (
        <form onSubmit={handleSubmit} className="auth-form">
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