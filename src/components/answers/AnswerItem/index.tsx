import { useEffect, useState } from "react";

//Libraries
import { Radio } from "@mantine/core";

//components
import BtnAnswer from "@/components/Buttons/BtnAnswer";
import BtnSolutions from "@/components/Buttons/BtnSolutions";

//Icons
import IconSkip from "@/components/Icons/IconSkip";

//styles
import classes from './../answers.module.scss';

export interface AnswerProps {
    id: string;
    text: string;
    created_at: string;
    questionId: string;
    isAnswer: boolean | null;
    choice: string;
    selectedAnswer: string | null;
}

const AnswerLabel = ({ answer }: { answer: AnswerProps }) => {
    return (
        <div className={classes.answerLabel}>
            <div dangerouslySetInnerHTML={{ __html: `${answer.choice}) ${answer.text}` }} />
        </div>
    );
}

const AnswerItem = ({ answer, onChange, selectedAnswer, correctAnswer }: { answer: AnswerProps, onChange: (value: string) => void, selectedAnswer: string | null, correctAnswer: any | null }) => {
    const [showCorrect, setShowCorrect] = useState<boolean>(false);

    const isCorrect = selectedAnswer === answer.choice && answer.isAnswer === true;
    const isIncorrect = selectedAnswer === answer.choice && answer.isAnswer === false;

    const handleAnswer = (answer: AnswerProps) => {
        onChange(answer.choice);
        if (correctAnswer && correctAnswer.choice !== answer.choice) {
            setShowCorrect(true);
        } else {
            setShowCorrect(false);
        }
    };

    useEffect(() => {
        if (selectedAnswer && correctAnswer && correctAnswer.choice === answer.choice) {
            setShowCorrect(true);
        } else {
            setShowCorrect(false);
        }
    }, [selectedAnswer, correctAnswer, answer.choice]);
    
    return (
        <>
            <div className={`${classes.answerItem} ${isCorrect ? classes.correctAnswerItem : isIncorrect ? classes.inCorrectAnswerItem : ''} ${showCorrect && correctAnswer && correctAnswer.choice === answer.choice ? classes.correctAnswerItem : ''}`}>
                <Radio 
                    value={answer.choice} 
                    label={<AnswerLabel answer={answer} />} 
                    onChange={() => onChange(answer.choice)} 
                    classNames={{ radio: classes.radioItem, icon: classes.radioIcon, inner: classes.radioInner }}
                />
                <BtnAnswer 
                    text="Cevapla" 
                    onClick={() => handleAnswer(answer)} className={classes.btnAnswer}
                />
                {showCorrect && 
                <BtnSolutions
                    text={<div className={classes.flexDirection}> <IconSkip /> <span>Çözüm Videosu</span></div>}
                    onClick={() => console.log('Çözüm Videosu')}
                />}
            </div>
        </>
    );
};

export default AnswerItem;