import React from 'react'

export default function Setup( {onFormUpdate}) {
    const [numQuestions, setNumQuestions] = React.useState(10)
    const [categories, setCategories] = React.useState([9])
    const [category, setCategory] = React.useState(9);
    const [difficulty, setDifficulty] = React.useState('easy');
    const [type, setType] = React.useState('multiple');

    React.useEffect(() => {
      async function fetchCategories() {
        const response = await fetch('https://opentdb.com/api_category.php')
        const data = await response.json()
        setCategories(data.trivia_categories)
      }
  
      fetchCategories()
    }, [])

   
    const handleSubmit = (event) => {
        event.preventDefault();
        onFormUpdate(numQuestions, category, difficulty, type);
        // run the start function from props
        setStart(true)
      }

  return (
    <section>
        <div className="">
            <h1>Quizical Setup</h1>
            <p>Quizical is a quiz app that allows you to test your knowledge and share your results!</p>
        </div>

        <form>

            <label>Number of Questions:</label>
             <input type="range" name="numQuestions" min="1" max="50" defaultValue="10" onChange={event => setNumQuestions(event.target.value)}/>
             <label>{numQuestions}</label>
            <br />

            <label>Category:</label>
            <select name="category" onChange={event => setCategory(event.target.value)}>
            {categories.map(category => (
                <option key={category.id} value={category.id}>
                    {category.name}
                </option>
                ))}
            </select>
            <br />

            <label>Difficulty:</label>
            <select name="difficulty" onChange={event => setDifficulty(event.target.value)}>
            <option value="easy" >Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
            </select>
            <br />

            <label>Type:</label>
            <select name="type" onChange={event => setType(event.target.value)}>
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True/False</option>
            </select>
            <br />
            <button type="submit" 
            onClick={handleSubmit 
                
            }
            >Start Quiz</button>
  </form>
    </section>
  )
}
