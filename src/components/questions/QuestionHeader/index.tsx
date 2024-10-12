import React from 'react';
import { IconArrowLeft } from '@tabler/icons-react';


//styles
import classes from './../questions.module.scss';

const QuestionHeader: React.FC = () => {
    return (
        <div className={classes.headerItem}>
            <IconArrowLeft />
            <h1>Konu Tarama Testi #1</h1>
        </div>
    );
};

export default QuestionHeader;