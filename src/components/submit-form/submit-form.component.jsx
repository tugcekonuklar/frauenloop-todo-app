import React, { useState } from 'react'

export function SubmitForm(props) {

    const [task, setTask] = useState({ title: "", content: "" });

    function handleInputChange(e) {

        const {name,value} = e.target;
        setTask(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onCreate(task);
        setTask({ title: "", content: "" });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="title"
                    type="text"
                    className="input"
                    placeholder="Title"
                    value={task.title}
                    onChange={handleInputChange}
                />
                <input
                    name="content"
                    type="text"
                    className="input"
                    placeholder="Content"
                    value={task.content}
                    onChange={handleInputChange}
                />
                <button className="button">Add</button>
            </form>
        </div>
    )

}
