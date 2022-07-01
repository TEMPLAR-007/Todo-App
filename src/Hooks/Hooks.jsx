import { useEffect, useState } from "react";

const customHooks = () => {

    const [tasks, setTasks] = useState([]);

    const [refetch, setRefetch] = useState(false);


    useEffect(() => {
        fetch('https://conservative-goose-03183.herokuapp.com/task')
            .then(res => res.json())
            .then(data => setTasks(data));
    }, []);

    console.log(refetch);

    useEffect(() => {
        if (refetch) {
            fetch('https://conservative-goose-03183.herokuapp.com/task')
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

