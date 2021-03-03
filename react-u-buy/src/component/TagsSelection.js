import React, { Component } from 'react';
import { Tag, Divider } from 'antd';
import controller1  from '../assets/controller1.svg';
import axios from 'axios';
import { Link } from 'react-router-dom';

class TagsSelection extends Component {
    

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         tags: [],
    //         colors: ["blue", "yellow", "orange", "magenta","green", "purple"],
    //         selectedTags: [],
    //     }
    //   }

    // getTags = () => {
    //     const url = '/genres';
    //     axios.get(url)
    //        .then(response => {
    //            const data = response.data.tag_types.map((tags) => {
    //                 return tags;                  
    //            })
    //            this.setState({
    //              ...this.state, 
    //              tags:data}
    //            );
    //             console.log(this.state.tags);
    //        })
    //        .catch(error => {
    //            console.log('err in fetch products -> ', error);
    //        })   
    //   }
    

    //   selectTag = (e) => {
    //     let tag = e.target.dataset.tag;
    //     let idx = this.state.selectedTags.indexOf(tag);
    //     if (idx === -1) {
    //         this.setState(prevState => ({
    //             selectedTags: [...prevState.selectedTags, tag]
    //           }));
    //         console.log(this.state);
    //     } else {
    //         let tmpArray = [...this.state.selectedTags];
    //         tmpArray.splice(idx, 1);
    //         this.setState(prevState => ({
    //             selectedTags: tmpArray
    //         }));
    //         console.log(this.state);
    //     }
    //   }

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

        // setTagsAtServer = () => {
        //     axios.post('/user/433', 
        //         this.state.selectedTags
        //     ).then(response => {
        //         console.log(response);
        //     })
        //     .catch();    
        // }

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