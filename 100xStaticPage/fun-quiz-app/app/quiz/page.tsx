"use client"
import QuizCard from '@/components/QuizCard'
import { useEffect, useState } from 'react'
import quizData from '@/data/questions.json'
import { useUser } from '@/context/UserContext'

const page = () => {
    const { name, score, setScore } = useUser();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const handleAnswerSelect = (isCorrect: boolean) => {
        if (isCorrect) setScore(score + 1);
        setTimeout(() => {
            if (currentQuestion < quizData.length - 1) {
                setCurrentQuestion(currentQuestion + 1)
            }
            else {
                setIsFinished(true)
            }
        }, 1000)
    };

    //send score to the backend after finished
    useEffect(() => {
        if (isFinished) {
            sendScore();
        }
    }, [isFinished]);

    const sendScore = async () => {
        try {
            const response = await fetch("/api/leaderboard", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: name, score })
            });
            if (!response.ok) {
                throw new Error("Failed to save score");
            }
        } catch (error) {
            console.error("Error in saving score: ", error);
        }
    }

    return (
        <div className='px-3 flex flex-col justify-center items-center min-h-screen'>
            <div className='px-3 mb-16'>
                <QuizCard
                    question={quizData[currentQuestion].question}
                    options={quizData[currentQuestion].options}
                    onAnswerSelect={handleAnswerSelect}
                />
            </div>
        </div>
    )
}

export default page
