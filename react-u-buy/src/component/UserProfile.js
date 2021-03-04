import React, {useState, Component} from 'react';
import 'antd/dist/antd.css';
import {List, Avatar, Icon, Tag} from 'antd';
import {ArrowLeftOutlined, UserOutlined} from '@ant-design/icons';
import axios from 'axios';
import {Link, Redirect} from "react-router-dom";




class UserProfile extends Component {

    renderTags = (item, idx) => { 
        const {colors} = this.props;
        const color = colors[ idx % colors.length];
        console.log(item);
        if (item !== "EMPTY" && item != "") {
            return (  
                <Tag key={item} color={color} 
                    data-tag={item} 
                    className="RecommendationTag"
                >
                        {item}
                </Tag>    
     )}}

    render() {

        const data = this.props.user;
        let tags = this.props.selectedTags;

        return (
            <div className='User_Profile'>
                <ArrowLeftOutlined className={"user_arrow"}></ArrowLeftOutlined>
                <Link to="/recommendation" className={"user_arrow_text"}>Back to game recommendation</Link>
                <div className={"user_profile_icon"}></div>
                <p className={"user_profile_tittle"}>User Profile</p>
                <div className={"user_profile_rectangle"}>
                    <div className={"user_profile_ellipse8"}></div>
                    <div className={"user_profile_ellipse5"}></div>

                    <div className={"user_profile_ellipse6"}></div>
                    <div className={"user_profile_ellipse7"}></div>

                    <Avatar src={data.photoUrl} className={"user_profile_avatar"}/>

                    <div className={"user_profile_ellipse1"}></div>
                    <div className={"user_profile_ellipse2"}></div>
                    <div className={"user_profile_ellipse3"}></div>
                    <div className={"user_profile_ellipse4"}></div>

                    <p className={"user_profile_text_name"}>User Name:</p>
                    <p className={"user_profile_text_email"}>Email Address:</p>
                    <p className={"user_profile_text_password"}>Join Date:</p>
                    <p className={"user_profile_text_game"}>Game Preference:</p>

                    <p className={"user_profile_name"}>{data.username}</p>
                    <p className={"user_profile_email"}>{data.email}</p>
                    <p className={"user_profile_password"}>2021-03-01</p>
                    <Link className={"user_profile_game"} to="/tags">Edit</Link>

                    <div className="ProfileTags">
                        {
                            tags.map((tag, idx) => this.renderTags(tag, idx))
                        }
                    </div>
                </div>
            </div>

        );
    };

}
export default UserProfile;