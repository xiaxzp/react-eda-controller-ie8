import React, {Component} from 'react';
import $ from '../../assets/scripts/jquery-1.12.min.js';
import {connect} from 'react-redux';
import ConstantFunctions from "components/ConstantFunctions/ConstantFunctions"
import './demo.css';

var functions = ConstantFunctions();
function Test2(){
    return (<span>test2</span>)
}
class demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    resizefunc(){
        document.getElementById('demo').style.height = functions.calcHeight()+'px';
    }
    componentDidMount(){
        document.getElementById('demo').style.height = functions.calcHeight()+'px';
        functions.addHandler(window,'resize',this.resizefunc)
        //$('.login_father').css('height',height);
        //this.history();
    }
    componentWillUnmount(){
        functions.removeHandler(window,'resize',this.resizefunc)
    }
    _handleClick() {
        var $this = this;
    }
    render() {
        return (
            <div className="demo" id="demo">
            </div>
        )
    }
}
export default connect((state) => ({loginInfo:state}), {})(demo);