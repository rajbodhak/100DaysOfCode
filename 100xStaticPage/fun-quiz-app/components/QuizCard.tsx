import { useEffect, useState } from 'react'
import Image from 'next/image';

type Option = {
    image: string;
    correct: boolean;
}

type QuizCardProps = {
    question: string;
    options: Option[];
    onAnswerSelect: (isCorrected: boolean) => void;
}
const QuizCard = ({ question, options, onAnswerSelect }: QuizCardProps) => {
    const [selected, setSelected] = useState<number | null>(null);

    useEffect(() => {
        setSelected(null);
    }, [question])

    const handleSelect = (index: number, isCorrect: boolean) => {
        if (selected !== null) return;
        setSelected(index);
        onAnswerSelect(isCorrect)
    }

    return (
        <div className='w-full border border-white/40 rounded-xl font-spaceGrotesk'>
            <h1 className='text-xl font-bold text-center pt-2'>{question}</h1>
            <div className='flex items-center justify-evenly p-3 gap-4'>
                {
                    options.map((option, index) => (
                        <div
                            key={index}
                            className={`bg-white/30 backdrop-blur-md p-2 rounded-xl hover:bg-white/45 cursor-pointer transition-all ${selected !== null
                                ? selected === index
                                    ? option.correct
                                        ? "hover:bg-green-600 bg-green-500"
                                        : "hover:bg-red-600 bg-red-500"
                                    : "bg-white/30"
                                : "bg-white/30"
                                }`}
                            onClick={() => handleSelect(index, option.correct)}
                        >
                            <Image
                                src={option.image}
                                alt={`Option ${index + 1}`}
                                className='rounded-md cursor-pointer'
                                height={150}
                                width={150}
                            />
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default QuizCard
