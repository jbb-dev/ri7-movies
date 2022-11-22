import React, {useState, useContext, useEffect} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MyRoutes } from '../Router';
import { useError } from '../../utils/useError'
import { MyContext } from '../../store/AppContext'

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '4rem',
    justifyContent: 'center'
};

const inputContainerStyle = {
    display: 'flex'
}

const inputLabelStyle = {
    width: '10rem'
}

const inputStyle = {
    width: '20rem'
} 

const buttonStyle = {
    marginTop: '2rem',
    width: '10rem',
    backgroundColor: 'green'
}

const Login = () => {

    const navigate = useNavigate();

    const { store, setStore } = useContext(MyContext);
    const { myError, saveError } = useError();

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const LOGIN_URL = 'https://api-ri7.herokuapp.com/api/users/login';

    const login = () => {
        Axios
            .post(LOGIN_URL, {
                email: user.email,
                password: user.password
            })
            .then(resp => {
                sessionStorage.setItem('token', resp.data.token);
                setStore({...store, isUserAuth: true})
            })
            .catch(err => saveError(err.response.data.error))
    };

    useEffect(() => {
        if (store.isUserAuth)
        {
            navigate(MyRoutes.MOVIES);
        }
    }, [store.isUserAuth]);
    
    return (
        <div style={containerStyle}>
            <h1>{myError}</h1>
            <div style={inputContainerStyle}>
                <label style={inputLabelStyle}>Votre email</label>
                <input 
                    type='email'
                    value={user.login}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                    style={inputStyle}
                />
            </div>
            <div style={inputContainerStyle}>
                <label style={inputLabelStyle}>Votre mot de passe</label>
                <input 
                    type='password'
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})}
                    style={inputStyle}
                />
            </div>
            <button 
                onClick={login}
                style={buttonStyle}
            >
                SE CONNECTER
            </button>
        </div>
    );
};

export default Login;