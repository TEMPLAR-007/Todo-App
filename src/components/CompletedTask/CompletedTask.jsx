import React, { useEffect, useState } from 'react';

const CompletedTask = () => {
    const [completes, setCompletes] = useState([]);

    useEffect(() => {
        const role = "done";
        const url = `http://localhost:5000/donetask?role=${role}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCompletes(data)
            )
    }, []);


    return (
        <div>
            <h1>{completes.length}</h1>


            <div className="overflow-x-auto mt-10">
                <table className="table w-1/2 mx-auto">
                    <tbody>
                        {
                            completes.map((complete, index) => <tr key={complete._id} >
                                <td>{index + 1}</td>
                                <td>

                                    <input type="text" placeholder="Type here" className="input input-bordered w-4/4 lg:w-full text-xl ml-2" value={complete.taskItem} readOnly />
                                </td>
                                <td>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompletedTask;