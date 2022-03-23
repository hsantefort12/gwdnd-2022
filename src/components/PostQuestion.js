import React, { useState } from 'react';

function PostQuestion() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        fetch("https://dnd-character-sheet-tracker.herokuapp.com/question", {
            method: 'POST',
            body: JSON.stringify({ name: name, description: description }),
            headers: { 'Content-Type': 'application/json' }
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Question Name: 
                <input type="text" name="question_name" value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
                Description:
                <input type="text" name="description" value={description} onChange={e => setDescription(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default PostQuestion;