import React, {useEffect, useState} from 'react'
import TodoHeader from './TodoHeader'
import TodoMain from './TodoMain'
import TodoInput from './TodoInput'

import './scss/TodoTemplate.scss';

const TodoTemplate = () => {


    // 서버에 할일 목록(json)을 요청해서 받아와야 함
    const API_BASE_URL = 'http://localhost:8181/api/todos';

    const [todos, setTodos] = useState([]);

    // id 값 시퀀스
    const makeNewId = () => {
        if (todos.length === 0) return 1; // 할일 목록이 아예 없는경우
        return todos[todos.length - 1].id + 1; //있다면 이렇게 처리해줘라
    };

    // TodoInput에게 todoText를 받아오는 함수
    const addTodo = todoText => {
        // console.log('할일 정보 in TodoTemplate: ', todoText);

        const newTodo = {
            // id: makeNewId(),
            title: todoText,
            // done: false
        };

        // todos.push(newTodo);

        //리액트의 상태변수는 무조건 setter를 통해서만 상태값을 변경해야 렌더링에 적용된다.
        //다만 상태변수가 불변성을 가지기 때문에 기존의 상태에서 변경이 불가능하고 새로운 상태를 만들어서 적용해야한다.
        // 아래 두개 중  하나 쓰면 됨
        // setTodos(todos.concat([newTodo]));
        fetch(API_BASE_URL, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(newTodo)
        })
            .then(res => res.json())
            .then(json => {
                setTodos(json.todos);
            });
    };

    // 할 일 삭제 처리 함수  : id를 받아와서
    const removeTodo = id => {
        // console.log(`삭제대상 id: ${id}`);

        // 아이디 같은 것은 없어지고 아이디가 다른것만 남게 된다.  map 과 필터 둘다 필터링 된 새로운 것을 줌
        // const copyArr = todos.filter(todo => todo.id !== id);
        // setTodos(copyArr); // 변수로 넣어 버리면 됨
        // setTodos(todos.filter(todo => todo.id !== id));

        fetch(`${API_BASE_URL}/${id}`, {
            method:'DELETE'
        })
            .then(res => res.json())
            .then(json =>
            setTodos(json.todos))
    };


    // 할 일 체크 처리 함수
    const checkTodo = (id, done) => {

        fetch(API_BASE_URL, {
            method :'PUT',
            headers : {'content-type' : 'application/json'},
            body: JSON.stringify({
                done: !done,
                id: id
            })
        })
            .then(res =>  res.json())
            .then(json => setTodos(json.todos));
        // console.log(`체크한 Todo id: ${id}`);

        // const copyTodos = [...todos];
        // for (const cTodo of copyTodos) {
        //   if (cTodo.id === id) {
        //     cTodo.done = !cTodo.done;
        //   }
        // }
        // setTodos(copyTodos);

        // setTodos(todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo));

    };

    // 체크가 안된 할 일의 개수 카운트하기
    const countRestTodo = () => todos.filter(todo => !todo.done).length;
    // // 체크가 안 된 할 일의 개수 카운트 하기
    // const countRestTodo =  () => { // todo의 done이 false 인 것만 필터링함
    //     const filteredTodos = todos.filter(todo => !todo.done);
    //     return filteredTodos.length;
    // };


    useEffect(() => {

        fetch(API_BASE_URL)
            .then(res => res.json())
            .then(json => {
                console.log(json.todos);

                setTodos(json.todos);
            });
    }, []);

    // 자동실행되는 영역이다. 이때 목록을 바로 불러울 것
    // : 시작하자 마자 서버통신을 보내서 할일 목록을 불러온다.

    return (
        <div className='TodoTemplate'>
            <TodoHeader count={countRestTodo}/>
            <TodoMain
                todoList={todos}
                remove={removeTodo}
                check={checkTodo}
            />
            <TodoInput addTodo={addTodo}/>
        </div>
    )
}

export default TodoTemplate