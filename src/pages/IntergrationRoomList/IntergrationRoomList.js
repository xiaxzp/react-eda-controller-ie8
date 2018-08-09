import React, {Component} from 'react';
import $ from '../../assets/scripts/jquery-1.12.min.js';
import {connect} from 'react-redux';
import ConstantFunctions from "components/ConstantFunctions/ConstantFunctions"
import './IntergrationRoomList.css';
import {increment} from "actions/intergration_room_list"
import DemoBox from "components/jumpBox/demoBox/demoBox"

var functions = ConstantFunctions();
function Test2(){
    return (<span>test2</span>)
}
class IntergrationRoomList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jumpBox:0,
            searchName:'',
            selectedRoomId : 0,
        }
    this. debounce = null;
        //this._handleJumpBoxConfirm = this._handleJumpBoxConfirm.bind(this)
    }
    resizefunc(){
        document.getElementById('IntergrationRoom_father').style.height = functions.calcHeight()+'px';
    }
    componentDidMount(){
        document.getElementById('IntergrationRoom_father').style.height = functions.calcHeight()+'px';
        functions.addHandler(window,'resize',this.resizefunc)
        //$('.login_father').css('height',height);
        //this.history();
        console.log(this.props.loginInfo)
    }
    componentWillUnmount(){
        functions.removeHandler(window,'resize',this.resizefunc)
    }

    _handleJumpBoxConfirm(e){
        alert(e);
        this.setState({
            jumpBox:0
        })
    }
    _handleJumpBox(){
        switch (this.state.jumpBox){
            case 0:
                return (<div></div>)
            case 1:
                return (<DemoBox ids={this.state.selectedRoomId + 'd'} jumpBoxHandle={(e) => this._handleJumpBoxConfirm(e)}/>)
        }
    }

    _handleClick(num) {
        var $this = this;
        alert(num);
        this.setState({
            jumpBox:1,
            selectedRoomId:num
        })
    }

    _handleSearch(event){
        var $this = this;
        var e = event.target?event.target.value:event.srcElement.value;
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
        var roomLists = this.props.roomLists;
        var searchName = this.state.searchName;
        for(var i=0;i<roomLists.length;i++){
            if(searchName){
                console.log(searchName)
                if(roomLists[i].name.indexOf(searchName)<0){
                    continue;
                }
            }
            tdbundles.push(
                <tr key={i}>
                    <td>{roomLists[i].id}</td>
                    <td>{roomLists[i].name}</td>
                    <td>{roomLists[i].address}</td>
                    <td>{roomLists[i].protocol}</td>
                    <td>
                        <span onClick={((x)=>{
                            return function(){$this._handleClick(x)}
                        })(roomLists[i].id)}>修改</span>
                    </td>
                </tr>
            )
        }
        return tdbundles
    }
    render() {
        return (
            <div className="IntergrationRoom_father" id="IntergrationRoom_father">
                <div className="search_container">
                    <input type="text" className="searchNameOrAddress" placeholder="请填写名称/地址关键字"
                           onChange={(e)=>this._handleSearch(e)}></input>
                    <input type="text" className="selectProtocol" placeholder="选择网络协议"></input>
                    <button className="CreateTarget" onClick={this.props.increment}>新建</button>
                </div>
                <div className="table_container">
                    <table>
                        <tbody>
                            <tr>
                                <th>序号</th>
                                <th>审讯室名称</th>
                                <th>摄像头地址</th>
                                <th>网络协议</th>
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
export default connect((state) => ({
    count:state.intergration_room_list.roomlistCount,
    loginInfo:state.userInfo.LoginInfo,
    roomLists:state.intergration_room_list.roomList
}), {increment})(IntergrationRoomList);