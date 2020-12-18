import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from '@reduxjs/toolkit';

import { createFocusCallback } from './tools';

import CardType from './CardType';
import CardNumber from './CardNumber';
import CardExpireDate from './CardExpireDate';
import CardCVC from './CardCVC';
import ErrorMessage from './ErrorMessage';
import { Wrapper, Border, Row } from './CreditCard.styles';
import { CardsList } from './CardsList';
import { cardAdded } from './cardsSlice';
import CardSaveButton from './CardSaveButton';

const CreditCard = () => {
  const [number, setNumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [cvc, setCVC] = useState('');
  const [errors, setErrors] = useState({});
  const expireDateRef = useRef();
  const cvcRef = useRef();
  const saveRef = useRef();

  const focusDateField = createFocusCallback(expireDateRef);
  const focusCVCField = createFocusCallback(cvcRef);
  const focusSaveButton = createFocusCallback(saveRef);
  
  const dispatch = useDispatch();

  const onSaveCardClicked = () => {
    if (number.length === 16 && expireDate && cvc) {
      dispatch(
        cardAdded({
          id: nanoid(),
          number,
          expireDate,
          cvc
        })
      );
      setErrors({ ...errors, save: null });
      setNumber('');
      setExpireDate('-');
      setCVC('');
      
    } else {
      setErrors({ ...errors, save: 'Please enter valid card details' });
    }

  }

  return (
    <Wrapper>
      <Border>
        <Row>
          <CardType number={number}/>
          <CardNumber 
            value={number}
            setValue={setNumber}
            focusNextField={focusDateField}
            setError={error => setErrors({...errors, number : error})}
          />
          <CardExpireDate
            value={expireDate}
            setValue={setExpireDate}
            setError={error => setErrors({...errors, expireDate : error})}
            ref={expireDateRef}
            focusNextField={focusCVCField}
          />
          <CardCVC
            value={cvc}
            setValue={setCVC}
            setError={error => setErrors({...errors, cvc : error})}
            ref={ cvcRef }
            focusNextField={focusSaveButton}
          />
        </Row>
      </Border>
      <CardSaveButton
        text="Save Card"
        ref={saveRef}
        saveCard={ onSaveCardClicked }
      />
      <ErrorMessage errors={ errors } />
      <CardsList/>
    </Wrapper>
  );
};

export default CreditCard;
