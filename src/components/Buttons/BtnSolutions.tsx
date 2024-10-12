import React, { forwardRef } from 'react';

//Libraries
import { Button } from '@mantine/core';

//styles
import classes from './buttons.module.scss';

interface BtnSolutionsProps {
    text: string | React.ReactNode;
    className?: string;
    onClick: () => void;
}

const BtnSolutions = forwardRef<HTMLButtonElement, BtnSolutionsProps>(({ text, onClick, className }, ref) => {
    return (
        <Button className={`${classes.btnSolutions} ${className}`} ref={ref} onClick={onClick}>
            {text}
        </Button>
    );
});

export default BtnSolutions;