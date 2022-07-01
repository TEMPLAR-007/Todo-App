import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import UpdateModal from './UpdateModal';

const TodoList = ({ tasks, setTasks }) => {

    console.log(tasks);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://conservative-goose-03183.herokuapp.com/task/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        const remaining = tasks.filter(task => task._id !== id);
                        setTasks(remaining);
                    }
                })
        }
    };

    const [updateTask, setUpdateTask] = useState([]);

    const handleCompletedTask = (id) => {
        fetch(`https://conservative-goose-03183.herokuapp.com/task/done/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Task completed successfully');
            });
    }

    return (
        <div>
            <div className="overflow-x-auto mt-10">
                <table className="table w-1/2 mx-auto">
                    <tbody>
                        {
                            tasks.map((task, index) => <tr key={task._id} >
                                <td>{index + 1}</td>
                                <td>

                                    <input onClick={() => handleCompletedTask(task._id)} type="checkbox" className="checkbox" />
                                    <input type="text" placeholder="Type here" className="input w-4/4 lg:w-full text-xl ml-2" value={task.taskItem} readOnly />

                                </td>
                                <td className='flex items-center gap-2 mt-4 ml-5'>

                                    <label onClick={() => setUpdateTask(task)} for="update-modal" className="btn modal-button btn-square btn-sm"><FaEdit /></label>

                                    <button onClick={() => handleDelete(task._id)} className="btn btn-square btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
                {
                    updateTask && <UpdateModal updateTask={updateTask}></UpdateModal>
                }
            </div>
        </div>
    );
};

export default TodoList;