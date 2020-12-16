import React from 'react';
import { SaveButton } from './CardSaveButton.styles';


const CardSaveButton = React.forwardRef(({ saveCard, text }, ref) => { 
    return (
        <SaveButton
            type='button'
            ref={ ref }
            onClick={ saveCard }
        >
            {text }
        </SaveButton>
    )
})
export default CardSaveButton;
