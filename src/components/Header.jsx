import React from 'react';
import { Menu } from 'antd';
import { 
    AppstoreOutlined, 
    HomeOutlined,
    SettingOutlined 
} from '@ant-design/icons';

const items = [
    { 
        label: 'Home', 
        key: 'home',
        icon: <HomeOutlined style={{ fontSize: '2em'}} />
    },
    { 
        label: 'Films', 
        key: 'films',
        icon: <AppstoreOutlined style={{ fontSize: '2em'}} />, 
    },
  ];

const centerStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center'
};

const Header = () => {
    return (
        <Menu
            style={centerStyle} 
            items={items} 
            mode="horizontal"
        />
    );
};

export default Header;