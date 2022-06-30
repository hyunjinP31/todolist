import React from 'react';
import TodoList from './TodoList';

//props를 받으면 props라는 객체 안에 보내준 props들이 모두 담긴다. 그걸 각각 받으려고 ({key})를 해줌으로 객체구조분해할당으로 바로 받는 것.
//props로 받은 값은 모두 객체에 담겨 나온다.(이 때 객체의 이름이 props) -->{ todos : [{id: 1 , list:"", isDone:false}] }
//map 메서드는 형태를 바꿔서 새로운 배열로 return해주기 때문에 map을 씀
const TodoLists = ({ todos, onDelete, onToggle }) => {
    return (
        <div>
            {todos.map(todo => <TodoList todo={todo} key={todo.id} onDelete={onDelete} onToggle={onToggle} />)}
        </div>
    );
};

export default TodoLists;