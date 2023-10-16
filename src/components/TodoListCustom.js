import React, { useState } from 'react';

const TodoListCustom = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value, task.id);
    };
    return (
        <form onSubmit={handleSubmit} className="TodoList">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="input-box" />
            <button type="submit" className='addButton'>Update</button>
        </form>
    );
};

export default TodoListCustom;