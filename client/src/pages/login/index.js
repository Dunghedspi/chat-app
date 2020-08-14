import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../../callApi/User';
import { tosatifyError, tosatifySuccess, tosatifyWarring } from '../../utils/tosatify';
import './styles.css';
const LoginPage = (props) => {
    //get userName from localStorage

    const [userName, setUserName] = useState(() => localStorage.getItem('userName') || '');

    const [password, setPassword] = useState('');

    const history = useHistory();

    const handerSubmit = async (e) => {
        e.preventDefault();
        if (userName && password) {
            try {
                const result = await login({ userName, password });
                console.log(result);
                if (result.status === 200) {
                    tosatifySuccess('Logged in successfully');
                    localStorage.setItem('token', `beare ${result.data}`);
                    localStorage.setItem('userName', userName);
                    history.push('/home');
                }
            } catch (error) {
                tosatifyError(error.message || 'Username or password is incorrect');
                setPassword('');
                console.error(error);
            }
        } else {
            tosatifyWarring('Enter missing information');
        }
    };

    return (
        <div className='login-container'>
            <div className='login-box'>
                <div className='title'>
                    <h1>Login</h1>
                </div>
                <form onSubmit={(event) => handerSubmit(event)} name='loginForm'>
                    <div className='input-fildes'>
                        <label>
                            <i className='fa fa-user' aria-hidden='true'></i>
                        </label>
                        <input
                            type='text'
                            onChange={(event) => setUserName(event.target.value)}
                            placeholder='UserName'
                            value={userName}
                            autoFocus={userName !== '' ? false : true}
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
                            autoFocus={userName !== '' ? true : false}
                            required={true}
                            onKeyPress={(event) =>
                                event.key === 'Enter' ? handerSubmit(event) : ''
                            }
                        />
                    </div>
                </form>
                <div className='btn-group'>
                    <button className='btn-submit' onClick={handerSubmit}>
                        Login
                    </button>
                    <button className='btn-move-signup' onClick={() => history.push('/signup')}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};
export default LoginPage;
