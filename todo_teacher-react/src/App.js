import './App.css';
import { useState, useRef, useReducer } from 'react';
import TodoLists from './Components/TodoLists';
import CreateTodo from './Components/CreateTodo';

const initailState = {
  text: "",
  todos: [
      // {
      //   id: 1,
      //   todotext: "리액트 공부하기",
      //   isDone : false,
      // },
      // {
      //   id: 2,
      //   todotext: "타입스크립트 공부하기",
      //   isDone : false,
      // },
      // {
      //   id: 3,
      //   todotext: "리덕스 공부하기",
      //   isDone : false,
      // }
    ],
}

function reducre(state, action){
  switch(action.type){
    case "CHANGE_INPUT":
      return {
        ...state,
        text: action.text,
      }
    case "CREATE_TODO":
      return {
        text: initailState.text,
        //todos : state.todos.concat(action.todo)
        todos : [
          ...state.todos,
          action.todo,
        ] 
        };
    case "DELETE_TODO":
      return {
        ...state,
        todos : state.todos.filter(todo=> action.id !== todo.id) //해당하는 아이디가 아닌 조각들(==조건 that's why we use filter)만 다시 새배열로 반환 --> 해당하는 아이디 지워짐
      };
    case "ACTIVE_TODO":
      return {
        ...state,
        todos : state.todos.map(todo=>
          todo.id === action.id ? {...todo, isDone: !todo.isDone} : todo)
      };
    default:
      return state;
  }
}



function App() {
  // const [ list, setList ] = useState("");
  // //input의 값을 입력할 때 (input의 value가 변경될 때)
  // //state인 list값을 input의 value값으로 업데이트

  // // const onChange = (newList)=>{ //인자로 받은 list로 list(위에거)를 업데이트 해주겠다.
  // //   setList(newList); //setList 자체가 위에 구조분해할당으로 나눈 list의 값을 수정할 수 있는 함수이기 때문에 setList(인자로 받은 걸 넣어줌) <<을 해줌으로 해당 값으로 list(위에 거)가 변경되도록 하는 것이다. 
  // //   console.log(list);
  // // }
  // //input자체를 인자로 넣었기 때문에 실제 실행될 컴포넌트에서는 input의 value를 찍어서 이 값이 변경될 거라는 것을 알려줘야 함.
  // //onChange={(e)=> onChange(e.target.value)} --> 인풋자체를 인자로 넣어줄 때 실행되는 컴포넌트에서 넣어줘야 할 구문

  // //얘는 아예 onChange라는 함수에 e를 찍어서 e.target의 value값을 받아왔기 때문에 실제 실행되는 컴포넌트에서는 onChange만 불러주면 된다.
  // const onChange = (e)=>{ //아예 이벤트를 여기서 찍어줌으로써 실제 실행되는 컴포넌트에서는 onChange만 불러줌
  //   const { value } = e.target;
  //  setList( value );
  // }
  // //CreateTodo 컴포넌트에서 +버튼을 클릭하면 todos배열에 할일객체가 추가됨
  // const onCreate = ()=>{
  //   //새로운 객체를 만들고
  //   const listobj = {
  //     id: nextId.current,
  //     list: list, //key : value고 key에 list는 string
  //     isDone : false,
  //   }
  //   //해당 객체를 todos배열에 새로 넣어준다.
  //   setTodos([...todos, listobj]);
  //   setList(""); //input값 비워주기
  //   nextId.current += 1;
  // }
  // const [ todos, setTodos ] = useState([
  //   {
  //     id: 1,
  //     list: "해야할 일1",
  //     isDone : false,
  //   },
  //   {
  //     id: 2,
  //     list: "해야할 일2",
  //     isDone : false,
  //   },
  //   {
  //     id: 3,
  //     list: "해야할 일3",
  //     isDone : false,
  //   }
  // ]);
    //항목 삭제
  //삭제 클릭시 id값을 인수로 받아서 todos 배열에서 id값이 다른 객체만 업데이트
  // const onDelete = (id)=>{
  //   setTodos(todos.filter(todo=>id !== todo.id))
  // }

  // const onToggle = (id)=>{
  //   setTodos(todos.map(todo=> id === todo.id ? {...todo, isDone: !todo.isDone} : todo) )
  // }
  const [state, dispatch] = useReducer(reducre, initailState);
  const { text, todos } = state;
  const nextId = useRef(todos.length + 1)
  const onChange = (e)=>{
    console.log(e.target.value)
    dispatch({
      type: "CHANGE_INPUT",
      text : e.target.value,
    })
  }
  const onCreate = ()=>{
    dispatch({
      type: "CREATE_TODO",
      todo : {
        id : nextId.current,
        todotext : text,
        isDone: false,
      },
    })
    nextId.current += 1;
  }
  const onDelete = (id)=>{
    dispatch({
      type: "DELETE_TODO",
      id: id,
    })
  }
  const onToggle = (id)=>{
    dispatch({
      type: "ACTIVE_TODO",
      id: id,
    })
  }


  


  //todos라는 컴포넌트를 주는데 주는 값은 {todos}인 거.
  return (
    <div className="App"> 
      <CreateTodo text={text} onChange={onChange} onCreate={onCreate}></CreateTodo>
      <TodoLists todos={todos} onDelete={onDelete} onToggle={onToggle} ></TodoLists>
    </div>
  );
}

export default App;
