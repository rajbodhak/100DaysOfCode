"use client"
import QuizCard from '@/components/QuizCard'
import { useEffect, useState } from 'react'
import quizData from '@/data/questions.json'
import { useUser } from '@/context/UserContext'
import { useRouter } from 'next/navigation'

const page = () => {
    const { name, score, setScore } = useUser();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const router = useRouter();

    const handleAnswerSelect = (isCorrect: boolean) => {
        if (isCorrect) setScore(score + 1);
        setTimeout(() => {
            if (currentQuestion < quizData.length - 1) {
                setCurrentQuestion(currentQuestion + 1)
            } else {
                setIsFinished(true);
            }
        }, 1000);
    };

    // Send score to the backend after finishing the quiz
    useEffect(() => {
        if (isFinished) {
            sendScore();
        }
    }, [isFinished]);

    const sendScore = async () => {
        console.log("Sending score", { username: name, score })
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
            {isFinished ? (
                <div className="bg-gradient-to-br from-black/20 via-white/10 to-black/20 backdrop-blur-md p-8 rounded-lg shadow-lg text-center w-[90%] max-w-md border border-white/50">
                    <h1 className="text-3xl font-bold mb-4">Quiz Completed! 🎉</h1>
                    <p className="text-xl mb-6">Your Score: <span className="text-green-400 font-bold">{score}</span></p>

                    <button
                        onClick={() => router.push('/leaderboard')}
                        className="btn-primary !text-white"
                    >
                        View Leaderboard
                    </button>
                </div>
            ) : (
                <div className='px-3 mb-16'>
                    <QuizCard
                        question={quizData[currentQuestion].question}
                        options={quizData[currentQuestion].options}
                        onAnswerSelect={handleAnswerSelect}
                    />
                </div>
            )}
        </div>
    )
}

export default page;
