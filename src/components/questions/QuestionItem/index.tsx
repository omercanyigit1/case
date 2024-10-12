import { forwardRef, useCallback, useState } from "react";
import { Button, RadioGroup } from "@mantine/core";

//components
import AnswerItem, { AnswerProps } from "@/components/answers/AnswerItem";

//styles
import classes from './../questions.module.scss';

export interface QuestionProps {
    id: number;
    text: string;
    subText: string;
    questionNumber: number;
    answers: AnswerProps[];
}

const QuestionItem = forwardRef<HTMLDivElement, { question: QuestionProps, isActive: boolean }>(({ question, isActive }, ref) => {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    const handleAnswerChange = useCallback((value: string) => {
        setSelectedAnswer(value);
    }, []);

    const correctAnswer = question.answers.find(answer => answer.isAnswer) ?? null;

    return (
        <div ref={ref} className={`${classes.questionItem} ${isActive ? classes.activeQuestion : classes.inActiveQuestion}`}>
            <div className={classes.questionTextWrapper}>
                <p className={classes.questionText}>{question.text}</p>
                <p className={classes.questionSubText}>{question.subText}</p>
            </div>
            <RadioGroup className={classes.answerWrapper} value={selectedAnswer}>
                {question.answers.map((answer) => (
                    <AnswerItem 
                        key={answer.id} 
                        answer={answer} 
                        onChange={handleAnswerChange} 
                        selectedAnswer={selectedAnswer}
                        correctAnswer={correctAnswer}
                    />
                ))}
            </RadioGroup>
        </div>
    );
});

export default QuestionItem;