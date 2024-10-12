import React, { forwardRef } from 'react';

//Libraries
import { Button } from '@mantine/core';

//styles
import classes from './buttons.module.scss';

interface BtnAnswerProps {
    text: string;
    className?: string;
    onClick: () => void;
}

const BtnAnswer = forwardRef<HTMLButtonElement, BtnAnswerProps>(({ text, onClick, className }, ref) => {
    return (
        <Button className={`${classes.btnSecondary} ${className}`} ref={ref} onClick={onClick}>
            {text}
        </Button>
    );
});

export default BtnAnswer;