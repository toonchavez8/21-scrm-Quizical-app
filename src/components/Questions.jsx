import React from 'react'
import "../css/Questions.css"

export default function Questions(props) {

  console.log(props.questions)



  function displayQuestions() {
    // with props.questions.map map through the questions and display them on the page
    return props.questions.map((question, index) => {
      // here we are going to shuffle the awnsers by creating an array with the correct awnser and the incorrect awnsers and then sorting them randomly
      const shuffledAnswers = [question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5);

      // this is what we return from the map function
      return (
        <section className='Questions--section |   clr-darkBlue'>

        {/* here we display the question with setinnter html to properly display the question */}
         <h2 className='Questions' dangerouslySetInnerHTML={{ __html: question.question }} />
          <div className='Questions--awnsers--container'>
            <div className='Questions--awnsers--container'>
              {/* we map our shuffeld awnsers */}
            {shuffledAnswers.map((answer, index) => (
              // we return a button for each awnser with the awnser as the inner html to properly display the awnser
                <button key={index} className='Questions--buttons ' 
                dangerouslySetInnerHTML={{ __html: answer }}
                />
            ))}
        </div>
          </div>
        </section>
      )
    })
  }


  // i want to map through the awnsers and display them on the page

  // i want to create a function that will check if the awnser is correct

  // i want to create a function that will check if the awnser is incorrect

  return (
    <div>
      {displayQuestions()}

      <section className='Questions--results'>
{/* 
        <h3 className='Questions--results-h3'>
          you scored 1 / 5 correct awnsers
        </h3> */}

        <button className='Start--button | ff-inter fw-500 text-capitalize fs-16px '
        >Submit</button>

      </section>
    </div>
  )
}
