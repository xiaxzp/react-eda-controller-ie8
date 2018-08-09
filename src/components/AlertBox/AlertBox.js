import React, {Component} from 'react';
import {connect} from 'react-redux';
import ConstantFunctions from "components/ConstantFunctions/ConstantFunctions";
import './AlertBox.css';
var functions = ConstantFunctions();

export default class AlertBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
                <div className="jumpBox">
                    {this.props.names}
                    <button onClick={()=>{this.props.jumpBoxHandle('close')}}>close</button>
                </div>
        )
    }
}