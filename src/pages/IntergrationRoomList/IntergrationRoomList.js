import React, {Component} from 'react';
import $ from '../../assets/scripts/jquery-1.12.min.js';
import {connect} from 'react-redux';
import ConstantFunctions from "components/ConstantFunctions/ConstantFunctions"
import './IntergrationRoomList.css';

var functions = ConstantFunctions();
function Test2(){
    return (<span>test2</span>)
}
class IntergrationRoomList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    resizefunc(){
        document.getElementById('IntergrationRoom_father').style.height = functions.calcHeight()+'px';
    }
    componentDidMount(){
        document.getElementById('IntergrationRoom_father').style.height = functions.calcHeight()+'px';
        functions.addHandler(window,'resize',this.resizefunc)
        //$('.login_father').css('height',height);
        //this.history();
    }
    componentWillUnmount(){
        functions.removeHandler(window,'resize',this.resizefunc)
    }
    _handleClick(num) {
        var $this = this;
        alert(num);
    }
    tablelist(){
        var tdbundles = [];
        var $this = this;
        for(var i=0;i<10;i++){
            tdbundles.push(
                <tr key={i}>
                    <td>i</td>
                    <td>i</td>
                    <td>i</td>
                    <td>i</td>
                    <td onClick={((x)=>{
                        return function(){$this._handleClick(x)}
                    })(i)}>i</td>
                </tr>
            )
        }
        return tdbundles
    }
    render() {
        return (
            <div className="IntergrationRoom_father" id="IntergrationRoom_father">
                <div className="search_container">
                    <input type="text" className="searchNameOrAddress" placeholder="请填写名称/地址关键字"></input>
                    <input type="text" className="selectProtocol" placeholder="选择网络协议"></input>
                    <button className="CreateTarget">新建</button>
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
            </div>
        )
    }
}
export default connect((state) => ({loginInfo:state}), {})(IntergrationRoomList);