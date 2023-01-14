import React from 'react'
import "../css/App.css"
import Start from './Start'
import Questions from './Questions'
import Blobs from './Blobs'

export default function App() {

// first i want to create state for the game

const[start, setStart] = React.useState(false)
const [questions, setQuestions] = React.useState([])
const [awnsers, setAwnsers] = React.useState([])
const [score, setScore] = React.useState(0)


// then i want to fetch the data from the api and store it in the state

React.useEffect(() => {
    const url ="https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
    fetch(url)
    .then(res => res.json())
    .then(data => {
        setQuestions(data.results)
    }
    
    )
},[])

console.log(questions)
// then i want to create a function that will start the game

function startGame(){
    setStart(true)
}

  return (
    <main className='debug | bg-clr-cream'>
      { start ? <Questions 
        key={questions.question}
        questions={questions}
    
      /> : <Start 
        startGame={startGame}
      />
        }
        <Blobs />
    </main>
  )
}
