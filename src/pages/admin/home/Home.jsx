import React from 'react';
import { Layout, Menu, Dropdown, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import useLayout from '../../../common_hook/layout_hook';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { listTitle } from '../../../constants/list_menu';
import useHome from './home.hook';
import Customer from './customer/Customer';
import { listRoute } from '../../../constants/list_route';
import { resetAuthenInformation } from '../authentication/auth.slice';
import { localSpace } from '../../../services/local/local_space';
import CustomerForm from './customer/CustomerForm';
import { keyLocal } from '../../../constants/key_local';
const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const { Header, Footer, Sider, Content } = Layout;




function Home() {
    const history = useHistory();
    const dispatch = useDispatch();

    const { path, url } = useRouteMatch()
    const { layoutPage, selectedMenuItem } = useHome();
    const [openKeys, setOpenKeys] = React.useState(['sub1']);

    const username = localSpace?.getData(keyLocal.AUTHEN)?.account?.email||'';

    const onOpenChange = keys => {
      
    };

    const logout = ()=>{
        dispatch(resetAuthenInformation());
        localSpace.clearData();
        history.push('')
    }


    const menu = (
        <Menu>
            <Menu.Item onClick={logout}>Logout</Menu.Item>
        </Menu>

    );
    const genMenu = () =>

        listTitle.map(item => {
            return (
                <>

                    <Menu.Item
                        icon={item.icon} key={item.key}
                    >
                        <Link to={`/admin/${item.key}`}>{item.title}</Link>
                    </Menu.Item>
                </>
            )
        })


    return (

        <Layout style={{ position: 'relative', overflow: 'auto' }} className='home-admin'>
            <Sider
                className='menu-sider'

                trigger={true}
            >
                <Header className='header-menu-sider'>
                    <img src="/assets/icon/bnk.png" />
                    <span>Admin</span>
                </Header>
                <Menu mode="inline" openKeys={listTitle.map(title => title.key)} onOpenChange={onOpenChange}>
                    {genMenu()}
                </Menu>
            </Sider>
            <Layout>
                <Header className='header-layout'>
                    <p className='header-title' >{layoutPage.label}</p>
                    <Dropdown.Button overlay={menu} placement="bottomCenter" icon={<UserOutlined />}>
                        {username}
                    </Dropdown.Button>
                </Header>
                <Content className='content-page'>
                    <Switch>
                        <Route key={listRoute.DASHBOARD_ADMIN} path={listRoute.DASHBOARD_ADMIN} >
                            <div>this is dashboard page</div>
                        </Route>
                        
                        <Route key={listRoute.CUSTOMER_ADMIN} path={listRoute.CUSTOMER_ADMIN_FORM}>
                            <CustomerForm/>
                        </Route>
                        <Route key={listRoute.CUSTOMER_ADMIN} path={listRoute.CUSTOMER_ADMIN_FORM_DETAIL_UPDATE}>
                            <CustomerForm/>
                        </Route>

                        <Route key={listRoute.CUSTOMER_ADMIN} path={listRoute.CUSTOMER_ADMIN}>
                            <Customer/>
                        </Route>
                      
                    </Switch>



                </Content>
            </Layout>
        </Layout>

    );

}

export default Home;