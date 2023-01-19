import React from 'react';
import Question from "./Question"

export default function Main(props){
    const [questions, setQuestions] = React.useState([])
   
    // React.useEffect( () => function fetchQuestions(){
    //     console.log("HI")
    //     fetch("https://opentdb.com/api.php?amount=5&type=multiple")
    //         .then(res => res.json())
    //         .then(data => setQuestions(data))
    // }, [])

    //fetchQuestions()
    // console.log("-- hi")
    // React.useEffect( () => function fetchQuestions(){
    //     fetch("https://opentdb.com/api.php?amount=5&type=multiple").then(res => res.json())
    //         .then(data => console.log(data))
    //     // console.log(question)
        
    // },[])


    // React.useEffect(() => {
    //     fetch("https://api.imgflip.com/get_memes")
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])
    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => res.json())
            .then(data => setQuestions(data))
    }, [])

    const questionElements = questions.results.map((question, index) =>{
        console.log(question)
        return(
            <Question 
                key = {index}
                {...question}
            />
        )
    })
    console.log("questions")
    console.log(questions)
    return(
        <div>
            {questionElements}
        </div>
    )
}