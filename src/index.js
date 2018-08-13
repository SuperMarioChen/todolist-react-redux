import React from 'react';
import ReactDOM from 'react-dom';
import './css/base.css';
import './css/index.css';
import App from './App';
import {createStore,applyMiddleware} from 'redux'
import { Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
let data={
  hash:'all',
  list:[
    {
      id:1,
      title:'woshi',
      checked:true
    },
    {
      id:2,
      title:'woshi222',
      checked:false
    }
  ]
}
function reducer(state={},action){//state={}是一个结构赋值  state相当于数据
  switch (action.type) {
    case 'add':
    
      return {
        ...state,
        list:[...action.list]
      }
      
      break;
    case 'allchecked':
      return {
        ...state,
        list:state.list.map(item=>{
          
            return {
              ...item,
              checked:action.bl
            }
          })
      }
    break; 
    case 'onechecked':
    console.log(action)
    
      return {
        ...state,
        list:state.list.map(item=>{
            if(item.id === action.id){
              return{
                ...item,
                checked:!item.checked
              }
            }
            return item
          })
      }
    break;
    case 'onedel':
    console.log(action)
    
      return {
        ...state,
        list:state.list.filter(item=>{
            
            return item.id !== action.id
          })
      }
    break;
    case 'changeTitle':
    console.log(action)
    
      return {
        ...state,
        list:state.list.map(item=>{
            if(item.id===action.id){
              return {
                ...item,
                title:action.value
              }
            }
            return item
          })
      }
    break;
    case 'hashchange':
    console.log(action)
    
      return {
        ...state,
        list:[...action.list]
            
      }
    break;
    
    default:
      return state;
      break;
  }
}
 
let store = createStore(reducer,data,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.getElementById('root'));
registerServiceWorker();
