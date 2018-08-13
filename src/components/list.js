import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Item from './item'
class List extends Component {
	constructor(props){
		super(props)
		this.state={
			list:this.props.list,
			editId:-1
		}
	}
	componentWillReceiveProps(nextProps){
		this.setState(
			{
				list:this.props.list
			}
		)
	}
	componentDidMount(){
		
		window.addEventListener('hashchange',()=>{
			
			console.log(this.state.list)
			let hash=window.location.hash.slice(2)
			if(hash==='all'){
				this.setState({
					list:this.props.list.filter(item=>{
						return true
					})
				})
				
			}else if(hash==='active'){
				this.setState({
					list:this.props.list.filter(item=>{
						return item.checked===false
					})
				})
				
			}else if(hash==='completed'){
				this.setState({
					list:this.props.list.filter(item=>{
						return item.checked===true
					})
				})
				
			}
			
			
			//只有  props还有state改变才能更新页面  父级影响子集  re'du'x是覆盖更新
		})
	}
	checkedall=(e)=>{
		this.props.checkedall(e.target.checked)
	}
	dblclick=(id)=>{
		console.log(id)
		this.setState({
			editId:id
		})
	}
    render() {
		let {list}=this.props
        return (
			<section className="main">
			<input className="toggle-all" type="checkbox" onClick={this.checkedall}/>
			<ul className="todo-list">
				{this.state.list.map((item)=>{
					return <Item key={item.id}
					 item={item} 
					 dblclick={this.dblclick}
					 editId={this.state.editId}
					 ></Item>
				})}
			</ul>
		</section>
        )
    }
}
let allchecked = (bl) => ({type:'allchecked',bl})
function nashuju(state){
    return {
        list: state.list
      }
}
function gai (dispatch){
	return {
		checkedall:bindActionCreators(allchecked,dispatch)
	}
}
export default connect(nashuju,gai)(List)
