import React, {Component} from 'react';
import {Menu} from "antd";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import Game from "./Game";
import LikedGames from "./LikedGames"

class Home extends Component {
    state = {
        current: 'Liked Games',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render() {

        const componentsSwitch = (key) => {
            switch (key) {
                case 'LikedGames':
                    return (<Game />);
                default:
                    return (<LikedGames data={this.props.data}/>);
            }
        };
        const {current} = this.state;

        return (
            <div>
                <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                    <Menu.Item key="Game" icon={<AppstoreOutlined />}>Status</Menu.Item>

                </Menu>
                {componentsSwitch(current)}

            </div>

        );
    }
}

export default Home;