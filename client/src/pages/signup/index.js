import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signUp } from '../../callApi/User';
import { tosatifyError, tosatifySuccess, tosatifyWarring } from '../../utils/tosatify';
import './styles.css';
const SignUpPage = (props) => {
    //get userName from localStorage

    const [userName, setUserName] = useState('');

    const [password, setPassword] = useState('');

    const [cfPass, setCfPass] = useState('');

    const handerSubmit = async (event) => {
        event.preventDefault();
        try {
            if (password === cfPass && password && userName) {
                const result = await signUp({ userName, password });
                if (result.status === 201) {
                    tosatifySuccess('Sign Up Success');
                    history.push('/login');
                }
            } else {
                if (password !== cfPass) {
                    tosatifyWarring('Confirme-Password not match');
                } else {
                    tosatifyWarring('Enter missing information');
                }
            }
        } catch (error) {
            tosatifyError(error.message);
        }
    };

    const history = useHistory();

    return (
        <div className='login-container'>
            <div className='login-box'>
                <div className='title'>
                    <h1>Sign Up</h1>
                </div>
                <form onSubmit={(event) => handerSubmit(event)} name='loginForm'>
                    <div className='input-fildes'>
                        <label>
                            <i className='fa fa-user' aria-hidden='true'></i>
                        </label>
                        <input
                            type='text'
                            value={userName}
                            onChange={(event) => setUserName(event.target.value)}
                            placeholder='UserName'
                            autoFocus={true}
                            required={true}
                        />
                    </div>
                    <div className='input-fildes'>
                        <label>
                            <i className='fa fa-lock' aria-hidden='true'></i>
                        </label>
                        <input
                            type='password'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder='Password'
                            required={true}
                        />
                    </div>
                    <div className='input-fildes'>
                        <label>
                            <i className='fa fa-lock' aria-hidden='true'></i>
                        </label>
                        <input
                            type='password'
                            value={cfPass}
                            onChange={(event) => setCfPass(event.target.value)}
                            placeholder='confirme-Password'
                            required={true}
                        />
                    </div>
                </form>
                <div className='btn-group'>
                    <button className='btn-submit' onClick={handerSubmit}>
                        Create Account
                    </button>
                    <button className='btn-move-signup' onClick={() => history.push('/login')}>
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
};
export default SignUpPage;
