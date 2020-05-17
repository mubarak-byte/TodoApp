import React from 'react'
import Todos from './Todos'
import {Todoarry} from './Todoarry'
 class App extends React.Component{
   constructor (){
     super()
     this.state={
       Todoarry:Todoarry
     }
     this.Handleevent=this.Handleevent.bind(this)
   }
   Handleevent(id){
  this.setState(prev =>  {
    const updatedtodo = prev.Todoarry.map(todo => {
      if(todo.id===id){
        todo.completed =!todo.completed
      }
      return todo
    })
    return {
      Todoarry:updatedtodo
    }
    })
  }

   render(){
            const Todoitem= Todoarry.map(todo => <Todos key={todo.id} todo={todo} Handleevent={this.Handleevent}/>)
     return(
       <div>
       {Todoitem}
       </div>
     )
   }
 }
export default App
