import React, { Component } from 'react';
import {TOKEN_KEY} from "../constants";
import TopBar from "./TopBar";
import Main from "./Main";


class App extends Component {
    state = {
        data: [],
        //current: 'Machine',
        user: [],
        location: [],
        //isLoggedIn : true,
        isLoggedIn:Boolean(localStorage.getItem(TOKEN_KEY)),
    };

    handleLoginSucceed = (token) => {
        console.log('token --- ', token)
        localStorage.setItem(TOKEN_KEY, token)
        this.setState({ isLoggedIn: true });
    }

    handleLogout = () => {
        localStorage.removeItem(TOKEN_KEY);
        this.setState({ isLoggedIn: false });
    }

    componentDidMount() {
        this.getGameFromDb();

    }

    componentWillUnmount() {
    }


    // 我们的第一个使用后端api的get方法
    // 从我们的数据库中获取数据
    getGameFromDb = () => {
        fetch('')
            .then((data) => data.json())
            .then((res) => this.setState({ data: ""}));
    };


    putDataToDB = (message) => {
        //todo
    };

    deleteFromDB = (idTodelete) => {
        //todo
    };

    updateDB = (idToUpdate, updateToApply) => {
        //todo
    };


    // handleClick = e => {
    //   console.log('click ', e);
    //   this.setState({ current: e.key });
    // };

    render() {



        return (
            <div className="App">
                <TopBar handleLogout={this.handleLogout}
                        isLoggedIn={this.state.isLoggedIn}
                />
                <Main  handleLoginSucceed={this.handleLoginSucceed}
                       isLoggedIn={this.state.isLoggedIn}
                       data={this.state.data}
                       user={this.state.user}
                       location={this.state.location}
                />
            </div>

        );
    }
}

export default App;
