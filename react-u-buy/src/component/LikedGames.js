import React, { useState, Component } from 'react';
import 'antd/dist/antd.css';
import { List, Tag, Divider } from 'antd';
import axios from 'axios';
import gameBoy from '../assets/gameBoy.svg';
import arrow from '../assets/arrow.svg';
import { Link } from 'react-router-dom';
import { FireTwoTone, CloseOutlined, CloseCircleTwoTone } from '@ant-design/icons';


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

  fire = (text) => {
    return (
      <span className = "Fire">
         <Divider type="vertical" />
        <FireTwoTone twoToneColor="red" /> {text}
      </span>
    )
  }

  renderTags = (item, idx) => {

    if (item !== "EMPTY" && item != "") {
        return (
            <Tag key={item} 
                data-tag={item}
                className="LikedGameTag"
            >
                {item}
            </Tag>
        )
    }
  } 


  render() {
    const data = this.props.likedGames;
    console.log(data);
   
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
              // actions={[
              //   <div className="Actions">
              //     {React.createElement(StarOutlined)}
              //     {" " + item.rawProduct.item.averageRating + "%"}
              //     <Divider type="vertical" />
              //   </div>,

              // ]}
              extra={
                <img
                  width={298}
                  height={139}
                  alt="logo"
                  src={item.imageUrls[0]}
                />}
            >

              <List.Item.Meta
                title={
                <div className="Title">
                  <a target="_blank" href={item.purchaseURL}>{item.productName }</a> 
                  {this.fire(item.rawProduct.item.averageRating)}
                  <Divider type="vertical" />
                  <CloseCircleTwoTone  
                    twoToneColor="#C8C8C8" 
                    onClick={
                      () => {this.props.unsetFavorite(item.rawProduct) }
                  }/>
                </div>
                }
                description={<div>
                  {item.rawProduct.item.popularTags.split(",").map((tag, idx) => this.renderTags(tag, idx))}
                </div>}
              />
              {item.productDescription}
            </List.Item>
          )}
        />
      </div>

    );
  };

}
export default LikedGames;