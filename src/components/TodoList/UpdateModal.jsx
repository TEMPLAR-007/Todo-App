import React from 'react';

const UpdateModal = ({ updateTask }) => {

    const handleUpdatedTask = e => {
        e.preventDefault();

        const taskItem = e.target.task.value;

        const updatedTask = { taskItem };

        fetch(`https://conservative-goose-03183.herokuapp.com/task/${updateTask._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                e.target.reset();
            });
    };

    return (
        <div>
            <input type="checkbox" id="update-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="update-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form onSubmit={handleUpdatedTask} className='flex flex-col w-full rounded-lg m-auto mt-5'>

                        <input type="text" name='task' placeholder="Type task..." className="input input-bordered w-auto text-lg font-semibold" />

                        <input className="btn btn-block mt-2" type="submit" value="Save" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default UpdateModal;