import React, {useState, Component} from 'react';
import 'antd/dist/antd.css';
import {List, Avatar } from 'antd';
import {ArrowLeftOutlined, UserOutlined} from '@ant-design/icons';
import axios from 'axios';
import {Redirect} from "react-router-dom";




class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {User: []};
    }

    getUser= () => {
        const url = '/users';
        axios.get(url)
            .then(response => {
                const data = response.data.users.map((user) => {
                    return {
                        "userId" : user.userId,
                        "username"  :user.username,
                        "password" :user.password,
                        "photoUrl" : user.photoUrl,
                        "tags":user.tags
                    }
                })
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

    handleClick = (e)=>{
        return <Redirect to="/tags"/>;
    }
    componentDidMount = () => {
        this.getUser();
    }

    render() {
        const data = this.state.User;
        console.log(this.state);
        return (
            <div className='User_Profile'>
                <ArrowLeftOutlined className={"user_arrow"}></ArrowLeftOutlined>
                <text className={"user_arrow_text"}>Back to game recommendation</text>
                <dinosaur className={"user_profile_icon"}></dinosaur>
                <text className={"user_profile_tittle"}>User Profile</text>
                <div className={"user_profile_rectangle"}>
                    <ellipse className={"user_profile_ellipse8"}></ellipse>
                    <ellipse className={"user_profile_ellipse5"}></ellipse>
                    <Avatar src={"https://www.sciencenewsforstudents.org/wp-content/uploads/2019/11/860-dragon-header-iStock-494839519.gif"} className={"user_profile_avatar"}/>
                    <ellipse className={"user_profile_ellipse6"}></ellipse>
                    <ellipse className={"user_profile_ellipse7"}></ellipse>

                    <ellipse className={"user_profile_ellipse1"}></ellipse>
                    <ellipse className={"user_profile_ellipse2"}></ellipse>
                    <ellipse className={"user_profile_ellipse3"}></ellipse>
                    <ellipse className={"user_profile_ellipse4"}></ellipse>

                    <text className={"user_profile_text_name"}>User Name:</text>
                    <text className={"user_profile_text_email"}>Email Address:</text>
                    <text className={"user_profile_text_password"}>Password:</text>
                    <text className={"user_profile_text_game"}>Game Preference:</text>

                    <text className={"user_profile_name"}>{this.state.username}</text>
                    <text className={"user_profile_email"}>{this.state.username}</text>
                    <text className={"user_profile_password"}>{this.state.username}</text>
                    <text className={"user_profile_game"} onClick={this.handleClick}>Edit</text>
                </div>
            </div>

        );
    };

}
export default UserProfile;