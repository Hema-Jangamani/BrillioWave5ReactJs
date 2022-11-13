import React from 'react'

export default function ToDoItem(this:any,props:any) {
    function DeleteItem(id:any)
    {
        props.DeleteItemHandler(id);
    }
    function markCompleted(id:any){
        props.MarkCompletedhandler(id);
    }
    return (
        <div>
            <li className="list-group-item"> 
            <input className="form-check-input" checked={props.isCompleted} onClick={markCompleted.bind(this,props.id)} type="checkbox" />
            <span style={{textDecoration:props.isCompleted?'line-through':'none'}} className="px-2">{props.text}</span><i onClick={DeleteItem.bind(this,props.id)} className="fas fa-times float-end text-danger"></i></li> 
        </div>
    )
}
