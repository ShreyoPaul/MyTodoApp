import React from 'react';
import {TodoItem} from './TodoItem';

export const Todos = (props) => {

  let cardContainer = {
    display: "flex",
    flexDirection:"row" ,
    flexWrap:"wrap",
    justifyContent: "center"
  }
  let container = {
    minHeight : "20px",
    marginBottom :" 50px"
  }
  return (
    <div className="container" style={container}>
      <br />
      <h2 style={{textAlign: "Center"}}>Todos List</h2>
      
      <div className='cardContainer' style={cardContainer}>
        {
        props.todos.length===0 ? <h4>No Todos to display</h4> : 
          props.todos.map((todo)=>{
            
            return <TodoItem todo = {todo} key={todo.sno} onDelete = {props.onDelete}/>
          })
        }
        
        
      </div>
      
      
      
    </div>
  );
}
