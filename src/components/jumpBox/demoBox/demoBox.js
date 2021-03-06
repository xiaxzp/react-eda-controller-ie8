import React, {Component} from 'react';
import {connect} from 'react-redux';
import ConstantFunctions from "components/ConstantFunctions/ConstantFunctions";
import './demoBox.css';
import '../jumpBox.css';
var functions = ConstantFunctions();

export default class DemoBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="darkBackground">
                <div className="jumpBox">
                    {this.props.ids}
                    <button className="closeBtn" onClick={()=>{this.props.jumpBoxHandle('close')}}>close</button>
                </div>
            </div>
        )
    }
}