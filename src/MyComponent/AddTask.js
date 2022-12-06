import React from 'react'
import {useState} from 'react';

export const AddTask = (props) => {

    let task = {
        margin: "0 2%",
        marginBottom : "20px "
    }    
    let head = {
        textAlign : "center",
        margin: "2% auto 1% auto",
        width: "100%",
        
    }
    let inpt = {
        textAlign : "left",
        paddingLeft : "35%",
        marginBottom : "1%"
    }

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const dltAll = ()=>{
        props.dltAll();
    }

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description can not be EMPTY !")
            title = e.target.value
            desc = e.target.value
        }
        else props.addTodo(title,desc);
        setTitle("");
        setDesc("");
    }
    return (
        <div style={head}>
            <h2 style={{textAlign : "center"}}>Add Todo</h2>
            <div className="inpt1" style={inpt}>
                <label htmlFor="Title">Title</label><br />
                <input htmlFor='Title' value={title} onChange={(e)=>{setTitle(e.target.value)}} type="text" name="" placeholder='Add Title' style={{ width: "50%",padding:" 0.5% 1%" }} />
            </div>
            <div className="inpt1" style={inpt}>
                <label htmlFor="Title">Description</label><br />
                <input htmlFor='Title' value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder='Add Description' type="text" name="" id="" style={{ width: "50%",padding:" 0.5% 1%"  }} />
            </div>
            <br />
            <div className="btn btn-success" style={task} onClick={submit}>Add Task</div>
            <div className="btn btn-danger" style={task} onClick={dltAll}>Delete All</div>
        </div>
    )
}