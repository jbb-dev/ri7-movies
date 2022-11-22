import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { consoleMoiLeMot } from '../utils/consoleMe';
import { useError } from '../utils/useError';

const ProfileBis = () => {

    const [user, setUser] = useState({});

    const token = sessionStorage.getItem('token');

    const { myError, saveError } = useError();

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const URL_GET_PROFILE = "https://api-ri7.herokuapp.com/api/users/profile";

    const getProfile = () => {
        axios
        .get(URL_GET_PROFILE, config)
        .then(response => {
            setUser(response.data)
        })
        .catch(err => saveError(err.response.data.error))
    };

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <div>
            <h1>{ myError }</h1>
            <p>Prénom : {user.firstname}</p>
        </div>
    )
}

export default ProfileBis