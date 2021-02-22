import React, {useState, Component} from 'react';
import 'antd/dist/antd.css';
import {List, Avatar } from 'antd';
import axios from 'axios';




class LikedGames extends Component {
  constructor(props) {
    super(props);
    this.state = {likedGames: []};
  }

  getLikedGames = () => {
    const url = '/products?page=4&page_size=3';
    axios.get(url)
       .then(response => {
           const data = response.data.products.map((product) => {
             return {
                      "productName" : product.productName,
                      "purchaseURL"  :product.purchaseUrl,
                      "productDescription" :product.productDescription,
                      "imageUrls" : product.imageUrls.split(","),
                    }           
           })
           this.setState({
             ...this.state, 
            likedGames:data}
           );
       })
       .catch(error => {
           console.log('err in fetch products -> ', error);
       })

  }

  componentDidMount = () => {
    this.getLikedGames();
  }

  render() {
        const data = this.state.likedGames;

        return (
            <div className='LikedGames'>
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
                            title={<a href="https://ant.design">{item.productName}</a>}
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