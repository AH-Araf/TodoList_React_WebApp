import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const TodoMain = ({ task, deleteTodo, editTodo }) => {
    return (
        <div>
            <div className="Todo-Main">
                <p>{task.task}</p>
                <div className='all-feature'>
                    <CopyToClipboard text={task.task}>
                        <button className='btn-c'>Copy</button>
                    </CopyToClipboard>
                    
                    <button className='btn-u' onClick={() => editTodo(task.id)}>Update</button>
                    <button className='btn-d' onClick={() => deleteTodo(task.id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default TodoMain;

