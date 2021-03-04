import React, { useState, Component } from 'react';
import 'antd/dist/antd.css';
import { List, Tag } from 'antd';
import axios from 'axios';
import gameBoy from '../assets/gameBoy.svg';
import arrow from '../assets/arrow.svg';
import { Link } from 'react-router-dom';



class LikedGames extends Component {

  renderTags = (item, idx) => {
    const { colors } = this.props;
    const color = colors[idx % colors.length];
    if (item !== "EMPTY" && item != "") {
        return (
            <Tag key={item} color={color}
                data-tag={item}
                className="RecommendationTag"
            >
                {item}
            </Tag>
        )
    }
}

  render() {
    const data = this.props.likedGames;
    console.log(data);
    let test =["FPS", "Action"];
    return (
      <div className='LikedGames'>
        <div className='LikedGamesTop'>
          <div> <img src={arrow} alt="icon" /> <Link to="/recommendation">Back to game recommendation</Link> </div>
          <div className='LikedGamesTitle'>
            <img src={gameBoy} alt="icon" />
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
              extra={
                <img
                  width={298}
                  height={139}
                  alt="logo"
                  src={item.imageUrls[0]}
                />}
            >

              <List.Item.Meta
                title={<a target="_blank" href={item.purchaseURL}>{item.productName}</a>}
                description={item.productDescription}

              />
              {item.content}
            Average Rating: {item.rawProduct.item.averageRating}
            </List.Item>
          )}
        />
      </div>

    );
  };

}
export default LikedGames;