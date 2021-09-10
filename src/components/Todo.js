import React from "react";

const Todo = ( {text, todo, setTodos, todos} ) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
        // console.log(todo);
    };
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed,
                };
            }
            return item;
        }))
    }
    return( 
        <div className="todow">
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn"><i className={`im im-check-mark-${todo.completed ? "circle" : 'circle-o'}`}></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="im im-x-mark-circle"></i></button>
        </div>
    );
};

export default Todo;