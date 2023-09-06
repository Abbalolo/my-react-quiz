import  { useState } from "react";
import man from "./assets/man.svg";
import resultimage from "./assets/resultimage.svg"

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0)
  const [wrong, setWrong] = useState(false)
  const [next, setNext] = useState(false)

  const questions = [
    {
      question: "What's the capital of Nigeria?",
      options: [
        { answerText: "Jakara", isCorrect: false },
        { answerText: "Lagos", isCorrect: false },
        { answerText: "Tokiyo", isCorrect: false },
        { answerText: "Abuja", isCorrect: true },
      ],
      id: 1,
    },
    {
      question: "Nigeria's currency is?",
      options: [
        { answerText: "USD", isCorrect: false },
        { answerText: "NGN", isCorrect: true },
        { answerText: "EUR", isCorrect: false },
        { answerText: "USDT", isCorrect: false },
      ],
      id: 2,
    },
    {
      question: "What's Nigeria's calling code?",

      options: [
        { answerText: "+229", isCorrect: false },
        { answerText: "+192", isCorrect: false },
        { answerText: "+234", isCorrect: true },
        { answerText: "+255", isCorrect: false },
      ],
      id: 3,
    },
    {
      question: "Who is the president of Nigeria?",
      options: [
        { answerText: "Bola Ahmadu Tinubu", isCorrect: false },
        { answerText: "Bola Tinubu Ahmed", isCorrect: false },
        { answerText: "Bola Ahmed", isCorrect: false },
        { answerText: "Bola Ahmed Tinubu", isCorrect: true },
      ],
      id: 4,
    },
  ];

 

  const handleQuestion = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1)      
    } else {
      setWrong(true)
    
    }
  
    setNext(true);
    
   
  };
 
  const handleNextQuestion = () => {
     const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowResult(true);
    }
    setNext(false);
  }
  return (
    <div className="quiz-container">
      <div className="img-con">
        <img src={man} alt="man" />
      </div>

      <div className="content-con">
        {showResult ? (
          <div className="result-con">
            <img src={resultimage} alt="winner" />
            <h2>Results</h2>
            <p>
              You got <span>{score}</span> correct answers
            </p>
            <button className="try-btn">Try again</button>
          </div>
        ) : (
          <>
            <p>{questions[currentQuestionIndex].question}</p>
            {questions[currentQuestionIndex].options.map((item, index) => (
              <div key={item.id}>
                {item.isCorrect}
                <div
                  onClick={() => handleQuestion(item.isCorrect)}
                  className={`answer-con ${
                    next && item.isCorrect
                      ? "correct"
                      : next && wrong
                      ? !item.isCorrect
                        ? "error"
                        : ""
                      : ""
                  }`}
                >
                  <span>{String.fromCharCode(65 + index)}</span>
                  <p>{item.answerText}</p>
                </div>
              </div>
            ))}
            {next && (
              <button onClick={handleNextQuestion} className="next">
                Next
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
