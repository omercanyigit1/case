
//Libraries
import { ScrollArea } from '@mantine/core';

//styles
import classes from './../right-side.module.scss';


//assets
import lessonIcon from './../../../../assets/lesson-icon.png';


export interface AnswerProps {
    id: number;
    created_at: string;
    questionId: string;
    choice: string;
    choices: string[];
}

const AnswerList = () => {
    const answers: AnswerProps[] = [];
    const choices = ['A', 'B', 'C', 'D', 'E'];

    for (let i = 0; i < 50; i++) {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        answers.push({
            id: i + 1,
            created_at: `2023-01-0${i + 1}`,
            questionId: `q-${i + 1}`,
            choice: randomChoice,
            choices
        });
    }
    return (
        <div className={classes.answerListWrapper}>
            <div className={classes.answerListHeader}>
                <img src={lessonIcon} />
                <p>
                    <span>Türkçe</span>
                    <span>15 Soru</span>
                </p>
            </div>
            <div className={classes.answerListForm}>
                <ScrollArea h={700}>
                    {answers.map((answer, index) => (
                        <div key={answer.id} className={classes.answerListItem}>
                            <span className={classes.answerListAnswerSort}>Soru. {index + 1}</span>
                            <div className={classes.choiceWrapper}>
                                {answer.choices.map((choice) => (
                                    <span className={answer.choice === choice ? classes.selectedAnswer : classes.unSelectedAnswer}>{choice}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </ScrollArea>
            </div>
        </div>
    );
};

export default AnswerList;