import React, { useState } from 'react';

const TodoList = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        // prevent default action
        e.preventDefault();
        if (value) {
            // add todo
            addTodo(value);
            // clear form after submission
            setValue('');
        }
    };
    return (
        <form onSubmit={handleSubmit} className="TodoList">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="input-box" placeholder='Add your task here...' />
            <button type="submit" className='addButton'>Add Task</button>
        </form>
    );
};

export default TodoList;