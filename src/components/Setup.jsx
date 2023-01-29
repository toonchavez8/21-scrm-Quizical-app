import React from 'react'
import "../css/Setup.css"

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

      React.useEffect(() => {
        const rangeInputs = document.querySelectorAll('input[type="range"]')
        if(rangeInputs.length > 0){
          function handleInputChange(e) {
            let target = e.target
            if (e.target.type !== 'range') {
              target = document.getElementById('range')
            } 
            const min = target.min
            const max = target.max
            const val = target.value
            target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
          }
          rangeInputs.forEach(input => {
            input.addEventListener('input', handleInputChange)
          })

        }
      }, [])


  return (
    <section className='SetupContainer'>
        <div className="| flex-center flex-column gap-1">
            <h1 className='clr-darkBlue ff-karla fw-700 fs-32px '>Quizical Setup</h1>
            <p className='ff-karla fs-16px max-width-500 text-center p-1'>Quizical is a quiz app that allows you to test your knowledge and share your results!</p>
        </div>

        <form className='SetupForm'>

            <label className='fs-20px text-capitalize ff-karla clr-darkBlue  '>Number of Questions:</label>
             <input className='Slider' type="range" name="numQuestions" min="1" max="50" defaultValue="10" onChange={event => setNumQuestions(event.target.value) 
            }/>
             <label className='fs-20px text-capitalize ff-karla clr-darkBlue text-center '>{numQuestions}</label>
            <br />

            <label className='fs-20px text-capitalize ff-karla clr-darkBlue  '>Category:</label>
            <select name="category" onChange={event => setCategory(event.target.value)}>
            {categories.map(category => (
                <option key={category.id} value={category.id}>
                    {category.name}
                </option>
                ))}
            </select>
            <br />

            <label className='fs-20px text-capitalize ff-karla clr-darkBlue  '>Difficulty:</label>
            <select name="difficulty" onChange={event => setDifficulty(event.target.value)}>
            <option value="easy" >Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
            </select>
            <br />

            <label className='fs-20px text-capitalize ff-karla clr-darkBlue  '>Type:</label>
            <select name="type" onChange={event => setType(event.target.value)}>
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True/False</option>
            </select>
            <br />
            <button 
            className='Start--button | ff-inter fw-500 text-capitalize fs-16px '
            type="submit" 
            onClick={handleSubmit 
                
            }
            >Start Quiz</button>
  </form>
    </section>
  )
}
