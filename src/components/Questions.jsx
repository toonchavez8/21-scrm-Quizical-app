import React from 'react'
import "../css/Questions.css"
import NotFound from '../assets/NotFoundAnim.json'
import Lottie from "lottie-react";
export default function Questions(props) {

  const [currentPage, setCurrentPage] = React.useState(1);
  const [questionsPerPage] = React.useState(5);
    // Get current questions
    const indexOfLastQuestion = currentPage * questionsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
    const currentQuestions = props.questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

    
  function displayQuestions() {
 

    // if there are no questions available display a message and a button return to the settings page
    if (!props.questions || props.questions.length === 0) {
      return (
        <div className="No-questions-available">
     

        <h1 className='
        No-questions-available-h1 | ff-karla fw-800 text-capitalize fs-32px
        '>No questions available</h1>

<Lottie animationData={NotFound}  loop={false} className="Lottie "/>
        <p className='
        No-questions-available-p | ff-inter fw-500 text-capitalize fs-16px
        '>
          sorry but there are no questions available for the settings you have selected. please go back to the settings page and change your settings
        </p>
      </div>
      )
    }

        // with props.questions.map map through the questions and display them on the page
        return currentQuestions.map((question, index) => {
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


function altButtons(){
  if (!props.questions || props.questions.length === 0) {
    return (
      <button onClick={props.start} className="
      Start--button | ff-inter fw-500 text-capitalize fs-16px
      ">Close</button>
    )
  }

  return (
    <button className='Start--button | ff-inter fw-500 text-capitalize fs-16px '
    >Submit</button>
  )
}


const handleNextPage = () => {
  setCurrentPage(currentPage + 1);
};

const handlePrevPage = () => {
  setCurrentPage(currentPage - 1);
};

// if currentPage is 1 disable the previous button

React.useEffect(() => {
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  if (currentPage === 1) {
    prevButton.classList.add('disabled');
  } else {
    prevButton.classList.remove('disabled');
  }

  if (currentPage === props.questions.length / questionsPerPage) {
    nextButton.classList.add('disabled');
  } else {
    nextButton.classList.remove('disabled');
  }
}, [currentPage]);

// react use effect to update the hidden progress bar and pagination if there are no questions available
React.useEffect(() => {
  const progressBar = document.getElementById('progress-bar');
  const pagination = document.getElementById('pagination');

  if (!props.questions || props.questions.length === 0) {
    progressBar.classList.add('hidden');
    pagination.classList.add('hidden');
  } else {
    progressBar.classList.remove('hidden');
    pagination.classList.remove('hidden');
  }
}, [props.questions]);

const progressPercentage = Math.round((currentPage / (props.questions.length / questionsPerPage)) * 100);

console.log("progressPercentage", progressPercentage)
  return (
    <div>

     

      {displayQuestions()}

      <div className="progress-bar" id='progress-bar'>
        <div className="progress-bar__fill" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      <div className="pagination" id="pagination">
         <button 
          id='prev'
          className='pagintation__button | fw-600 fs-16px ff-inter'
          onClick={handlePrevPage}
          >
            Previous
          </button>
          <button 
          id='next'
          className='pagintation__button | fw-600 fs-16px ff-inter'
          onClick={handleNextPage}>
          Next
          </button>
        </div>
      <section className='Questions--results'>
{/* 
        <h3 className='Questions--results-h3'>
          you scored 1 / 5 correct awnsers
        </h3> */}
    { altButtons()}
      </section>
    </div>
  )
}
