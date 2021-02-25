import React, {useState, Component} from 'react';
import 'antd/dist/antd.css';
import {List, Avatar } from 'antd';
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
            <div className='User Profile'>

            </div>

        );
    };

}
export default UserProfile;