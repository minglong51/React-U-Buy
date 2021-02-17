import React, {useState, Component} from 'react';
import 'antd/dist/antd.css';
import {List, Avatar } from 'antd';
import axios from 'axios';




class LikedGames extends Component {
  constructor(props) {
    super(props);
    this.state = {likedGames: []};
  }

  componentDidMount = () => {
    // http://optubuy.us-east-2.elasticbeanstalk.com/products?page=4&page_size=3
    const url = '/products?page=4&page_size=3';
    axios.get(url)
       .then(response => {
           console.log(response)
       })
       .catch(error => {
           console.log('err in fetch satellite -> ', error);
       })

  }

  render() {
        const data = [
            {
              title: 'Ant Design Title 1',
              content: 'this is a long long form content',
            },
            {
              title: 'Ant Design Title 2',
              content: 'this is a long long form content',
            },
            {
              title: 'Ant Design Title 3',
              content: 'this is a long long form content',
            },
            {
              title: 'Ant Design Title 4',
              content: 'this is a long long form content',
            },
          ];

        //console.log(this.state.count)
        return (
            <div className='LikedGames'>
                <List
                    itemLayout="vertical"
                    style={{
                        textAlign: 'left',
                        marginTop: 12,
                        height: 32,
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
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />}
                    >
                       
                        <List.Item.Meta
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            
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