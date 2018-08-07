import React, {Component} from 'react';
import $ from '../../assets/scripts/jquery-1.12.min.js';
import TestHeader from 'pages/Home/testHeader';
import {connect} from 'react-redux';
import {Login} from "actions/userInfo";
import ConstantFunctions from "components/ConstantFunctions/ConstantFunctions"
import './Home.css';

var functions = ConstantFunctions();
function Test2(){
    return (<span>test2</span>)
}
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            username:'',
            password:''
        }
    }
    resizefunc(){
        document.getElementById('login_father').style.height = functions.calcHeight()+'px';
    }
    componentDidMount(){
        document.getElementById('login_father').style.height = functions.calcHeight()+'px';
        functions.addHandler(window,'resize',this.resizefunc)
        //$('.login_father').css('height',height);
        //this.history();
    }
    componentWillUnmount(){
        functions.removeHandler(window,'resize',this.resizefunc)
    }
    _handleClick() {
        /*this.setState({
            count: ++this.state.count
        });*/
        var $this = this;
        this.mainObj = document.getElementById('userData');
        this.state.username = document.getElementById('inputusername').value;
        this.state.password = document.getElementById('inputpassword').value;
        if(this.state.username.length<=0 || this.state.password.length<=0){
            alert('请输入用户名及密码！')
            return;
        }
        else{
            this.props.Login('admin','admin').then((e)=>{
                console.log(e)
                console.log(this.props.loginInfo.data);
                try{
                    if(sessionStorage){
                        sessionStorage['authenticationToken'] = this.props.loginInfo.data;
                        //return;
                    }
                }catch(e){
                    console.log('no session')
                    if (!this.mainObj.style.behavior) {
                        this.mainObj.style.behavior = 'url(#default#userData)';
                    }
                    var sExpirationDate = new Date(new Date().getTime()+1000*3600*24*7).toUTCString(); // Start Time
                    this.mainObj.expires = sExpirationDate;
                    this.mainObj.setAttribute("authenticationToken",this.props.loginInfo.data);
                    this.mainObj.save("LoginDataStore");
                }
                this.props.history.push({pathname:'/intergrationRoomList'});
            });
        }

    }
    history(){
        var data = {id:3,name:'test',age:36};
        var path = {
            pathname:'/counter',
            query:data,
        }
        //this.props.history.push(path);
        // <Link to={{ pathname: '/counter' , query : {id:3,name:'test',age:36}}}>test</Link>
    }
    render() {
        return (
            <div className="login_father" id="login_father">
                <h1>this is home~</h1>
                <div className="left_content"></div>
                <div className="login_content">
                    <input type="text" id="inputusername"></input>
                    <input type="password" id="inputpassword"></input>
                    <button onClick={() => this._handleClick()}>登陆</button>
                    <TestHeader />
                    <Test2 />
                </div>
            </div>

        )
    }
}
export default connect((state) => ({loginInfo:state.userInfo.LoginInfo}), {Login})(Home);