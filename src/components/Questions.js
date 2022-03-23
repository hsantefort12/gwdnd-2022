import React, { useEffect, useState } from 'react';
import ListView from './TableView'

function Questions() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        fetch('https://dnd-character-sheet-tracker.herokuapp.com/questions')
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setQuestions(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>loading...</div>
    } else {
        return (
            <ul>
                <ListView viewItem={questions} />
            </ul>
        )
    }
}

export default Questions;