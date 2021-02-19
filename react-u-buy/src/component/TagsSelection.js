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
                    <Tag color="magenta" className="Tag">magentagsgsgvgsvs</Tag>
                    <Tag color="magenta" className="Tag">magen sfsg  stgsta</Tag>
                    <Tag color="magenta" className="Tag">mageg snta</Tag>
                    <Tag color="magenta" className="Tag">mage sfssnta</Tag>
                    <Tag color="magenta" className="Tag">magenta</Tag>
                    <Tag color="magenta" className="Tag">magenta</Tag>
                    <Tag color="magenta" className="Tag">magenta</Tag>
                </div>

                </div>
                
             </div>    
        );
    }
}

export default TagsSelection;