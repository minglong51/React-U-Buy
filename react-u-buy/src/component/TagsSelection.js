import React, { Component } from 'react';
import { Tag, Divider } from 'antd';
import controller1  from '../assets/controller1.svg';
import axios from 'axios';
import { Link } from 'react-router-dom';

class TagsSelection extends Component {

      renderTags = (item, idx) => { 
        const colors = this.props.colors;
        const color = this.props.colors[ idx % colors.length];
        const selected = this.props.selectedTags.indexOf(item);
        console.log(this.props);
        if (item !== "EMPTY") {
            return (  
                <Tag key={item} color={color} 
                    data-tag={item} 
                    className={selected !== -1 ? "SelectedTag" :"Tag"}
                    onClick={this.props.selectTag}
                >
                        {item}
                </Tag>    
        )}}

    render() {
        const {tags} = this.props;
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
                        this.props.tags.map((tag, idx) => this.renderTags(tag, idx))
                    }
                <div className="recommendBtnContainer">
                <Link className="recommendBtn" to="/recommendation">
                    <button className="recommendBtn" onClick={this.props.setTagsAtServer}>
                        Recommend!
                    </button>
                </Link>
                    </div> 
                </div>
                            
                </div>
                
             </div>    
        );
    }
}

export default TagsSelection;