import React, { Component } from 'react'
import "./TodoApp.css";


export default class TodoApp extends Component {
state = {
  input: "",
  items:[]
};

handleChange = Event => { this.setState({
  input:Event.target.value
});


}
storeitems = Event=>{
 Event.preventDefault()
const { input } = this.state;


this.setState({
  items: [...this.state.items,input],
  input :""
});
}

deleteItem =key =>{
  console.log(key);
  const allitems=this.state.items

  allitems.splice(key,1);

  this.setState({
    items : allitems
  })

  }




  render() {
    const {input, items} =this.state;
    console.log(items);
    return (
      <div className="todo-contanier"> 
      

      <form className="input-section " onSubmit={this.storeitems}>
      <h1>Todo App</h1> 
       <input type="text"  value= {input} onChange={(this.handleChange)} placeholder='Enter items....' />
       
      </form>
      <ul>
      {items.map((data,index) => (
        <li key ={index}> {data} <i className="fa-solid fa-trash-can"  onClick={() => this.deleteItem(index)}></i></li>
      )
       )}
        
      </ul>
      </div>
    )
  }
}
