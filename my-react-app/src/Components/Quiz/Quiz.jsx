import React, { useState } from 'react';
import './Quiz.css';
import { data } from '../../assets/data';

const Quiz = () => {
    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [selected, setSelected] = useState(null);
    let [score, setScore] = useState(0);
    let [finished, setFinished] = useState(false);

    const checkAns = (e, ans) => {
        if (question.ans === ans) {
            e.target.classList.add("correct");
            setScore(score + 1);
        } else {
            e.target.classList.add("wrong");
        }
        setSelected(ans); 
    };

    const nextQuestion = () => {
        if (index < data.length - 1) {
            setIndex(index + 1);
            setQuestion(data[index + 1]);
            setSelected(null);
            document.querySelectorAll("li").forEach((li) => {
                li.classList.remove("correct", "wrong");
            });
        } else {
            setFinished(true);
        }
    };

    return (
        <div className='container'>
            <h1>Quiz App</h1>
            <hr />
            {finished ? (
                <h2>Your Score: {score} out of {data.length}</h2>
            ) : (
                <>
                    <h2>{index + 1}. {question.question}</h2>
                    <ul>
                        <li onClick={(e) => !selected && checkAns(e, 1)}>{question.option1}</li>
                        <li onClick={(e) => !selected && checkAns(e, 2)}>{question.option2}</li>
                        <li onClick={(e) => !selected && checkAns(e, 3)}>{question.option3}</li>
                        <li onClick={(e) => !selected && checkAns(e, 4)}>{question.option4}</li>
                    </ul>
                    <button onClick={nextQuestion}>Next</button>
                    <div className="index">{index + 1} of {data.length}</div>
                </>
            )}
        </div>
    );
}

export default Quiz;
