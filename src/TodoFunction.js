import React, { useState} from 'react';


export default function Todo(props) {
    const [checked, setChecked] = useState(props.checked);

    const handleChange = (evt) => {
        setChecked(evt.target.checked);
        props.updateTodo(evt.target.checked, props.id);
    }

    const handleClick = () => {
        setChecked(!checked);
        props.updateTodo(!checked, props.id);
    }

    const handleDelete = () => {
        props.deleteTodo(props.id);
    }

    return (
        <div className="todo-item">
            <input type="checkbox" checked={checked} onChange={handleChange} />
            <div className="todo-description" onClick={handleClick}>{props.description}</div>
            <span className="btn-delete-todo" onClick={handleDelete}>✖</span>
        </div>
    );
}
