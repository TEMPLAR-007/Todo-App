import React from 'react';
import TodoList from '../TodoList/TodoList';

const Home = () => {

    const handleAddTask = e => {
        e.preventDefault();

        const taskItem = e.target.task.value;

        const task = { taskItem };

        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                e.target.reset();
            });
    }
    return (
        <div className='text-center'>

            <form onSubmit={handleAddTask} className='flex flex-col shadow-xl w-52 lg:w-2/6 p-2 rounded-lg m-auto mt-5 border'>

                <input type="text" name='task' placeholder="Type task..." class="input input-bordered w-auto text-lg font-semibold" />

                <input class="btn btn-block mt-2" type="submit" value="Add item" />

            </form>


            {/* all task shown */}

            <div >
                <TodoList></TodoList>
            </div>

        </div>
    );
};

export default Home;