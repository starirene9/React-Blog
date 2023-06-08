import React from 'react';
import TodoItem from "./TodoItem";
import './scss/TodoMain.scss';

//{todoList로 디스트럭쳐링}
const TodoMain= ({ todoList, remove, check }) => {

    // console.log(props.todoList);

    // const renderTodoItem = () => {
    //
    //     const todoItems = [];
    //     for (const todo of todoList) {
    //         todoItems.push(<TodoItem />);
    //     }
    //     return todoItems;
    // };
    return (
        <ul className='todo-list'>
            {
                todoList.map(todo => <TodoItem
                                        key={todo.id}
                                        item = {todo}
                                        remove= {remove}
                                        check={check}
                                        />)
            }
        </ul>
    )
}

export default TodoMain