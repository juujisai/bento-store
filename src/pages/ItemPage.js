import React from 'react';
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getItem, addToCart } from '../redux/actions/actions'
import noPicture from '../images/no_picture.png'
import Alert from '../components/Alert'


const ItemPage = ({ itemPage, getItemForPage, addItemToCart }) => {

  const [item, setItem] = React.useState(itemPage)
  const [showAlert, setShowAlert] = React.useState(false)
  const [selectedSize, setSelectedSize] = React.useState('S')
  const idOfItem = useParams().id

  const handleClick = () => {
    // item.selectedSize = ''
    if (typeof item.order === 'undefined') item.order = []
    // console.log(itemPage)
    addItemToCart(itemPage, selectedSize)
    setShowAlert(true)
    setTimeout(() => { setShowAlert(false) }, 2000)
  }

  React.useEffect(() => {
    getItemForPage(parseInt(idOfItem))
    setItem(itemPage)
  }, [getItemForPage, idOfItem, item, itemPage])



  const { img, name, group, type, color, size, price, desc } = item



  const fullSize = ['S', 'M', 'L', 'XL']
  const setFullSizeOptions = fullSize.map((k, i) => (
    <option key={i} value={k}>{k}</option>
  ))

  return (
    <div className='item-page'>
      <div className="item-category">
        / {group}/ {type}
      </div>
      <div className="img-demo-cont item-image">
        <img src={typeof img !== 'undefined' ? img : noPicture} alt={name} />
      </div>
      <div className="name-demo name item-name">
        {name}
      </div>
      <div className="name-demo price-demo price item-price">
        {price} zł
      </div>
      <div className="name-demo item-color">
        Kolor: {color}
      </div>
      <div className="item-size">
        <form className='name-demo'>
          <label>Rozmiar</label>
          <select name="size" id="size" value={selectedSize} onChange={(e) => { setSelectedSize(e.target.value) }}>
            {size === 'all' ? setFullSizeOptions : <option value='onesize'>onesize</option>}
          </select>
        </form>
      </div>

      <div className="item-buy">
        <button onClick={handleClick}>Dodaj do koszyka</button>
      </div>

      <p className="desc">
        {desc}
      </p>

      <div>
        {showAlert && <Alert
          info='Przedmiot dodany do koszyka'
          type='success'
        >
        </Alert>}
      </div>

    </div>
  );
}

const mapStateToProps = ({ itemPage }) => {
  return { itemPage }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getItemForPage: (id) => dispatch(getItem(id)),
    addItemToCart: (item, size) => dispatch(addToCart(item, size))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);