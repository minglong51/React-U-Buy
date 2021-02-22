import React, {Component} from 'react';
import {Form, Icon, Input, Button, message, Tabs,Upload} from 'antd';
import {Link} from 'react-router-dom';
import {API_ROOT} from '../constants';
import {AlipayCircleOutlined, TaobaoCircleOutlined, WeiboCircleOutlined} from '@ant-design/icons';
import {Register} from './Register';

const {TabPane} = Tabs;

class NormalLoginForm extends Component {
    state = {
        hasSignUp: false
    };
    handleLogin=e=>{
        e.preventDefault();
        this.setState((prevstate)=>{return{hasSignUp:!prevstate}});
    }
    handleRegister=e=>{
        e.preventDefault();
        this.setState({hasSignUp:false});
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                fetch(`${API_ROOT}/admin/login`, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        username: values.username,
                        password: values.password,
                    }),
                })
                    .then((response) => {
                        //console.log(response)
                        if (response.ok) {
                            return response.json();
                        } else {
                            throw new Error("ERROR");
                        }
                    })
                    .then((data) => {
                        //console.log(data.token);
                        this.props.handleLoginSucceed(data.token);   // data is token
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
            <div class={"login-register-box"}>
                <Tabs className={"tabs-top"}>
                    <TabPane tab="login" className={"login_tab"} onChange={this.handleLogin}></TabPane>
                    <TabPane tab="signup" className={"register_tab"} onChange={this.handleRegister}></TabPane>
                </Tabs>

                {this.state.hasSignUp ?
                    <div class="login_box">
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item class={"login-form-item"}>
                                {getFieldDecorator('username', {
                                    rules: [{required: true, message: 'Please input your username!'}],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        placeholder="Username"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item class={"login-form-item"}>
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
                    <Register/>
                    </div>}

            <div className={"quick-sign-in-box"}>
                <text className={"quick-sign-in"}>Quick Sign-in</text>
                <div className={"quick-sign-in-icon"}>

                <AlipayCircleOutlined class={"quick-sign-in-outline"}/>
                <TaobaoCircleOutlined class={"quick-sign-in-outline"}/>
                <WeiboCircleOutlined class={"quick-sign-in-outline"}/>
                </div>
                <button className={"sign-up-button"}>Sign Up</button>
            </div>
            </div>
        );
    }
}

export const Login = Form.create({name: 'normal_login'})(NormalLoginForm);
