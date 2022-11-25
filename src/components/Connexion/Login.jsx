import React, {useState, useContext, useEffect} from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MyRoutes } from '../Router';
import { useError } from '../../utils/useError';
import { MyContext } from '../../store/AppContext';
import styled from 'styled-components';

const Container = styled.div`
background-image: url("https://cdn.futura-sciences.com/sources/images/actu/rotation-galaxie-spirale-univers.jpeg");
background-size: cover;
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Error = styled.div`
background-color: ${props => props.noError ? 'transparent' : '#eca900'};
height: 3rem;
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 3rem;
border-radius: 2rem;
`;

const LoginContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #a5c0cc75;
border-radius: 2rem;
padding: 2rem;
`;

const InputContainer = styled.div`
display: flex;
align-items: center;
`;

const Label = styled.label`
width: 15vw;
color: white;
font-weight: bold;
font-size: medium;
`;

const Input = styled.input`
margin-bottom: 1rem;
margin-left: 2rem;
width: 18rem;
height: 3rem;
border-radius: 2rem;
border: none;
padding: 1rem;
`;

const Button = styled.button`
margin-top: 2rem;
width: 14rem;
height: 3rem;
border-radius: 2rem;
border: none;
`;

const Login = () => {

    const navigate = useNavigate();

    const { store, setStore } = useContext(MyContext);
    const { myError, saveError } = useError();

    const LOGIN_URL = 'https://api-ri7.herokuapp.com/api/users/login';

    const login = () => {
        Axios
            .post(LOGIN_URL, {
                email: store.user.email,
                password: store.user.password
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
        <Container >
            <Error noError={myError.length === 0}>{myError}</Error>
            <LoginContainer>
                <InputContainer>
                    <Label>Votre email: </Label>
                    <Input 
                        type='email'
                        value={store.user.email}
                        onChange={(e) => setStore({
                            ...store, 
                            user: {
                                ...store.user, 
                                    email: e.target.value
                                }
                        })}
                    />
                </InputContainer>
                <InputContainer>
                    <Label>Votre mot de passe: </Label>
                    <Input 
                        type='password'
                        value={store.user.password}
                        onChange={(e) => setStore({
                            ...store, 
                            user: {
                                ...store.user, 
                                    password: e.target.value
                                }
                        })}
                    />
                </InputContainer>            
                <Button 
                    onClick={login}
                >
                    SE CONNECTER
                </Button>
            </LoginContainer>
        </Container>
    );
};

export default Login;