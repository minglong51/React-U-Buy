import {Component} from 'react';
import {Tag} from 'antd'
import { Card, Avatar } from 'antd';
import {EllipsisOutlined } from '@ant-design/icons';
import {Button} from 'antd';
import { FrownOutlined, HeartTwoTone, HeartFilled} from '@ant-design/icons';
import controller3  from '../assets/controller3.svg';
import controller4  from '../assets/controller4.svg';
import { Link } from 'react-router-dom';

const { Meta } = Card;

class Recommendation extends Component {

    renderCards = (item) => { 
        let isFav = false;
        let favoriteGames = this.props.likedGames;
         for (let i = 0; i < favoriteGames.length; i++) {
             let game = favoriteGames[i];
             if (game.productId === item.productId) {
                 console.log("TURE");
                 isFav = true;
                 break;
             }
         }
         let heartColor = isFav ? "red" : "#808080";

         let onClickFunc = isFav ? this.props.unsetFavorite : this.props.setFavorite;

        console.log(item.rawProduct);
        console.log(isFav);

        return (
        <Card className="Card"
        style={{ width: 300,}}
        cover={
        <img
            alt="example"
            src={item.imageUrls}
        />}
            actions={[
            <FrownOutlined color="#1890FF" key="setting" />,
            <HeartTwoTone
                data-product={item.rawProduct} 
                twoToneColor={heartColor} 
                onClick={
                  () => {onClickFunc(item.rawProduct)}  
                } />,
            <EllipsisOutlined key="ellipsis" />,
            ]}
            title={item.productName}
            key={item.productName}
        >
        <Meta
        description={item.description}
        />
    </Card>  

    )}

    renderTags = (item, idx) => { 
        const {colors} = this.props;
        const color = colors[ idx % colors.length];
        if (item !== "EMPTY") {
            return (  
                <Tag key={item} color={color} 
                    data-tag={item} 
                    className="RecommendationTag"
                >
                        {item}
                </Tag>    
     )}}

    render() {
        const items = this.props.recommendedGames;
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
                <img src={controller4} alt="icon" className="Controllers"/> Game Recommendation
                </div>
                <div className="RecommendationCards">    
                    {items.map(item => this.renderCards(item))}
                </div>
      
                <Button type="primary" size = "large" className="MoreGameButton" onClick={this.props.getRecommendation}>Another Round</Button>
          
                </div>
        );
    }


}

export default Recommendation;