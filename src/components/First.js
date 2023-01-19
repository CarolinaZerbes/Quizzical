export default function First(props){

    return(
        <div className="first-page">
            <h1>Quizzical</h1>
            <p>Quizz App</p>
            <button onClick={props.changePage}>Start Quizz</button>
        </div>
    )
}