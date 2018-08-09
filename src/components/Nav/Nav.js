import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';
import ConstantFunctions from "components/ConstantFunctions/ConstantFunctions";
import {BrowserRouter} from "react-router-dom"

var functions = ConstantFunctions();
export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switch: 0
        }
    }
    static resizefunc(){
        document.getElementById('navigator_container').style.height = functions.calcHeight()+'px';
    }
    componentDidMount(){
        document.getElementById('navigator_container').style.height = functions.calcHeight()+'px';
        functions.addHandler(window,'resize',this.resizefunc)
        //$('.login_father').css('height',height);
        //this.history();
    }
    componentWillUnmount(){
        functions.removeHandler(window,'resize',this.resizefunc)
    }
    componentWillReceiveProps(nextProps){
        console.log(window.location.hash)
    }
    isLogin(){
        if(window.location.hash.split('?')[0] == '#/'){
            return 'none'
        }
        else{
            return 'block'
        }
    }
    changeSwitch(num){
        this.setState({
            switch: this.state.switch==num?0:num
        })
    }
    switchTwo(){
        if(this.state.switch == 2){
            return (
                <div className="ChildClass">
                    <span><Link to="intergrationRoomList">this is 2</Link></span>
                </div>
            )
        }
        else{
            return (<div></div>)
        }
    }
    switchOne(){
        if(this.state.switch == 1){
            return (
                <div className="ChildClass">
                    <span><Link to="/userList">this is 1</Link></span>
                </div>)
        }
        else{
            return (<div></div>)
        }
    }

    render() {
        return (
            <div className="navigator_container" id="navigator_container" style={{display: this.isLogin()}}>
                <input id="userData" type="hidden" ></input>
                <div className="FatherClass" onClick={()=>this.changeSwitch(1)}>
                    <span>test</span>
                </div>
                {this.switchOne()}
                <div className="FatherClass" onClick={()=>this.changeSwitch(2)}>
                    <span>test2</span>
                </div>
                {this.switchTwo()}
            </div>
        );
        /*return (
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/userinfo">UserInfo</Link></li>
            </ul>
        )*/
    }
}