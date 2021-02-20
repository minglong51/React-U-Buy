import React, { Component } from 'react';
import { Tag, Divider } from 'antd';

class TagsSelection extends Component {
    state = {
        tags: ["RPG", "FPS", "Mystery", "Japanese Anime"],
    }

    render() {

        return (
            <div className="TagsMain">
                <div className="TagsText">

                     What kinds of games do you like?
 
                </div>

                <div className="TagsSelection">

                <div>
                    <Tag color="magenta" className="Tag">magenta sfaffsfe eaf</Tag>
                    <Tag color="blue" className="Tag">magentagsgsgvgsvs</Tag>
                    <Tag color="yellow" className="Tag">magen sfsg  stgsta</Tag>
                    <Tag color="blue" className="Tag">mageg snta</Tag>
                    <Tag color="green" className="Tag">mage sfssnta</Tag>
                    <Tag color="red" className="Tag">magenta</Tag>
                    <Tag color="orange" className="Tag">magenta</Tag>
                    <Tag color="purple" className="Tag">magenta</Tag>
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