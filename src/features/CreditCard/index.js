import React, { useState, useRef } from "react";
import CardType from './CardType';
import CardNumber from './CardNumber';
import CardExpireDate from './CardExpireDate';
import CardCVC from './CardCVC';
import ErrorMessage from './ErrorMessage';
import { Wrapper, Border, Row } from './CreditCard.styles';
import { createFocusCallback } from './tools';
import { CardsList } from './CardsList';
import { useDispatch } from "react-redux";
import { nanoid } from '@reduxjs/toolkit';
import { cardAdded } from './cardsSlice';

const CreditCard = (props) => {
  const [number, setNumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [cvc, setCVC] = useState('');
  const [errors, setErrors] = useState({});
  const expireDateRef = useRef();
  const cvcRef = useRef();

  const focusDateField = createFocusCallback(expireDateRef);
  const focusCVCField = createFocusCallback(cvcRef);
  
  const dispatch = useDispatch();

  const onSaveCardClicked = () => {
    if (number && expireDate && cvc) {
      dispatch(
        cardAdded({
          id: nanoid(),
          number,
          expireDate,
          cvc
        })
        );
      setNumber('');
      setExpireDate('-');
      setCVC('');
      
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
            ref={cvcRef}
          />
        </Row>
      </Border>
      <button type="button" onClick={ onSaveCardClicked }>
          Add Card
        </button>
      <ErrorMessage errors={ errors } />
      <CardsList/>
    </Wrapper>
  );
};

// Specifies types for props:
CreditCard.propTypes = {

};


export default CreditCard;
