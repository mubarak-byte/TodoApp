import React from 'react'
const Todos = (props)=>{
const completestyle= {
    fontStyle:"italic",
    color:"cdcdcd",
    textDecoration:"line-through"
  }
  return(
      <div className="container">
      <input type="checkbox"
      checked={props.todo.completed}
      onChange={()=>{props.Handleevent(props.todo.id)}}
      />
      <p style={props.todo.completed ? completestyle:null}> {props.todo.Tododata}</p>
     </div>
  )
}
export default Todos
