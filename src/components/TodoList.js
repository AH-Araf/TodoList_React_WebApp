import React, { useState } from 'react';

const TodoList = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            addTodo(value);
            setValue('');
        }
    };
    return (
        <form onSubmit={handleSubmit} className="TodoList">
            <div className='input-boxAndbtn'>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="input-box" placeholder='Add your task here...' />
                <button type="submit" className='addButton'>Add Task</button>
            </div>
        </form>
    );
};

export default TodoList;