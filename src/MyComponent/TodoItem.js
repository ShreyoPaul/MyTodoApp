import React from 'react';


export const TodoItem = ({todo,onDelete}) => {
  let styleCard = {
    backgroundColor : "#f0ebe3",
    border : " 2px solid #2c3639",
    textAlign : "left",
    margin : "2%",
    padding : "2%",
    borderRadius: "10px",
    width : "27%",
   
  }

  let Delete = {
    marginBottom : "2%",
  }

  
  return (
    <div style={styleCard}>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      {/* <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>  */}
      <div className='btn btn-danger btn-sm ' onClick={() => {onDelete(todo)}} style={Delete}>Delete</div>
    </div>
  );
}
