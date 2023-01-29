import React from 'react'
import "../css/App.css"
import Questions from './Questions'
import Blobs from './Blobs'
import Setup from './Setup'

export default function App() {

// first i want to create state for the game

const[start, setStart] = React.useState(false)
const [questions, setQuestions] = React.useState([])
const [awnsers, setAwnsers] = React.useState([])
const [score, setScore] = React.useState(0)

const [numQuestions, setNumQuestions] = React.useState(10);
const [category, setCategory] = React.useState(9);
const [difficulty, setDifficulty] = React.useState('easy');
const [type, setType] = React.useState('multiple');
// then i want to fetch the data from the api and store it in the state

const handleFormUpdate = (numQuestions, category, difficulty, type) => {
  setNumQuestions(numQuestions);
  setCategory(category);
  setDifficulty(difficulty);
  setType(type);
  setStart(true);
}

React.useEffect(() => {
  const baseUrl = 'https://opentdb.com/api.php?';
  const url = `${baseUrl}amount=${numQuestions}&category=${category}&difficulty=${difficulty}&type=${type}`;
  //fetch data from this url
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setQuestions(data.results);
    }
    );
}, [numQuestions, category, difficulty, type]);


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
    
      /> : <Setup onFormUpdate={handleFormUpdate} start={
        startGame
      } />
        }
        <Blobs />
    </main>
  )
}
