import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Libraries
import { ActionIcon, Group } from "@mantine/core";
import { IconAlertCircle, IconBrush, IconZoomIn, IconZoomOut } from "@tabler/icons-react";

//components
import QuestionItem, { QuestionProps } from "../QuestionItem";

//store
import { getQuestions } from "@/store/slice/questionSlice";
import { AppDispatch, RootState } from "@/store/store";

//styles
import classes from './../questions.module.scss';

interface QuestionListProps {
    questions: QuestionProps[] | null, 
    isLoading: boolean, 
    isError: boolean
}

const QuestionList = () => {
    const dispatch: AppDispatch = useDispatch();
    const {questions, isLoading, isError} = useSelector((state: RootState) => state.question) as QuestionListProps;
    const [activeQuestionNumber, setActiveQuestionNumber] = useState<number | null>(1);

    useEffect(() => {
        dispatch(getQuestions());
    }, [dispatch]);

    const memoizedQuestions = useMemo(() => questions, [questions]);

    const handleQuestionClick = (questionNumber: number) => {
        setActiveQuestionNumber(questionNumber);
    };

    return (
        <div className={classes.questionWrapper}>
            <div className={classes.questionActions}>
                <span className={classes.questionNumber}>Soru: Türkçe #{activeQuestionNumber}</span>
                <div className={classes.questionActionsBtns}>
                    <ActionIcon className={classes.questionActionBtn}><IconBrush /></ActionIcon>
                    <ActionIcon className={classes.questionActionBtn}><IconZoomIn /></ActionIcon>
                    <ActionIcon className={classes.questionActionBtn}><IconZoomOut /></ActionIcon>
                    <ActionIcon className={`${classes.questionActionBtn} ${classes.questionActionBtnAlert}`}><IconAlertCircle /></ActionIcon>
                </div>
            </div>
            {memoizedQuestions && memoizedQuestions.map((question: QuestionProps) => (
                <QuestionItem 
                    key={question.id} 
                    question={question}           
                    isActive={question.questionNumber === activeQuestionNumber} 
                />
            ))}
        </div>
    );
};

export default QuestionList;