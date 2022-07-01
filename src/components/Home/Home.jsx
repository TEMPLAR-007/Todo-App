import customHooks from '../../Hooks/Hooks';
import TodoList from '../TodoList/TodoList';

const Home = () => {

    const { tasks, setTasks, setRefetch } = customHooks();

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
                setRefetch(true);
                e.target.reset();
            });
    }
    return (
        <div className='text-center'>

            <form onSubmit={handleAddTask} className='flex flex-col shadow-xl w-52 lg:w-2/6 p-2 rounded-lg m-auto mt-5 border'>

                <input type="text" name='task' placeholder="Type task..." className="input input-bordered w-auto text-lg font-semibold" />

                <input className="btn btn-block mt-2" type="submit" value="Add item" />

            </form>


            {/* all task shown */}

            <div >
                <TodoList
                    tasks={tasks}
                    setTasks={setTasks}
                ></TodoList>
            </div>

        </div>
    );
};

export default Home;