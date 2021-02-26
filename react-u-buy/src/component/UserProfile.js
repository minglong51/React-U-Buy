import React, {useState, Component} from 'react';
import 'antd/dist/antd.css';
import {List, Avatar } from 'antd';
import {ArrowLeftOutlined, UserOutlined} from '@ant-design/icons';
import axios from 'axios';




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
                <text className={"user_profile_tittle"}></text>
                <div className={"user_profile_rectangle"}>
                    <ellipse className={"user_profile_ellipse8"}></ellipse>
                    <ellipse className={"user_profile_ellipse5"}></ellipse>
                    <Avatar src={this.state.User.photoUrl} className={"user_profile_avatar"}/>
                    <ellipse className={"user_profile_ellipse6"}></ellipse>
                    <ellipse className={"user_profile_ellipse7"}></ellipse>
                </div>
            </div>

        );
    };

}
export default UserProfile;