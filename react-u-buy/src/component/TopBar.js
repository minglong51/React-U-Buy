import React, {Component} from 'react';
import { Icon } from 'antd';
import heart  from '../assets/heart.svg';

class TopBar extends Component {
    render() {
        return (
            <header className="App-header">


                {this.props.isLoggedIn ?
                    <a className="logout" onClick={this.props.handleLogout} >
                        <Icon type="logout"/>{' '}Logout
                    </a> : null }
                {this.props.isLoggedIn ?
                      <a className="heart">
                      <Icon type="heart"/>{' '}Liked Games
                     </a>: null }

            </header>
        );
    }
}

export default TopBar;