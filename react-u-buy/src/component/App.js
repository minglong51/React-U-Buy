import React, { Component } from 'react';
import {TOKEN_KEY} from "../constants";
import TopBar from "./TopBar";
import Main from "./Main";
import axios from 'axios';

class App extends Component {
    state = {
        data: [],
        //current: 'Machine',
        userId: [],
        location: [],
        isLoggedIn : false,
        //isLoggedIn:Boolean(localStorage.getItem(TOKEN_KEY)),
        colors: ["blue", "yellow", "orange", "magenta","green", "purple"],
        selectedTags:[],
        recommendedGames: [],
        tags:[],
        likedGames:[],
        user:{},
    };

    handleLoginSucceed = (user) => {

        this.getRecommendation();
        this.getLikedGames();
        let selectedTags = user.tags.split(",");
        this.setState(
            { isLoggedIn: true,
                    userId: user.userId,
                    user:user,
                    selectedTags:selectedTags,
            }
        );
        console.log(this.state.user);
    }

    handleLogout = () => {

        this.setState({ isLoggedIn: false });
    }

    componentDidMount() {
        this.getTags();
    }

    componentWillUnmount() {
    }

    selectTag = (e) => {
        let tag = e.target.dataset.tag;
        let idx = this.state.selectedTags.indexOf(tag);
        if (idx === -1) {
            this.setState(prevState => ({
                selectedTags: [...prevState.selectedTags, tag]
              }));
            console.log(this.state);
        } else {
            let tmpArray = [...this.state.selectedTags];
            tmpArray.splice(idx, 1);
            this.setState(prevState => ({
                selectedTags: tmpArray
            }));
            console.log(this.state);
        }
    }

    setFavorite = (rawProduct) => {
        const url = '/favorites/set_favorite?userId=433';
        axios.post(url, rawProduct)
        .then(this.getLikedGames())
        .catch();
    }

    getTags = () => {
        const url = '/tag_types';
        axios.get(url)
           .then(response => {
               const data = response.data.tag_types.map((tags) => {
                    return tags;                  
               })
               this.setState({
                 ...this.state, 
                 tags:data}
               );
                console.log("App" + data);
           })
           .catch(error => {
               console.log('err in fetch tags -> ', error);
           })   
      }

    getUser = () => {
        const url = '/user/433';
        axios.get(url)
           .then(response => {
               const user = response.data.user;

               const splitTags = user.tags.split(",");
           
               this.setState({
                 ...this.state, 
                 user:user,
                 tags: splitTags}
               );
           })
           .catch(error => {
               console.log('err in fetch products -> ', error);
           })
      }

      getRecommendation = () => {
        const url = '/products?page=4&page_size=3';
        axios.get(url)
           .then(response => {
               const data = response.data.products.map((product) => {
                 return {
                          "productName" : product.productName,
                          "purchaseURL"  :product.purchaseUrl,
                          "productDescription" :product.productDescription,
                          "imageUrls" : product.imageUrls.split(","),
                          "rawProduct" : product,
                        }           
               })
               this.setState({
                 ...this.state, 
                 recommendedGames:data}
               );
           })
           .catch(error => {
               console.log('err in fetch recommendations -> ', error);
           })
      }
      
      setTagsAtServer = () => {
        axios.post('/user/433', 
            this.state.selectedTags
        ).then(response => {
            console.log(response);
        })
        .catch();    
    }

    getLikedGames = () => {
        const url = '/favorites/user/433';
        console.log("run liked games");
        axios.get(url)
           .then(response => {
               console.log(response);
               const data = response.data.favorites.map((entry) => {
                 const product = entry.productId;
                 return {
                          "productName" : product.productName,
                          "purchaseURL"  : product.purchaseUrl,
                          "productDescription" : product.productDescription,
                          "imageUrls" : product.imageUrls.split(","),
                          "rawProduct" : product,
                        }           
               })
               this.setState({
                 ...this.state, 
                likedGames:data}
               );
              console.log("App state");
              console.log(this.state);
           })
           .catch(error => {
               console.log('err in fetch favorites -> ', error);
           })
      }

    render() {
        return (
            <div className="App">
                <TopBar handleLogout={this.handleLogout}
                        isLoggedIn={this.state.isLoggedIn}
                />
                <Main  handleLoginSucceed={this.handleLoginSucceed}
                       isLoggedIn={this.state.isLoggedIn}
                       data={this.state.data}
                       userId={this.state.userId}
                       location={this.state.location}
                       selectTag={this.selectTag}
                       tags={this.state.tags}
                       getUser={this.getUser}
                       getRecommendation={this.getRecommendation}
                       setTagsAtServer={this.setTagsAtServer}
                       selectedTags={this.state.selectedTags}
                       colors={this.state.colors}
                       recommendedGames={this.state.recommendedGames}
                       setFavorite={this.setFavorite}
                       likedGames={this.state.likedGames}
                       user={this.state.user}
                />
            </div>

        );
    }
}

export default App;
