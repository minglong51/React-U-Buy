import React, {Component} from 'react';
import { Icon } from 'antd';

class TopBar extends Component {
    render() {
        return (
            <header className="App-header">
                <span className="App-title">Opt-U-Buy Application</span>

                {this.props.isLoggedIn ?
                    <a className="logout" onClick={this.props.handleLogout} >
                        <Icon type="logout"/>{' '}Logout
                    </a> : null }

            </header>
        );
    }
}

export default TopBar;