import React, {useState,usetContext,useEffect} from 'react';
import TodoItem from './TodoItem';
import TodoService from '../Services/TodoService';
import {AuthContext} from '../Context/AuthContext';

const Todos = props =>{
    const [todo,setTodo] = useState({name:''});
    const [todos,setTodos] = useState([]);
    const [message,setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    useEffect(()=>{
        TodoService.getTodos().then(data =>{
            setTodos(data.todos);
        });
    },[]);

    return(
        <div>
            <ul className="list-group">
                {
                    todos.map(todo =>{
                        return <TodoItem key={todo_id} todo={todo}/>
                    })
                }
            </ul>
            <br/>
            <form onSubmit={onSubmit}>
                <label htmlFor="todo">Enter Todo</label>
                <input type="text" name="todo" value={todo.name} onChange={onChange} className="form-control" placeholder="Please enter todo"></input>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
            </form>
            {message ? <Message message={message}/> : null}
        </div>
    )
    
}

export default Todos;