import React, {Component} from 'react';
import { Icon } from 'antd';
import {UserOutlined} from '@ant-design/icons';
import heart  from '../assets/heart.svg';
import controller2  from '../assets/controller2.svg';
import { Link } from 'react-router-dom';
class TopBar extends Component {
    render() {
        return (
            <div>
            {this.props.isLoggedIn ?<header className="App-header">

                {this.props.isLoggedIn ?
                    <a className="logout" onClick={this.props.handleLogout} >
                        <Icon type="logout"/>{' '}Logout
                    </a> : null }
                {this.props.isLoggedIn ?
                      <a className="heart">
                      <Link className="TopBarLikeGame" to="/likedgames"><Icon type="heart" />{' '}Liked Games</Link>
                     </a>: null }
                {this.props.isLoggedIn ?
                    <a className="user">
                        <Link className="TopBarUserProfile" to="/profile"><UserOutlined type="user"/>{' '}User</Link>
                    </a>: null }
            </header>:<div></div>}
                </div>
        );
    }
}

export default TopBar;