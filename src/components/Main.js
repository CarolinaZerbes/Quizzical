import React from 'react';
import Question from "./Question"

export default function Main(props){
    const [questions, setQuestions] = React.useState([])

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple&encode=base64")
            .then(res => res.json())
            .then(data => setQuestions(data))
    }, [])

    const questionElements = questions.results.map((question, index) =>{
        return(
            <Question 
                key = {index}
                {...question}
            />
        )
    })
    return(
        <div>
            {questionElements}
        </div>
    )
}