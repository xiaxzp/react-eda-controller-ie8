import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserInfo,Login} from "actions/userInfo";
import $ from "assets/scripts/jquery-1.12.min";

class UserInfo extends Component {
    componentDidMount(){
        this.props.Login('admin','admin').then((e)=>{console.log(e);console.log(this.props.loginInfo)});
    }
    componentWillReceiveProps(nextProps){
    }
    render() {
        const {userInfo, isLoading, errorMsg} = this.props.userInfo;
        return (
            <div>
                {
                    isLoading ? '请求信息中......' :
                        (
                            errorMsg ? errorMsg :
                                <div>
                                    <p>用户信息：</p>
                                    <p>用户名：{userInfo.name}</p>
                                    <p>介绍：{userInfo.intro}</p>
                                </div>
                        )
                }
                <button onClick={() => {this.props.getUserInfo();this.props.Login('admin','admin')}}>请求用户信息</button>
            </div>
        )
    }
}

export default connect((state) => ({userInfo: state.userInfo,loginInfo:state.userInfo.LoginInfo}), {getUserInfo,Login})(UserInfo);
