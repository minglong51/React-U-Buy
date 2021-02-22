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
        console.log(this.state);
    }

    render() {
        const data = this.state.User;

        return (
            <div className='User Profile'>
                <List
                    itemLayout="vertical"
                    style={{
                        textAlign: 'left',
                        marginTop: 12,
                        height: 32,
                        lineHeight: '32px',
                    }}
                    dataSource={data}
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 5,
                    }}
                    renderItem={item => (
                        <List.Item
                            extra = {
                                <img
                                    width={272}
                                    height={250}
                                    alt="logo"
                                    src= {item.imageUrls[0]}
                                />}
                        >

                            <List.Item.Meta
                                title={<a href="https://ant.design">{item.username}</a>}
                                description={item.productDescription}

                            />
                            {item.content}
                        </List.Item>
                    )}
                />
            </div>

        );
    };

}
export default UserProfile;