import React, {useState, Component} from 'react';
import 'antd/dist/antd.css';
import { Table,  Button, Popconfirm, Input, InputNumber, Form} from 'antd';




class LikedGames extends Component {




    render() {


        //console.log(this.state.count)
        return (
            <div>
                <Button onClick={this.handleAdd}
                        type="primary"
                        style={{
                            marginBottom: 16,
                        }}>
                    Add a New Location
                </Button>

            </div>

        );
    };

}
export default LikedGames;