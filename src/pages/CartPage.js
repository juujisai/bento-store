import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import { clearCart } from '../redux/actions/actions'

const CartPage = ({ cart, clear }) => {

  const items = cart.map((item, i) => (
    <CartItem data={item} key={i} />
  ))

  let sum = 0;
  cart.forEach(item => sum += item.amount * item.price)
  sum = sum.toFixed(2)


  if (cart.length === 0) {
    return (
      <div className='empty-cart'>
        <h2>Twój koszyk jest pusty. Zapraszamy do zakupów!</h2>
        <Link to='/new'>Idź do nowości</Link>
      </div>
    )
  }

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
      <p className='sum-price'>Razem: <strong>{sum} zł</strong></p>
      <div className="item-buy">
        <button onClick={() => clear()}><Link to='/checkout'>Kup przedmioty</Link></button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ cart }) => {
  return { cart }
}

const mapDispatchToProps = (dispatch) => {
  return { clear: () => dispatch(clearCart()) }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartPage);