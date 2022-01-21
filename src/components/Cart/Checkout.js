import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();
  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    setFormInputsValidity({
        name: enteredNameIsValid,
        street: enteredStreetIsValid,
        city: enteredCityIsValid,
        postal: enteredPostalCodeIsValid
    });

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        postal: enteredPostalCode,
        city: enteredCity
    });
  };
  const nameControlClasses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`
  const streetControlClasses = `${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`
  const cityControlClasses = `${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`
  const postalControlClasses = `${classes.control} ${formInputsValidity.postal ? '' : classes.invalid}`
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">ชื่อของคุณ</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>กรุณากรอกชื่อ</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">ถนน</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>กรุณาใส่ชื่อถนน</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">รหัสไปรษณีย์</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputsValidity.postal && <p>กรุณากรอกรหัสไปรษณีย์ให้ถูกต้อง</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">เมือง</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>กรุณากรอกชื่อเมือง</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
