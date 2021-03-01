import {Component} from 'react';
import {Tag} from 'antd'
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import {Button} from 'antd';
import axios from 'axios';
import { FrownOutlined, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import controller3  from '../assets/controller3.svg';
import controller4  from '../assets/controller4.svg';

const { Meta } = Card;

class Recommendation extends Component {

    state = {
        recommendedGame : [],
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
                        }           
               })
               this.setState({
                 ...this.state, 
                 recommendedGame:data}
               );
           })
           .catch(error => {
               console.log('err in fetch products -> ', error);
           })
      }
    
      componentDidMount = () => {
        this.getRecommendation();
      }

    renderCards = (item) => { return (  
        <Card className="Card"
        style={{ width: 300 }}
        cover={
        <img
            alt="example"
            src={item.imageUrls}
        />}
            actions={[
            <FrownOutlined color="#1890FF" key="setting" />,
            <HeartTwoTone twoToneColor="red" key="edit" />,
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

    render() {
        // console.log(this.state.recommendedGame);
        const items = this.state.recommendedGame;
        
        return (
            
            <div className="Recommendation">
                <div className="RecommendationHeaderText">
                    <img src={controller3} alt="icon"/> Game Preference
                </div>
                <div className="RecommendationHeaderTags">
                    
                    <Tag color="magenta" className="RecommendationTag">First Person Shooter</Tag>
                    <Tag color="blue" className="RecommendationTag">Party</Tag>
                    <Tag color="yellow" className="RecommendationTag">Collaborate</Tag>
                </div>
                <div className="GameRecommendation">
                <img src={controller4} alt="icon"/> Another Round
                </div>
                <div className="RecommendationCards">
               
                {items.map(item => this.renderCards(item))}
                </div>
      
                <Button type="primary" size = "large" className="MoreGameButton" onClick={this.getRecommendation}>More Games</Button>
          
                </div>
        );
    }


}

export default Recommendation;