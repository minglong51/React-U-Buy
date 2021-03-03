import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login } from './Login';
import LikedGames from './LikedGames';
import  Home  from './Home';
import {Register} from './Register';
import TagsSelection from './TagsSelection';
import Recommendation from './Recommendation';
import UserProfile from './UserProfile';
import LandingPage from './LandingPage';

class Main extends Component {

    getLogin = () => {
        return this.props.isLoggedIn ?
            <Redirect to="/tags"/> : <Login handleLoginSucceed={this.props.handleLoginSucceed}/>;
    }
    // getMachine = () => {
    //     console.log(this.props.data)
    //     return this.props.isLoggedIn ?
    //         <Home data={this.props.data}
    //         user={this.props.user}
    //         location={this.props.location}/> : <Redirect to = "/login"/>;
    // }
    getLikedGame = () => {
        // console.log(this.props.data)
        return this.props.isLoggedIn ?
            <LikedGames 
                data={this.props.data}
                user={this.props.user}
                location={this.props.location}
                likedGames={this.props.likedGames}
            /> : <Redirect to = "/login"/>;
    }
    // getRegister = () => {
    //     console.log(this.props.data)
    //     return <Register data={this.props.data}
    //                   user={this.props.user}
    //                   location={this.props.location}/> ;
    // }

    getTagsSelection = () => {
        return  <TagsSelection
                    selectTag={this.props.selectTag}
                    tags={this.props.tags}
                    user={this.props.user}
                    setTagsAtServer={this.props.setTagsAtServer}
                    selectedTags={this.props.selectedTags}
                    colors={this.props.colors}
                 />;
    }

    getRecommendation = () => {
        return  <Recommendation 
                    selectedTags={this.props.selectedTags}
                    colors={this.props.colors}
                    user={this.props.user}
                    recommendedGames={this.props.recommendedGames}
                    tags={this.props.tags}
                    getRecommendation={this.props.getRecommendation}
                    setFavorite={this.props.setFavorite}
                />;
    }

    getUserProfile=()=>{
        return <UserProfile />;
    }

    getLandingPage = () => {
        return <LandingPage/>;
    }

    render() {
        return (
            <div className="main">
                <div className="Component">
                <Switch>
                    <Route path="/login" render={this.getLogin}/>
                    {/*<Route path="/home" render={this.getMachine}/>*/}
                    <Route path="/likedgames" render={this.getLikedGame}/>
                    {/*<Route path="/register" render={this.getRegister}/>*/}
                    <Route path="/tags" render={this.getTagsSelection}/>
                    <Route path="/recommendation" render={this.getRecommendation}/>
                    <Route path="/profile" render={this.getUserProfile}/>
                    <Route path="/landing" render={this.getLandingPage}/>
                    <Route path="/" render={this.getLogin}/>
                </Switch>
                </div>
               
                {this.props.isLoggedIn ? <div className="footnote">Opt-U-Buy Application, Mailing Address: dddmb@foxmail.com, Opt-U-Buy 2021 Project</div>:
                    <div></div>}
            </div>
        );
    }
}

export default Main;
