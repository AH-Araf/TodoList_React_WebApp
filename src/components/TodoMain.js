import React, { useState } from 'react'

const TodoMain = ({ task, deleteTodo, editTodo }) => {



    return (
        <div>
            <div className="Todo-Main">
                <p>{task.task}</p>
                <div>
                    <button className='btn-u' onClick={() => editTodo(task.id)}>Update</button>
                    <button className='btn-d' onClick={() => deleteTodo(task.id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default TodoMain;

