import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login } from './Login';
import LikedGames from './LikedGames';
import  Home  from './Home';

class Main extends Component {

    getLogin = () => {
        return this.props.isLoggedIn ?
            <Redirect to="/home"/> : <Login handleLoginSucceed={this.props.handleLoginSucceed}/>;
    }
    getMachine = () => {
        console.log(this.props.data)
        return this.props.isLoggedIn ?
            <Home data={this.props.data}
            user={this.props.user}
            location={this.props.location}/> : <Redirect to = "/login"/>;
    }
    getLikedGame = () => {
        console.log(this.props.data)
        return this.props.isLoggedIn ?
            <LikedGames data={this.props.data}
            user={this.props.user}
            location={this.props.location}/> : <Redirect to = "/login"/>;
    }

    render() {
        return (
            <div className="main">
                <Switch>
                    <Route path="/login" render={this.getLogin}/>
                    <Route path="/home" render={this.getMachine}/>
                    <Route path="/likedgame" render={this.getLikedGame}/>
                    <Route render={this.getLogin}/>
                </Switch>
                <p className="footnote">Opt-U-Buy Application, Mailing Address: dddmb@foxmail.com, Opt-U-Buy 2021 Project</p>
            </div>
        );
    }
}

export default Main;
