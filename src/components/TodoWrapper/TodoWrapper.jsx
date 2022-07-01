import React from 'react';
import customHooks from '../../Hooks/Hooks';
import TodoList from '../TodoList/TodoList';

const TodoWrapper = () => {
    const { tasks, setTasks } = customHooks();

    return (
        <TodoList
            tasks={tasks}
            setTasks={setTasks}
        ></TodoList>
    );
};

export default TodoWrapper;