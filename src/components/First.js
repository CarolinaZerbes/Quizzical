export default function First(props){
    return(
        <div className="first-page">
            <h1>Quizzical</h1>
            <p className="first-page-subtitle"> Welcome to the QUizzical Quizz App! </p>
            <button onClick={props.changePage}>Start Quizz</button>
        </div>
    )
}