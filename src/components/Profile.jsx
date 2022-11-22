import React, { useState, useEffect } from 'react';
import { UserOutlined } from '@ant-design/icons';
import Axios from 'axios';
import {
  Form,
  Input,
  Button,
  DatePicker,
  InputNumber,
  Avatar,
  Row,
  Col
} from 'antd';
const { TextArea } = Input;

const Profile = () => {

    const PROFILE_URL = 'https://api-ri7.herokuapp.com/api/users/profile';

    const [user, setUser] = useState({
        email: "",
        firstname: "",
        lastname: "",
        biography: "",
        postalCode: "",
        city: "",
        birthdate: "",
        avatar: "",
    });

    const getProfile = () => {
        Axios.get(PROFILE_URL, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(resp => setUser(resp.data))
        .catch(err => console.log("error during get profile : ", err))
    };

    const updateProfile = () => {
        Axios.put(PROFILE_URL, user, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(resp => setUser(resp.data))
        .catch(err => console.log("error during get profile : ", err))
    };

    const handleChange = (e) => {
        const value = e.target.value;
        const inputName = e.target.name;
        setUser({...user, [inputName]: value});
    };

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <Col>
        <Row type="flex" justify="center" align="middle" style={{minHeight: '100vh'}}>
            <Form

                labelCol={{span: 4,}}
                wrapperCol={{span: 14}}
                layout="horizontal"
                style={{marginTop: '5rem', justifyContent: 'center', height: '100%', width: '85vw'}}
            >
                    <Avatar size="large" icon={<UserOutlined />} />
                    <Form.Item label="Prénom">
                    <Input 
                        value={user.firstname}
                        name='firstname'
                        onChange={handleChange}
                        style={{width: '50vw'}}
                    />
                </Form.Item>
                <Form.Item label="Nom">
                    <Input 
                        value={user.lastname}
                        name='lastname'
                        onChange={handleChange}
                        style={{width: '50vw'}}
                    />
                </Form.Item>
                <Form.Item label="Date d'anniversaire">
                    <DatePicker 
                        name='birthdate'
                        value={user.birthdate}
                        onChange={handleChange}
                        style={{width: '50vw'}}
                    />
                </Form.Item>
                <Form.Item label="Code postal">
                    <InputNumber 
                        name='postalCode'
                        value={user.postalCode}
                        onChange={handleChange}
                        style={{width: '50vw'}}
                    />
                </Form.Item>
                <Form.Item label="Biographie">
                    <TextArea 
                        rows={4} 
                        name='biography'
                        value={user.biography}
                        onChange={handleChange}
                        style={{width: '50vw'}}
                    />
                </Form.Item>
                <Form.Item label="Button">
                    <Button onClick={updateProfile}>
                        Enregistrer
                    </Button>
                </Form.Item>
            </Form>
        </Row>
        </Col>
    );
};

export default Profile;