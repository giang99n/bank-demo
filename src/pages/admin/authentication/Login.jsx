import { Form, Input, Button, Typography, Spin } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import React, { Component }  from 'react';

import useAuth from './auth.hook';

function Login() {

    const { onFinish, onFinishFailed, authen } = useAuth();
    return (
     
            <div className='login-page'>
                <div className="focus-page">
                    <Typography.Title level={3}>Đăng nhập</Typography.Title>
                    <img className='logo-bnk' src='/assets/icon/bnk.png'></img>
                    <Form
                        name="basic"
                        // initialValues={{
                        //     remember: true,
                        // }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item

                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Không được bỏ trống tên đăng nhập!',
                                },
                            ]}
                        >
                            <Input placeholder="Email" prefix={<UserOutlined />} />

                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Không được bỏ trống mật khẩu!',
                                },
                            ]}
                        >
                            <Input.Password placeholder="Mật khẩu" prefix={<LockOutlined />} />
                        </Form.Item>



                        <Form.Item

                        >
                            <Button type="primary" htmlType="submit">
                                Đăng nhập
                            </Button>
                        </Form.Item>

                        <Link >Đến trang đăng ký</Link>
                    </Form>
                </div>

            </div>
      
    );


}

export default Login;