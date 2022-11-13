import React,{useState,useEffect} from 'react'
import ToDoItem from './ToDoItem';

export default function ToDoList(props:any) {

    function DeleteItemFunction(id:any){
        props.DelItem(id);
        }
    function MarkCompletedFunction(id:any){
        props.MarkItem(id);
    }
    return (
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <ul className="list-group">
                   {
                       props.tododata.map((item:any)=><ToDoItem MarkCompletedhandler={MarkCompletedFunction} DeleteItemHandler={DeleteItemFunction} id={item.id} isCompleted={item.isCompleted} text={item.text}/>)
                   }
                    
                </ul>
            </div>
        </div>
    )
}
