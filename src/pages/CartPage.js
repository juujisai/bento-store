import React from 'react';
import { connect } from 'react-redux'
import CartItem from '../components/CartItem'

const CartPage = ({ cart }) => {

  // const items = cart.map((item, i) => (
  //   <CartItem data={item} key={i} />
  // ))
  cart.forEach(a => console.log(a))
  const items = cart.map(a => a.order.map((b, i) => (
    <CartItem data={a} key={i} number={i} />
  )))


  return (
    <div className='cartpage'>
      <h1>Koszyk</h1>
      <table className="cart-table">
        <tbody>
          <tr className="headers">
            <th>Obraz</th>
            <th>Nazwa</th>
            <th>Ilość</th>
            <th>Cena</th>
          </tr>
          {items}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = ({ cart }) => {
  return { cart }
}

export default connect(mapStateToProps)(CartPage);