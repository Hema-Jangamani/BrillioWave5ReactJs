import React,{useState} from 'react'

export default function ToDoForm(props:any) {

    const [todoitem, setToDoItem] = useState<string>('');

    function AddItem(){
        let todo={
            text:todoitem,
            isCompleted:false
        }
        fetch('http://localhost:3001/todos',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(todo)
        });
        props.todoitem(todo);
    }
    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="input-group mb-3">
                    <input type="text" onChange={(e)=>setToDoItem(e.target.value)} className="form-control" placeholder="Enter Your Text"/>
                    <button className="btn btn-secondary" onClick={AddItem} type="button"><i className="fas fa-plus-circle"></i></button>
                </div>
            </div>
        </div>
    )
}
