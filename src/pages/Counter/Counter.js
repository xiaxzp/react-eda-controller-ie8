import React, {Component} from 'react';
import {increment, decrement, reset} from 'actions/counter';

import {connect} from 'react-redux';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.id = 0 ;
        if(this.props.location.hasOwnProperty('query')==false){
            var path = {
                pathname:'/',
            }
            //this.props.history.push(path);
        }
        else {
            this.id = this.props.location.query.id;
        }
    }
    handleClick() {
        console.log('click')
        //<span>{this.props.location.query.id}</span>
    }
    shownum(){
        var list = [];
        for(var i=0;i<this.props.counter.count;i++){
            list.push(<div key={i}>当前计数为{this.props.counter.count}</div>)
        }
        return list
    }
    render() {
        return (
            <div>
                {this.shownum()}
                <button onClick={() => {this.handleClick();return this.props.increment()}}>自增
                </button>
                <button onClick={() => this.props.decrement()}>自减
                </button>
                <button onClick={() => this.props.reset()}>重置
                </button>
                <span>{this.id}</span>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment())
        },
        decrement: () => {
            dispatch(decrement())
        },
        reset: () => {
            dispatch(reset())
        }
    }
};

export default connect(mapStateToProps, {increment,decrement,reset})(Counter);