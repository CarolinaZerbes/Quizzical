export default function question(props){
    function handleChange(event){
        if(!props.element.seeAnswer)
            props.handleChange(event, props.index)
    }

    let name
    let ans = []
    if (props.element.seeAnswer){
        for(let i=0; i<4; i++){
            if(props.element.answers[i][1] === 0)
                ans.push("ans")
            else if(props.element.answers[i][1] === 1 || props.element.answers[i][1] === 3)
                ans.push("correct--ans")
            else
                ans.push("wrong--ans")
        }
    }
    else
        ans = ["ans"+props.index+"1", "ans"+props.index+"2", "ans"+props.index+"3", "ans"+props.index+"4"]

    var ele = document.getElementsByName("answer");
    for(var i=0;i<ele.length;i++)
       ele[i].checked = false;

    function htmlEntities(str) {
        return String(str).replace(/&quot;/g, '"')
        .replace(/&lt;/g, "<")
        .replace(/&Gt;/g, ">")
        .replace(/&#039;/g, "'")
        .replace(/&amp;/g, "")
        .replace(/&ouml;/g, "o")
        .replace(/&rdquo;/g, '"')
        .replace(/&ldquo;/g, `"`)
        .replace(/&eacute;/g, `e`) ;
    }

    var question = htmlEntities(props.element.question)
    return(
        <div>
            <h3>{question}</h3>
            <form className="boxed">
                <ul>
                    <li className={name}>
                        <input
                            disabled={props.element.seeAnswer ? true: false}
                            type="radio"
                            id={ans[0]}
                            name="answer"
                            value={props.element.answers[0][0]}
                            onChange={handleChange} 
                            // checked={props.element.answer[props.index] === props.element.answers[1]}    
                        />
                        <label htmlFor={ans[0]}>{props.element.answers[0][0]}</label>
                    </li>
                    <li className={name}>
                        <input
                            disabled={props.element.seeAnswer ? true: false}
                            type="radio"
                            id={ans[1]}
                            name="answer"
                            value={props.element.answers[1][0]}
                            onChange={handleChange}
                            // checked={props.element.answer[props.index] === props.element.answers[1]}    
                        />
                        <label htmlFor={ans[1]}>{props.element.answers[1][0]}</label>
                    </li>
                    <li className={name}>
                        <input
                            disabled={props.element.seeAnswer ? true: false}
                            type="radio"
                            id={ans[2]}
                            name="answer"
                            value={props.element.answers[2][0]}
                            onChange={handleChange}
                            // checked={props.element.answer[props.index] === props.element.answers[2]}   
                        />
                        <label htmlFor={ans[2]}>{props.element.answers[2][0]}</label>
                    </li>
                    <li className={name}>
                        <input
                            disabled={props.element.seeAnswer ? true: false}
                            type="radio"
                            id={ans[3]}
                            name="answer"
                            value={props.element.answers[3][0]}
                            onChange={handleChange}
                            // checked={props.element.answer[props.index] === props.element.answers[3]}   
                        />
                        <label htmlFor={ans[3]}>{props.element.answers[3][0]}</label>              
                    </li>
                </ul>
            </form>
            <hr/>
        </div>
    )
}