import React from 'react';
import classes from './Header.module.css'
/* import mealsImage from '../../assets/meals.jpg' */
import foodImage from '../../assets/foodbg.jfif'
import HeaderCardButton from './HeaderCardButton';

const Header = props => {
    const onShowCardHandler = () => {
        props.onCartShow()
    }
  return <React.Fragment>
      <header className={classes.header}>
          <h1>ร้านจารย์แดง</h1>
          <HeaderCardButton onClick={onShowCardHandler}/>
      </header>
      <div className={classes['main-image']}>
          <img src={foodImage} alt="A Food Bro!"/>
      </div>
  </React.Fragment>;
};

export default Header;
