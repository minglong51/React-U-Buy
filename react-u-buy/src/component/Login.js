import React, {Component} from 'react';
import {Form, Icon, Input, Button, message, Tabs, Upload} from 'antd';
import {Link} from 'react-router-dom';
import {API_ROOT} from '../constants';
import {AlipayCircleOutlined, TaobaoCircleOutlined, WeiboCircleOutlined} from '@ant-design/icons';
import {Register} from './Register';

const {TabPane} = Tabs;

class NormalLoginForm extends Component {
    state = {
        hasSignUp: true
    };
    handleLogin = e => {
        this.setState(pre => ({
            hasSignUp: !pre.hasSignUp
        }))

    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                let formData = new FormData()
                formData.append("username", values.username);
                formData.append( "password", values.password);
                fetch(`/login`, {
                    method: 'POST',
                    body: formData
                })
                    .then((response) => {
                        console.log("log in");
                        console.log(response)
                        if (response.ok) {
                            return response.json();
                        } else {
                            throw new Error("ERROR");
                        }
                    })
                    .then((data) => {
                        console.log(data.user);
                        this.props.handleLoginSucceed(data.user);
                        message.success('Login succeed!');

                        //step4: 登录成功，保存token -> 用于实现持久登录
                    })
                    .catch((err) => {
                        console.log(err);
                        message.error('Login failed.');
                    });
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className={"login-register-page"}>
                <p className={"login-register-subtitle"}> OptUbuy</p>
                <div className={"login-register-line"}></div>
                <p className={"login-register-title"}>Game Recommendation</p>

                <div className={"login-register-rainbow"}></div>
                <div className={"login-register-arcade"}></div>
                <div className={"login-register-memphis"}></div>

                <div className={"login-register-box"}>

                    <Tabs className={"tabs-top"} defaultActiveKey="1" onChange={this.handleLogin}>
                        <TabPane tab="login" className={"login_tab"} key={"1"}></TabPane>
                        <TabPane tab="signup" className={"register_tab"} key={"2"}></TabPane>
                    </Tabs>

                    {this.state.hasSignUp ?
                        <div className="login_box">
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item className={""}>
                                    {getFieldDecorator('username', {
                                        rules: [{required: true, message: 'Please input your username!'}],
                                    })(
                                        <Input
                                            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                            placeholder="Username"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item className={""}>
                                    {getFieldDecorator('password', {
                                        rules: [{required: true, message: 'Please input your Password!'}],
                                    })(
                                        <Input
                                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                            type="password"
                                            placeholder="Password"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Log in
                                    </Button>
                                </Form.Item>
                            </Form>

                        </div> :
                        <div className="login_box">
                            <Register handleLoginSucceed={this.props.handleLoginSucceed}/>
                        </div>}

                    <div className={"quick-sign-in-box"}>
                        <div className={"quick-sign-in"}>Quick Sign-in</div>
                        <div className={"quick-sign-in-icon"}>

                            <AlipayCircleOutlined/>
                            <TaobaoCircleOutlined/>
                            <WeiboCircleOutlined/>
                        </div>
                        <button className={"sign-up-button"}>Sign Up</button>
                    </div>
                </div>
            </div>
        );
    }
}

export const Login = Form.create({name: 'normal_login'})(NormalLoginForm);
