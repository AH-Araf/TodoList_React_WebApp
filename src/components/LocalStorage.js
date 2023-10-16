import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';
import TodoMain from './TodoMain';
import TodoListCustom from './TodoListCustom';
uuidv4();

const LocalStorage = () => {
    const [todos, setTodos] = useState([])
    const [searchTerm, setSerachTerm] = useState('')


    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    }, []);

    const addTodo = todo => {
        const newTodos = [...todos, { id: uuidv4(), task: todo, isEditing: false }];
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const deleteTodo = id => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }

    const editTask = (task, id) => {
        const newTodos = todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    return (
        <div className='TodoWrap'>
            <h1 className='todo-header'>Todo List</h1>
           
            <div className='s-box-div'>
                <input
                    className='search-box'
                    type="text"
                    placeholder='Search todo items'
                    onChange={event => {
                        setSerachTerm(event.target.value)
                    }}
                />
            </div>
            <TodoList addTodo={addTodo} />
            {
                todos.filter((val) => {
                    if (searchTerm == "") {
                        return val
                    } else if (val.task.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                }).map((todo, index) => (
                    todo.isEditing ? (
                        <TodoListCustom editTodo={editTask} task={todo} />
                    ) : (
                        <TodoMain task={todo} key={index} deleteTodo={deleteTodo} editTodo={editTodo} />
                    )

                ))
            }

        </div>
    );
};

export default LocalStorage;