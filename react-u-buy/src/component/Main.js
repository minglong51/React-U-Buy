import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login } from './Login';
import LikedGames from './LikedGames';
import  Home  from './Home';
import {Register} from './Register';
import TagsSelection from './TagsSelection';
import Recommendation from './Recommendation';

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
    getRegister = () => {
        console.log(this.props.data)
        return <Register data={this.props.data}
                      user={this.props.user}
                      location={this.props.location}/> ;
    }

    getTagsSelection = () => {
        return  <TagsSelection />;
    }

    getRecommendation = () => {
        return  <Recommendation />;
    }

    render() {
        return (
            <div className="main">
                <Switch>
                    <Route path="/login" render={this.getLogin}/>
                    <Route path="/home" render={this.getMachine}/>
                    <Route path="/likedgame" render={this.getLikedGame}/>
                    <Route path="/register" render={this.getRegister}/>
                    <Route path="/tags" render={this.getTagsSelection}/>
                    <Route path="/recommendation" render={this.getRecommendation}/>
                    <Route render={this.getRegister}/>
                </Switch>
                <p className="footnote">Opt-U-Buy Application, Mailing Address: dddmb@foxmail.com, Opt-U-Buy 2021 Project</p>
            </div>
        );
    }
}

export default Main;
