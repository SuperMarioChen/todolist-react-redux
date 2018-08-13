import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import classnames from 'classnames'
class item extends Component {
    constructor(props){
        super(props)
        this.state={
            value:this.props.item.title
        }
        this.input = React.createRef();
    }
    dblclicks=()=>{
        console.log(this.input)
        
        this.props.dblclick(this.props.item.id)
        setTimeout(()=>{
            this.input.focus()
        },)
    }
    render() {
        return (
            <li className={classnames({
                editing: this.props.item.id === this.props.editId
              })}>
                <div className="view">
                    <input className="toggle" 
                        type="checkbox" 
                        checked={this.props.item.checked}
                        onClick={()=>{
                            this.props.checkedone(this.props.item.id)
                        }}/>
                    <label
                        onDoubleClick={this.dblclicks}
                    >{this.props.item.title}</label>
                    <button className="destroy" onClick={()=>{
                        this.props.delitem(this.props.item.id)
                    }}></button>
                </div>
                <input 
                    className="edit" 
                    value={this.state.value}
                    ref={(input) => {this.input=input}}
                    onChange={(e)=>{
                            this.setState({
                                value:e.target.value
                            })
                        }
                    }
                    onBlur={(e) => {
                            this.props.dblclick(-1)
                            this.props.changeTitle(this.props.item.id, e.target.value)
                        }}
                />
            </li>
				
        )
    }
}
let onechecked = (id) => ({type:'onechecked',id})
let delitem = (id) => ({type:'onedel',id})
let changeTitle=(id,value)=>({type:'changeTitle',id,value})
function itemna(state){
    return {
        list: state.list
    }
}
function itemgai(dispatch){
    return {
        checkedone:bindActionCreators(onechecked,dispatch),
        delitem:bindActionCreators(delitem,dispatch),
        changeTitle:bindActionCreators(changeTitle,dispatch),
	}
}
export default connect(itemna,itemgai)(item)