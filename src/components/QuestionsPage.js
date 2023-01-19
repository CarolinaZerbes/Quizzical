import { type } from "@testing-library/user-event/dist/type"
import React from "react"
import Question from "./Question"

export default function QuestionsPage(props){
    const [questions, setQuestions] = React.useState([])
    const [questionsDB, setQuestionsDB] = React.useState([])
    const [isClicked, setisClicked] = React.useState(false)
    const [restart, setRestart] = React.useState(false)

    let correct = 0

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => res.json())
            .then(data => setQuestionsDB(data.results)) 
    }, [props.firstPage, restart])


    React.useEffect(() => {
        
        if(questionsDB.length != 0){
            setQuestions([])

            let questionUseEffect = []

            let q = questionsDB.map((question) =>{
                
                let answers = question.incorrect_answers
                
                answers = answers.filter(function(item, pos) {
                    return answers.indexOf(item) == pos;
                })
                answers = answers.filter(function( element ) {
                    return element !== undefined;
                });

                (!answers.includes(question.correct_answer) && answers.splice(Math.floor(Math.random() * 3), 0, question.correct_answer))

                const finalAnswers = answers.map(answer => {  
                    return(
                        answer.replace(/&lt;/g, "<")
                            .replace(/&Gt;/g, ">")
                            .replace(/&#039;/g, "'")
                            .replace(/&amp;/g, "")
                            .replace(/&ouml;/g, "o")
                            .replace(/&quot;/g, "")
                            .replace(/&ldquo;/g, `"`)
                            .replace(/&eacute;/g, `e`)  
                    )
                } )
                let finalQuestion = question.question
                finalQuestion.replace(/&lt;/g, "<")
                    .replace(/&Gt;/g, ">")
                    .replace(/&#039;/g, "")
                    .replace(/&amp;/g, "")
                    .replace(/&ouml;/g, "o")
                    .replace(/&quot;/g, "")
                    .replace(/&ldquo;/g, `"`)
                    .replace(/&eacute;/g, `e`)

                let answersArray = []
                for (let i=0; i<answers.length; i++){
                    if(answers[i] === question.correct_answer)
                        answersArray.push([finalAnswers[i], 1])
                    else
                        answersArray.push([finalAnswers[i], 0])
                }

                let element = {
                    answers : answersArray,
                    question : finalQuestion,
                    seeAnswer : ""
                }

                if(questionUseEffect.length === 0)
                    questionUseEffect = [element]
                else{
                    questionUseEffect.push(element)
                }
            })

            setQuestions(questionUseEffect)
        }
    }, [questionsDB])


    function handleChange(event, index){
        const {value} = event.target
        let questionsAux = questions

        for(let i=0; i<questionsAux[index].answers.length; i++){
            if(questionsAux[index].answers[i][0] === value){  
                if (questionsAux[index].answers[i][1] === 0){
                    questionsAux[index].answers[i][1] = 2
                }
                else if (questionsAux[index].answers[i][1] === 1){
                    questionsAux[index].answers[i][1] = 3
                    correct ++
                    console.log(correct)
                }  
            }
            else{
                if (questionsAux[index].answers[i][1] === 2){
                    questionsAux[index].answers[i][1] = 0
                }
                else if (questionsAux[index].answers[i][1] === 3){
                    questionsAux[index].answers[i][1] = 1
                    correct --
                    console.log(correct)
                }
            }
        }
        setQuestions(questionsAux)
    }

    let questionElements = questions.map((question, index) =>{
        return(
            <Question 
                key={index}
                index = {index}
                element={question}
                handleChange={handleChange}
            />
        )
    })

    function viewAnswers(){
        let element
        setisClicked(true)
        element = questions.map((question) =>{
            return(
                {...question,
                seeAnswer:"YES"
            })
        })
        setQuestions(element)
        
        document.getElementById("scoreSum").innerHTML = "You scored "+correct +"/5 correct answers"
    }

    function newQuestions(){
        setisClicked(false)
        correct = 0 
        setQuestionsDB([])
        setRestart(!restart)
        document.getElementById("scoreSum").innerHTML = ""
    }

    return(
        <div >
            <div className="questions-page">
                {questionElements}
            </div>
            
            <div className="score">
                <p id="scoreSum"></p>
                {!isClicked && <button onClick={viewAnswers}> Check Answers</button>}
                {isClicked && <button onClick={newQuestions}> Play Again </button>}
            </div>
        </div>
    )
}