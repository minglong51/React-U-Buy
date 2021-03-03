import React, { Component } from 'react';
import TopBar from "./TopBar";
import Main from "./Main";
import axios from 'axios';

class App extends Component {
    state = {
        data: [],
        //current: 'Machine',
        userId: [],
        location: [],
        isLoggedIn: false,
        //isLoggedIn:Boolean(localStorage.getItem(TOKEN_KEY)),
        colors: ["blue", "orange", "magenta", "green", "purple"],
        selectedTags: [],
        recommendedGames: [],
        tags: [],
        likedGames: [],
        user: {},
        blackListGames:[],
    };

    handleLoginSucceed = (user) => {

        let selectedTags = user.tags === null ? [] :  user.tags.split(",");
       
        this.setState(
            {
                isLoggedIn: true,
                userId: user.userId,
                user: user,
                selectedTags: selectedTags,
            }
        );
        this.getRecommendation();
        this.getLikedGames();
        this.getBlackListGames();
        
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
        } else {
            let tmpArray = [...this.state.selectedTags];
            tmpArray.splice(idx, 1);
            this.setState(prevState => ({
                selectedTags: tmpArray
            }));
        }
    }

    setFavorite = (rawProduct) => {
        const url = `/favorites/set_favorite?userId=${this.state.userId}`;
        axios.post(url, rawProduct)
            .then(() => {
                this.getLikedGames();
                console.log("set fav game");
                console.log(this.state.likedGames);
            })
            .catch();
    }

    addBlackList = (rawProduct) => {
        const url = `/add_blacklist?userId=${this.state.userId}`;
        axios.post(url, rawProduct)
            .then(() => {
                this.getLikedGames();
                this.getBlackListGames();
                console.log("add black list");
                console.log(this.state.likedGames);
            })
            .catch();
    }

    removeBlackList = (rawProduct) => {
        const url = `/remove_blacklist?userId=${this.state.userId}`;
        axios.post(url, rawProduct)
            .then(() => {
                this.getBlackListGames();
                console.log("remove black list");
            })
            .catch();
    }

    unsetFavorite = (rawProduct) => {
        const url = `favorites/unset_favorite?userId=${this.state.userId}`;
        axios.post(url, rawProduct)
            .then(() => {
                this.getLikedGames();
                console.log("unset fav game");
                console.log(this.state.likedGames);
            }


            )
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
                    tags: data
                }
                );
                console.log("App" + data);
            })
            .catch(error => {
                console.log('err in fetch tags -> ', error);
            })
    }

    getUser = () => {
        const url = `/user/${this.state.userId}`;
        axios.get(url)
            .then(response => {
                const user = response.data.user;

                const splitTags = user.tags.split(",");

                this.setState({
                    ...this.state,
                    user: user,
                    tags: splitTags
                }
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
                        "productId": product.productId,
                        "productName": product.productName,
                        "purchaseURL": product.purchaseUrl,
                        "productDescription": product.productDescription,
                        "imageUrls": product.imageUrls.split(","),
                        "rawProduct": product,
                    }
                })
                this.setState({
                    ...this.state,
                    recommendedGames: data
                }
                );
            })
            .catch(error => {
                console.log('err in fetch recommendations -> ', error);
            })
    }

    setTagsAtServer = () => {
        axios.post(`/user/${this.state.userId}`,
            this.state.selectedTags
        ).then(response => {
            console.log(response);
        })
            .catch();
    }

    getLikedGames = () => {
        const url = `/favorites/user/${this.state.userId}`;
        console.log("run liked games");
        axios.get(url)
            .then(response => {
                console.log(response);
                const data = "favorites" in response.data ? response.data.favorites.map((entry) => {
                    const product = entry.productId;
                    return {
                        "productId": product.productId,
                        "productName": product.productName,
                        "purchaseURL": product.purchaseUrl,
                        "productDescription": product.productDescription,
                        "imageUrls": product.imageUrls.split(","),
                        "rawProduct": product,
                    }
                }) : [];
                this.setState({
                    ...this.state,
                    likedGames: data
                }
                );
            })
            .catch(error => {
                console.log('err in fetch favorites -> ', error);
            })
    }

    getBlackListGames = () => {
        const url = `/blacklist/user/${this.state.userId}`;
        console.log("run get black list games");
        axios.get(url)
            .then(response => {
                console.log(response);
                const data = "blacklist" in response.data ? response.data.blacklist.map((entry) => {
                    const product = entry.productId;
                    return {
                        "productId": product.productId,
                        "productName": product.productName,
                        "purchaseURL": product.purchaseUrl,
                        "productDescription": product.productDescription,
                        "imageUrls": product.imageUrls.split(","),
                        "rawProduct": product,
                    }
                }) : [];
                this.setState({
                    ...this.state,
                    blackListGames: data
                }
                );
                console.log(this.state);
            })
            .catch(error => {
                console.log('err in fetch blacklist -> ', error);
            })
    }

    render() {
        return (
            <div className="App">
                <TopBar handleLogout={this.handleLogout}
                    isLoggedIn={this.state.isLoggedIn}
                />
                <Main handleLoginSucceed={this.handleLoginSucceed}
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
                    unsetFavorite={this.unsetFavorite}
                    addBlackList={this.addBlackList}
                    removeBlackList={this.removeBlackList}
                    blackListGames={this.state.blackListGames}
                />
            </div>

        );
    }
}

export default App;
