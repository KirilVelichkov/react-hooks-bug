import React from 'react';

export default class Todo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            checked: props.checked
        }
    }

    handleChange = (evt) => {
        const { checked } = evt.target;
        this.setState({ checked });
        this.props.updateTodo(checked, this.props.id);
    }

    handleClick = () => {
        this.setState((state) =>
            ({
                checked: !state.checked
            })
        )
        this.props.updateTodo(!this.state.checked, this.props.id);
    }

    handleDelete = () => {
        this.props.deleteTodo(this.props.id);
    }

    render() {
        const { description } = this.props;
        const { checked } = this.state;

        return (
            <div className="todo-item">
                <input type="checkbox" checked={checked} onChange={this.handleChange} />
                <div className="todo-description" onClick={this.handleClick}>{description}</div>
                <span className="btn-delete-todo" onClick={this.handleDelete}>✖</span>
            </div>
        );
    }
}
