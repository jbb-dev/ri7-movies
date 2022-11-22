import React from 'react';
import { Menu } from 'antd';
import { 
    AppstoreOutlined, 
    HomeOutlined,
    SettingOutlined 
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { MyRoutes } from './Router';


const centerStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const Header = (props) => {

    let navigate = useNavigate();

    const items = [
        { 
            label: 'Films', 
            key: 'films',
            icon: <AppstoreOutlined style={{ fontSize: '2em'}} />,
            onClick: () => navigate(MyRoutes.MOVIES) 
        },
        { 
            label: 'Mon profil', 
            key: 'profil',
            icon: <SettingOutlined style={{ fontSize: '2em'}} />, 
            onClick: () => navigate(MyRoutes.PROFILE)

        },
      ];
      

    return (
        <Menu
            style={centerStyle} 
            items={items} 
            mode="vertical"
        />
    );
};

export default Header;