export default function First(props){
    console.log("first")
    return(
        <div className="first-page">
            <h1>Quizzical</h1>
            <p> &quot;Tom Clancy&#039;s Rainbow Six Siege&quot; Quizz App</p>
            <button onClick={props.changePage}>Start Quizz</button>
        </div>
    )
}