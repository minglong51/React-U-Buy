import React, {useState, Component} from 'react';
import 'antd/dist/antd.css';
import {List, Avatar, Icon} from 'antd';
import {ArrowLeftOutlined, UserOutlined} from '@ant-design/icons';
import axios from 'axios';
import {Link, Redirect} from "react-router-dom";




class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {User: []};
    }

    getUser= () => {
        const url = '/user/433';
        axios.get(url)
            .then(response => {
                let getUser = (user) => {
                    return {
                        "userId" : user.userId,
                        "username":user.username,
                        "email": user.email,
                        "password" :user.password,
                        "photoUrl" : user.photoUrl,
                        "tags":user.tags
                    }
                };
                const data = getUser(response.data.user);
                console.log(data);
                this.setState({
                    ...this.state,
                    User:data}
                );

            })
            .catch(error => {
                console.log('err in fetch users -> ', error);
            })

    }


    componentDidMount = () => {
        this.getUser();
    }

    render() {
        const data = this.state.User;
        console.log(this.state.User.username);
        return (
            <div className='User_Profile'>
                <ArrowLeftOutlined className={"user_arrow"}></ArrowLeftOutlined>
                <p className={"user_arrow_text"}>Back to game recommendation</p>
                <div className={"user_profile_icon"}></div>
                <p className={"user_profile_tittle"}>User Profile</p>
                <div className={"user_profile_rectangle"}>
                    <div className={"user_profile_ellipse8"}></div>
                    <div className={"user_profile_ellipse5"}></div>

                    <div className={"user_profile_ellipse6"}></div>
                    <div className={"user_profile_ellipse7"}></div>

                    <Avatar src={this.state.User.photoUrl} className={"user_profile_avatar"}/>

                    <div className={"user_profile_ellipse1"}></div>
                    <div className={"user_profile_ellipse2"}></div>
                    <div className={"user_profile_ellipse3"}></div>
                    <div className={"user_profile_ellipse4"}></div>

                    <p className={"user_profile_text_name"}>User Name:</p>
                    <p className={"user_profile_text_email"}>Email Address:</p>
                    <p className={"user_profile_text_password"}>Password:</p>
                    <p className={"user_profile_text_game"}>Game Preference:</p>

                    <p className={"user_profile_name"}>{this.state.User.username}</p>
                    <p className={"user_profile_email"}>{this.state.User.email}</p>
                    <p className={"user_profile_password"}>{this.state.User.password}</p>
                    <Link className={"user_profile_game"} to="/tags">Edit</Link>

                    <div className={"user_profile_tag1"}>tag1</div>
                    <div className={"user_profile_tag2"}>tag2</div>
                    <div className={"user_profile_tag3"}>tag3</div>

                </div>
            </div>

        );
    };

}
export default UserProfile;