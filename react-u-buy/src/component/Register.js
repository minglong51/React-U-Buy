import React, {Component} from 'react';
import { Form, Icon, Input, Button, message, Upload} from 'antd';
import axios from 'axios';
import {UploadOutlined} from '@ant-design/icons';


class NormalRegisterForm extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                fetch(`/register`, {
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        userId:null,
                        username: values.username,
                        password: values.password,
                        email:values.email,
                        photoUrl:"https://i.pinimg.com/originals/d4/3f/75/d43f75fc3d2f128cf528a4802aafd6f2.jpg",
                        tags:"EMPTY",
                    }),
                })
                    .then((response) =>{
                        console.log("register");
                        console.log(response);
                        if (response.ok) {
                            return response.json();
                        } else {
                            throw new Error("ERROR");
                        }
                    })
                    .then((data) => {

                       let registerUser={ userId:null,
                            username: values.username,
                            password: values.password,
                            email:values.email,
                            photoUrl:"https://www.sciencenewsforstudents.org/wp-content/uploads/2019/11/860-dragon-header-iStock-494839519.gif",
                            tags:"EMPTY"};
                        message.success('Register succeed!');
                        console.log(data);
                        this.props.handleLoginSucceed(data.user);

                        //step4: 登录成功，保存token -> 用于实现持久登录
                    })
                    .catch((err) => {
                        console.log(err);
                        message.error('Register failed.');
                    });
            }
        });
    };
    normFile = (e) => {
        console.log('Upload event:', e);

        if (Array.isArray(e)) {
            return e;
        }

        return e && e.fileList;
    };

    dummyRequest = ({file, onSuccess}) => {
        let res = {
            "name": "xxx.png",
            "status": "done",
            "url": "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
            "thumbUrl": 
            "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        }
        setTimeout(
            () => {
                onSuccess(res);
            }
            , 1);
    }


    handleUpload=(file, fileList, event)=>{
        console.log("file");
        console.log(file);

    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="register-form">
                <p className= "register-title">
                </p>
                <Form.Item class={"login-form-item"}>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item class={"login-form-item"}>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item class={"login-form-item"}>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please input your Email!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="email"
                            placeholder="Email"
                        />,
                    )}
                </Form.Item>
                {/*<Form.Item class={"login-form-item"}>*/}
                {/*    {getFieldDecorator('photoUrl', {*/}
                {/*        rules: [{ required: true, message: 'Please input your photoUrl!' }],*/}
                {/*    })(*/}
                {/*        <Input*/}
                {/*            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}*/}
                {/*            type="photoUrl"*/}
                {/*            placeholder="PhotoUrl"*/}
                {/*        />*/}
                {/*    )}*/}
                {/*</Form.Item>*/}
                <Form.Item
                    name="upload"
                    label="Upload"
                    extra=""
                >
                    <Upload 
                        name="logo" 
                        customRequest={this.dummyRequest}
                        onChange={this.handleUpload} 
                        listType="picture"
                    >
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>
                <Form.Item class={"login-form-item"}>
                    <Button type="primary" htmlType="submit" className="register-form-button">
                        Register
                    </Button>
                </Form.Item>
            </Form>

        );
    }
}

export const Register = Form.create({ name: 'normal_register' })(NormalRegisterForm);
