import React from 'react';
import { FiShoppingCart } from 'react-icons/fi'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const CartIcon = ({ cart }) => {

  let numberToDisplay = 0;

  const getSum = (cart, startValue) => {
    let total = startValue;
    console.log(cart)
    cart.length === 0 ? total = 0 : cart.forEach(i => i.order.forEach(j => total += j.amount))
    return total
  }

  numberToDisplay = getSum(cart, 0)

  return (
    <div className='cart-icon' >
      <FiShoppingCart />
      <span className='cart-length'>{numberToDisplay}</span>
      <Link to='/cart' />
    </div>
  );
}

const mapStateToProps = ({ cart }) => {
  return { cart }
}

export default connect(mapStateToProps)(CartIcon);