import { useEffect, useState } from "react";

const customHooks = () => {

    const [tasks, setTasks] = useState([]);

    const [refetch, setRefetch] = useState(false);


    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => setTasks(data));
    }, []);

    console.log(refetch);

    useEffect(() => {
        if (refetch) {
            fetch('http://localhost:5000/task')
                .then(res => res.json())
                .then(data => {
                    setTasks(data);
                    console.log(data, "from custom hook");
                });

            setRefetch(false);
        }
    }, [refetch]);

    return {
        tasks, setTasks, setRefetch
    }
}

export default customHooks

