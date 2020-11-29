import React, { useState } from 'react'
import { useToasts } from 'react-toast-notifications'
export function SubmitForm(props) {
    const [content, setContent] = useState('');
    const { addToast } = useToasts()
    function handleSubmit(e) {
        e.preventDefault();
        addToast('Saved have a new tasks to do ' + content, { appearance: 'success' })
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