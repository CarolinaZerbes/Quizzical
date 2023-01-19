import React from 'react';
import First from "./components/First"
import Main from "./components/QuestionsPage"

export default function App(){
    const [firstPage, setFirstPage] = React.useState(true)
    
    function changePage(){
        setFirstPage(prevPage => !prevPage)
    }

    return(
        <div>
            {firstPage && <First changePage={changePage}/>}
            {!firstPage && <Main changePage={changePage} firstPage={firstPage}/>}
            <img src='../blue.png' className="blueBlob"/>
        </div>
    )
}