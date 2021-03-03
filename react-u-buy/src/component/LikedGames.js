import React, {useState, Component} from 'react';
import 'antd/dist/antd.css';
import {List, Avatar } from 'antd';
import axios from 'axios';
import gameBoy  from '../assets/gameBoy.svg';
import arrow  from '../assets/arrow.svg';
import { Link } from 'react-router-dom';



class LikedGames extends Component {
  constructor(props) {
    super(props);
    this.state = {likedGames: []};
  }

  // getLikedGames = () => {
  //   const url = '/favorites/user/433';
  //   console.log("run liked games");
  //   axios.get(url)
  //      .then(response => {
  //          console.log(response);
  //          const data = response.data.favorites.map((entry) => {
  //            const product = entry.productId;
  //            return {
  //                     "productName" : product.productName,
  //                     "purchaseURL"  : product.purchaseUrl,
  //                     "productDescription" : product.productDescription,
  //                     "imageUrls" : product.imageUrls.split(","),
  //                   }           
  //          })
  //          this.setState({
  //            ...this.state, 
  //           likedGames:data}
  //          );
  //         //  console.log(data);
  //      })
  //      .catch(error => {
  //          console.log('err in fetch products -> ', error);
  //      })

  // }

  // componentDidMount = () => {
  //   this.getLikedGames();
  // }

  render() {
        const data = this.props.likedGames;
        console.log(data);
        return (
            <div className='LikedGames'>
                <div className='LikedGamesTop'>
                  <div> <img src={arrow} alt="icon"/> <Link to="/recommendation">Back to game recommendation</Link> </div>
                  <div className='LikedGamesTitle'>
                     <img src={gameBoy} alt="icon"/>
                    <div>Liked Game List</div>
                  </div>
                </div>
                <List
                    itemLayout="vertical"
                    style={{
                        textAlign: 'left',
                        marginTop: 12,
                        lineHeight: '32px',
                      }}
                    dataSource={data}
                    pagination={{
                        onChange: page => {
                          console.log(page);
                        },
                        pageSize: 5,
                      }}
                    renderItem={item => (
                    <List.Item
                        extra = {
                            <img
                                width={272}
                                height={250}
                                alt="logo"
                                src= {item.imageUrls[0]}
                            />}
                    >
                       
                        <List.Item.Meta
                            title={<a href={item.purchaseURL}>{item.productName}</a>}
                            description={item.productDescription}
                            
                        />
                        {item.content}
                    </List.Item>
                     )}
                />
            </div>

        );
    };

}
export default LikedGames;