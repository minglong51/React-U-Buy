import React, { Component } from 'react';
import { Tag, Divider } from 'antd';
import controller1  from '../assets/controller1.svg';
import axios from 'axios';

class TagsSelection extends Component {
    state = {
        tags: [],
        colors: ["blue", "yellow", "orange", "magenta","green"],
    }

    getTags = () => {
        const url = '/genres';
        axios.get(url)
           .then(response => {
               const data = response.data.genres.map((genres) => {
                 return {
                          "genreName" : genres.genreName, 
                          "genreId" : genres.genreId,             
                        }           
               })
               this.setState({
                 ...this.state, 
                 tags:data}
               );
                console.log(this.state.tags);
           })
           .catch(error => {
               console.log('err in fetch products -> ', error);
           })
    
      }
    
      componentDidMount = () => {
        this.getTags();
      }
      renderTags = (item) => { 
        const {colors} = this.state;
        const color = colors[Math.floor(Math.random() * colors.length)];
        console.log(color);
        return (  
        <Tag key={item.genreName} color={color} className="Tag">{item.genreName}</Tag>

        )}

    render() {
        const {tags} = this.state;
        return (
            <div className="TagsMain">
                <div className="TagsHeader">
                    <img src={controller1} className="TagsControllerIcon" alt="icon"/>
                    <div className="TagsText">
                        What kinds of games do you like?  
                    </div>
                </div>
                <div className="TagsSelection">

                <div>
                    {   
                        tags.map(tag => this.renderTags(tag))
                    }
                <div className="recommendBtnContainer">
                        <button className="recommendBtn">Recommend!</button>
                    </div> 
                </div>
                            
                </div>
                
             </div>    
        );
    }
}

export default TagsSelection;