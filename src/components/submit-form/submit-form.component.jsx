import React, { useState } from 'react'

export function SubmitForm(props) {
    const [content, setContent] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        props.onCreate(content);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input"
                    placeholder="Enter item"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button className="button">Add</button>
            </form>
        </div>
    )

}