import React, {Component} from 'react';
import {connect} from 'react-redux';
import ConstantFunctions from "components/ConstantFunctions/ConstantFunctions";
import './jumpBoxUserWatch.css';
import '../jumpBox.css';
import {userwatchpower_get} from "actions/userWatchPower";
import {userlist_changewatch} from "actions/userCounter";
var functions = ConstantFunctions();

 class JumpBoxUserWatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userLists : this.props.userlists[this.props.ids].watchPower,
            showAddBox:false
        }
    }
    listRemove(num){
        this.state.userLists.splice(num,1)
        this.setState({
            userLists:this.state.userLists
        })
        this.props.userlist_changewatch(this.props.ids,this.state.userLists)
    }


    closeAddBox(){
        var inputvalue = document.getElementById('addWatchPower').value
        console.log(document.getElementById('addWatchPower').value)
        this.setState({
            showAddBox:false
        })
        if(inputvalue){
            this.state.userLists.unshift(inputvalue)
            this.setState({
                userLists:this.state.userLists
            })
            this.props.userlist_changewatch(this.props.ids,this.state.userLists)
        }
    }
    showAddBox() {
        this.setState({
            showAddBox:true
        })
    }

    addBox(){
        if(this.state.showAddBox){
            return (<div className="addBox" >
                <input id="addWatchPower" type="text"/>
                <button onClick={()=>this.closeAddBox()}>confirm</button>
            </div>)
        }
    }

    listWatchList(){
        var userLists = this.state.userLists;
        var liBundles = [];
        userLists.forEach((item,index)=>{
            liBundles.push (
                <li key={index}>
                    {item}
                    <button className="deleteItem" onClick={((x)=>()=>{this.listRemove(x)})(index)}>删除</button>
                </li>
            )
        });
        return liBundles
    }

    render() {
        return (
            <div className="darkBackground">
                <div className="jumpBox">
                    {this.props.ids}
                    <button onClick={()=>this.showAddBox()}>add</button>
                    {this.addBox()}
                    <button className="closeBtn" onClick={()=>{this.props.jumpBoxHandle('close')}}>close</button>
                    <ul>
                        {this.listWatchList()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect((state) => (
        {
            userlists:state.userCounter.userList,
            userlistscount:state.userCounter.userListCounts
        }), {userlist_changewatch}
)(JumpBoxUserWatch);