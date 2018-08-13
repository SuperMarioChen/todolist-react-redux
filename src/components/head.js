import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
let jian = (list) => ({type:'add',list})
 class Head extends Component {
     constructor(props){
        super(props)
        this.state={
            value:''
        }
     }
     inputval=(e)=>{
         this.setState({
            value:e.target.value
         })
     }
     KeyDownsend=(e)=>{
        if(e.keyCode===13){
            console.log(1)
            let list=this.props.list
            list.push({
                title:this.state.value,
                id:Date.now(),
                checked:true
            })
            this.props.additem(list)
            this.setState({
                value:''
            })
        }
     }
    render() {
        return (
            <header className="header" >
                <h1>todos</h1>
                <input className="new-todo" placeholder="请输入内容" 
                  onInput={this.inputval}
                  onKeyDown={this.KeyDownsend}
                  value={this.state.value}
                />
            </header>
        )
    }
}
function require(state){
    return {
        list:state.list
    }
}
function add(dispatch){
    return {
        additem: bindActionCreators(jian, dispatch)
    }
}
export default connect(require,add)(Head)