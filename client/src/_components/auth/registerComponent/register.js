import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import userService from '../../../services/user.service';
import { toastOptions } from '../../shared/selectStyle';
import validateEmail from "../../shared/validateEmail";

const Register = (props) => {
    const { t } = useTranslation();
    const history = useHistory();
    const [error, setError] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidPassword, setInvalidPasword] = useState(false);
    const [isCompany, setIsCompany] = useState(true);
    const [userData, setUserData] = useState({
        companyName: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        code: ''
    });

    const handleChange = e => {
        setError(false);
        setInvalidEmail(false);
        setInvalidPasword(false);
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            let data = {
                email: userData.email,
                password: userData.password,
            }
            if (isCompany) {
                data.companyName = userData.companyName
            }
            if (!isCompany) {
                data.code = userData.code;
                data.firstName = userData.firstName;
                data.lastName = userData.lastName;
            }
            await userService.register(data)
            history.push("/");
            props.switchForms('login')
            toast.success("Account is successfully created!", toastOptions);
        }
    }
    const toggleForms = async (type) => {
        setError(false);
        if (type === 'company') {
            setIsCompany(true);
        } else {
            setIsCompany(false);
        }
    }
    const validateForm = () => {
        if (userData.email) {
            if (!validateEmail(userData.email)) {
                setInvalidEmail(true)
                return false
            }
        }
        if (isCompany) {
            let isValid = userData.companyName && userData.password && userData.email;
            if (!isValid) {
                setError(true);
                return isValid;
            };
            if (userData.password.length < 4) {
                setInvalidPasword(true);
                return false;
            }
            return isValid;
        } else {
            let isValid = userData.code && userData.password && userData.email && userData.firstName && userData.lastName;
            if (!isValid) {
                setError(true);
                return isValid;
            };
            if (userData.password.length < 4) {
                setInvalidPasword(true);
                return false;
            }
            return isValid;
        }
    }

    return (
        <form className="auth-form">
            <h6 className="auth-title">{t('register.title')}</h6>

            <section>
                {isCompany ? <div className="form-group custom-input">
                    <img src="/assets/images/user.svg" alt="companyName" />
                    <input id='companyName' className="form-control" type="text" name="companyName" value={userData.companyName} onChange={handleChange} placeholder={t('placeholder.companyName')} />
                </div> : null}
                {!isCompany ? <div className="form-group custom-input">
                    <img src="/assets/images/user.svg" alt="First name" />
                    <input id='firstname' className="form-control" type="text" name="firstName" value={userData.firstName} onChange={handleChange} placeholder={t('placeholder.firstname')} />
                </div> : null}
                {!isCompany ? <div className="form-group custom-input">
                    <img src="/assets/images/user.svg" alt="LastName" />
                    <input id='lastName' className="form-control" type="text" name="lastName" value={userData.lastName} onChange={handleChange} placeholder={t('placeholder.lastname')} />
                </div> : null}
                <div className="form-group custom-input">
                    <img src="/assets/images/email.svg" alt="Email" />
                    <input id="email" className="form-control" type="text" name="email" value={userData.email} onChange={handleChange} placeholder={t('placeholder.email')} />
                </div>
                {!isCompany ? <div className="form-group custom-input">
                    <img src="/assets/images/user.svg" alt="code" />
                    <input id='code' className="form-control" type="text" name="code" value={userData.code} onChange={handleChange} placeholder={t('placeholder.code')} />
                </div> : null}
                <div className="form-group custom-input">
                    <img src="/assets/images/password.svg" alt="Password" />
                    <input id="password" className="form-control" type="password" name="password" value={userData.password} onChange={handleChange} placeholder="•••••••" />
                </div>
                {error ? <div className="message-alert"><p>{t('requiredFields.msg')}</p></div> : null}
                {invalidEmail ? <div className="message-alert"><p>Please enter valid email address!</p></div> : null}
                {invalidPassword ? <div className="message-alert"><p>Password needs to be longer than 3 characters!</p></div> : null}
            </section>
            <button className="btn btn-blue" onClick={(e) => { handleSubmit(e) }}>{isCompany ? `${t('register.company')}` : `${t('register.member')}`}</button>
            <div className="auth-line"><span></span><h6>OR</h6><span></span></div>
            {isCompany ? <button className="btn btn-white" onClick={() => { toggleForms('member') }}>{t('register.code')}</button> : null}
            {!isCompany ? <button className="btn btn-white" onClick={() => { toggleForms('company') }}>{t('register.company')}</button> : null}
            <p className="auth-sub-desc">{t('register.msg')} <span className="c-blue" onClick={() => props.switchForms('login')} ><strong>{t('signIn')}!</strong></span>
            </p>
        </form>
    )
}
export default Register;