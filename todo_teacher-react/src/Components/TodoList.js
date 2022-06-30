import React from 'react';
import './todoStyle.css';

const TodoList = ({ todo, onDelete, onToggle }) => {

    return (
        //이벤트의 함수는 콜백함수이기 때문에 받아올 매개변수가 있는 경우에는 함수안에서 해당 함수를 불러야 한다.
        <div className='abc'>
            <span className= {todo.isDone ? "done" : ""}onClick={()=>{onToggle(todo.id)}}>
                {todo.todotext}
            </span>
            <button onClick={()=> onDelete(todo.id) }>x</button>
        </div>
    );
};

export default TodoList;