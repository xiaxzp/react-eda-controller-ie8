import React, {Component} from 'react';
import $ from '../../assets/scripts/jquery-1.12.min.js';
import {connect} from 'react-redux';
import ConstantFunctions from "components/ConstantFunctions/ConstantFunctions"
import './UserList.css';
import {userlist_add} from "actions/userCounter"
import {userwatchpower_get} from "actions/userWatchPower";
import DemoBox from "components/jumpBox/demoBox/demoBox"
import JumpBoxUserIntergrate from "components/jumpBox/UserIntergrate/jumpBoxUserIntergrate"
import JumpBoxUserWatch from "components/jumpBox/UserWatch/jumpBoxUserWatch"

var functions = ConstantFunctions();
function Test2(){
    return (<span>test2</span>)
}
class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jumpBox:0,
            selectedUserId : 0,
            searchName:''
        }
        //this._handleJumpBoxConfirm = this._handleJumpBoxConfirm.bind(this)
        this.debounce = null;
    }
    resizefunc(){
        document.getElementById('User_father').style.height = functions.calcHeight()+'px';
    }
    componentDidMount(){
        document.getElementById('User_father').style.height = functions.calcHeight()+'px';
        functions.addHandler(window,'resize',this.resizefunc)
        //$('.login_father').css('height',height);
        //this.history();
        console.log(this.props.loginInfo)
    }
    componentWillUnmount(){
        functions.removeHandler(window,'resize',this.resizefunc)
    }
    _handleJumpBoxConfirm(e){
        this.setState({
            jumpBox:0
        })
    }
    _handleJumpBox(){
        switch (this.state.jumpBox){
            case 0:
                return (<div></div>)
            case 1:
                return (<DemoBox ids={this.state.selectedUserId }
                                 jumpBoxHandle={(e) => this._handleJumpBoxConfirm(e)}/>)
            case 2:
                return (<JumpBoxUserWatch ids={this.state.selectedUserId }
                                          jumpBoxHandle={(e) => this._handleJumpBoxConfirm(e)}/>)
            case 3:
                return (<JumpBoxUserIntergrate ids={this.state.selectedUserId }
                                               jumpBoxHandle={(e) => this._handleJumpBoxConfirm(e)}/>)
        }
    }

    _handleClick(num) {
        var $this = this;
        this.setState({
            jumpBox:1,
            selectedUserId:num+''
        })
    }
    _handleClickWatchPower(num){
        this.setState({
            jumpBox:2,
            selectedUserId:num
        })
    }
    _handleClickIntergratePower(num){
        this.setState({
            jumpBox:3,
            selectedUserId:num
        })
    }

    _handleSearch(event){
        var $this = this;
        var e = event.target?event.target.value:event.srcElement.value;
        console.log(event.target)
        try{
            window.clearTimeout(this.debounce);
        }catch(err){
        }
        this.debounce = setTimeout(()=>{
            console.log(e)
            $this.setState({
                searchName:e
            })
        },500)
    }

    tablelist(){
        var tdbundles = [];
        var $this = this;
        var userLists = this.props.userlists;
        var searchName = this.state.searchName;
        for(var i=0;i<userLists.length;i++){
            //console.log(this.props.userlistscount)
            if(searchName){
                console.log(searchName)
                if(userLists[i].name.indexOf(searchName)<0){
                    continue;
                }
            }
            tdbundles.push(
                <tr key={i}>
                    <td>{userLists[i].name}</td>
                    <td>{userLists[i].state}</td>
                    <td onClick={((x)=>()=>this._handleClickWatchPower(x))(userLists[i].id)}>详情</td>
                    <td onClick={((x)=>()=>this._handleClickIntergratePower(x))(userLists[i].id)}>详情</td>
                    <td>
                        <span onClick={((x)=>{
                            return function(){$this._handleClick(x)}
                        })(userLists[i].id)}>修改</span>
                    </td>
                </tr>
            )
        }
        return tdbundles
    }

    render() {
        return (
            <div className="User_father" id="User_father">
                <div className="search_container">
                    <input type="text" className="searchNameOrAddress" placeholder="请填写名称/地址关键字"
                           onChange={(e)=>{this._handleSearch(e)}}></input>
                    <input type="text" className="selectProtocol" placeholder="选择网络协议"></input>
                    <button className="CreateTarget" onClick={()=>this.props.userlist_add()}>新建</button>
                </div>
                <div className="table_container">
                    <table>
                        <tbody>
                        <tr>
                            <th>用户名</th>
                            <th>状态</th>
                            <th>查看权限</th>
                            <th>审讯权限</th>
                            <th>操作</th>
                        </tr>
                        {this.tablelist()}
                        </tbody>
                    </table>
                </div>
                {this._handleJumpBox()}
            </div>
        )
    }
}
export default connect((state) => (
    {
        userlists:state.userCounter.userList,
        loginInfo:state.userInfo.LoginInfo,
        userWatchPowerCount: state.userWatchPower.userWatchPowerGet,
        userlistscount:state.userCounter.userListCounts
    }),
    {userlist_add,userwatchpower_get}
    )(UserList);