import React, { useEffect, useState } from 'react';
import { FaEdit, FaCheck } from 'react-icons/fa';

const TodoList = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => setTasks(data));
    }, []);

    const handleDelete = id => {
        const proceed = confirm('Are you sure want to delete?');
        if (proceed) {

        }

    };

    return (
        <div>
            <div class="overflow-x-auto mt-10">
                <table class="table table-zebra w-1/2 mx-auto">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((task, index) => <tr key={task._id} >
                                <td>{index + 1}</td>
                                <td>{task.taskItem}</td>
                                <td className='flex items-center justify-center gap-2 '>

                                    <button class="btn btn-square btn-sm">
                                        <FaCheck />
                                    </button>

                                    <button class="btn btn-square btn-sm">
                                        <FaEdit />
                                    </button>

                                    <button onClick={() => handleDelete(task._id)} class="btn btn-square btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TodoList;