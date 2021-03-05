import { Component } from 'react';
import { Tag } from 'antd'
import { Card, Avatar } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Popover, Divider } from 'antd';
import { HeartTwoTone, FrownTwoTone } from '@ant-design/icons';
import controller3 from '../assets/controller3.svg';
import controller4 from '../assets/controller4.svg';
import { Link } from 'react-router-dom';

const { Meta } = Card;

class Recommendation extends Component {

    renderCards = (item) => {
        let isFav = false;
        let favoriteGames = this.props.likedGames;
        for (let i = 0; i < favoriteGames.length; i++) {
            let game = favoriteGames[i];
            if (game.productId === item.productId) {

                isFav = true;
                break;
            }
        }
        let heartColor = isFav ? "red" : "#C8C8C8";

        let onClickFuncHeart = isFav ? this.props.unsetFavorite : this.props.setFavorite;

        let blackListGame = this.props.blackListGames;

        let isBlackList = false;

        for (let i = 0; i < blackListGame.length; i++) {
            let game = blackListGame[i];
  
            if (game.productId === item.productId) {
                isBlackList = true;
                break;
            }
        }
        let onClickFuncFrown = isBlackList ? this.props.removeBlackList : this.props.addBlackList;
        let frownColor = isBlackList ? "blue" : "#C8C8C8";

        console.log("isblack list" + isBlackList);
        return (
            <Card className="Card"
                style={{ width: 300, }}
                cover={
                    <img
                        alt="example"
                        src={item.imageUrls}
                    />}
                actions={[
                    <FrownTwoTone 
                        twoToneColor={frownColor}
                        onClick={
                            () => {onClickFuncFrown(item.rawProduct) }
                        } color="#1890FF" key="setting" 
                    />,
                    <HeartTwoTone
                        data-product={item.rawProduct}
                        twoToneColor={heartColor}
                        onClick={
                            () => { onClickFuncHeart(item.rawProduct) }
                        } />,
                        <Popover 
                            overlayStyle={{ width: 400}}
                            content={
                                <div>
                                    <p style={{color:"#3C3C3E", "font-eight":900}}>{item.productName}</p>
                                    <Divider type="horizontal" />
                                    <p>{item.productDescription}</p>
                                    <p>Average rating: {item.rawProduct.item.averageRating}</p>
                                </div>}
                        >
                            <EllipsisOutlined key="ellipsis" />
                        </Popover>,
                ]}
                title={<Popover content={item.productName}>{item.productName}</Popover>}
                key={item.productName}
            >
                <Meta
                    description={item.description}
                />
            </Card>

        )
    }

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
        
        let items = this.props.recommendedGames.slice(this.props.offset, this.props.offset + 3);
        console.log(items);
        const tags = this.props.selectedTags;
        return (

            <div className="Recommendation">
                <div className="RecommendationHeaderText">
                    <div className="Controllers"><img src={controller3} alt="icon" /></div> Game Preference
                </div>
                <div className="RecommendationHeaderTags">

                    {
                        tags.map((tag, idx) => this.renderTags(tag, idx))
                    }

                    <span className="Edit">
                        <Link to="/tags" className="Edit">Edit</Link>
                    </span>
                </div>
                <div className="GameRecommendation">
                    <img src={controller4} alt="icon" className="Controllers" /> Game Recommendation
                </div>
                <div className="RecommendationCards">
                    {items.map(item => this.renderCards(item))}
                </div>

                <Button type="primary" size="large" className="MoreGameButton" onClick={this.props.moveRecommendationOffset}>Next 3</Button>

            </div>
        );
    }


}

export default Recommendation;