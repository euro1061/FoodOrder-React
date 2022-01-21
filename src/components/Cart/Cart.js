import React, { useContext, useState } from "react";
import CartContent from "../../store/cart-context";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContent);
  const onHideCartHandler = () => {
    props.onCardHide();
  };

  const totalAmount = `฿${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cardItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cardItemAddHandler = (item) => {
    cartCtx.addItemSingle(item);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const summitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://react-http-cfe16-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearItemHandler();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cardItemAddHandler.bind(null, item)}
          onRemove={cardItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  const modalAction = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={onHideCartHandler}>
        ปิด
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          สั่ง
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>รวมทั้งสิ้น</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onCancel={props.onCardHide} onConfirm={summitOrderHandler} />
      )}
      {!isCheckout && modalAction}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>

  const didSubmitModalContent = <React.Fragment>
    <p>Successfully send the order!</p>
    <div className={classes.actions}>
      <button className={classes.button} onClick={onHideCartHandler}>
        ปิด
      </button>
    </div>
  </React.Fragment>

  return <Modal onClose={props.onCardHide}>
    {!isSubmitting && !didSubmit && cartModalContent}
    {isSubmitting && isSubmittingModalContent}
    {!isSubmitting && didSubmit && didSubmitModalContent}
  </Modal>;
};

export default Cart;
