import {Component} from 'react';
import {Tag} from 'antd'
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import {Button} from 'antd';
import axios from 'axios';
import { FrownOutlined, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import controller3  from '../assets/controller3.svg';
import controller4  from '../assets/controller4.svg';
import { Link } from 'react-router-dom';

const { Meta } = Card;

class Recommendation extends Component {

    // state = {
    //     recommendedGame : [],
    //     user: {},
    //     tags:[],
    //     colors: ["blue", "yellow", "orange", "magenta","green", "purple"],
    // }

    // getRecommendation = () => {
    //     const url = '/products?page=4&page_size=3';
    //     axios.get(url)
    //        .then(response => {
    //            const data = response.data.products.map((product) => {
    //              return {
    //                       "productName" : product.productName,
    //                       "purchaseURL"  :product.purchaseUrl,
    //                       "productDescription" :product.productDescription,
    //                       "imageUrls" : product.imageUrls.split(","),
    //                     }           
    //            })
    //            this.setState({
    //              ...this.state, 
    //              recommendedGame:data}
    //            );
    //        })
    //        .catch(error => {
    //            console.log('err in fetch products -> ', error);
    //        })
    //   }

    //   getUser = () => {
    //     const url = '/user/433';
    //     axios.get(url)
    //        .then(response => {
    //            const user = response.data.user;

    //            const splitTags = user.tags.split(",");
           
    //            this.setState({
    //              ...this.state, 
    //              user:user,
    //              tags: splitTags}
    //            );
    //        })
    //        .catch(error => {
    //            console.log('err in fetch products -> ', error);
    //        })
    //   }
    
    //   componentDidMount = () => {
    //     this.getRecommendation();
    //     this.getUser();
    //   }

      componentDidUpdate = () => {   
        //this.getUser();
      }

      onClick = (e) => {
        console.log(e);
      }

    renderCards = (item) => { 
        console.log(item.rawProduct);
        return (
        <Card className="Card"
        style={{ width: 300,  }}
        cover={
        <img
            alt="example"
            src={item.imageUrls}
        />}
            actions={[
            <FrownOutlined color="#1890FF" key="setting" />,
            <HeartTwoTone 
                data-product={item.rawProduct} 
                twoToneColor="red" 
                onClick={
                  () => {this.props.setFavorite(item.rawProduct)}  
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