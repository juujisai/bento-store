import React from 'react';
import { Link } from 'react-router-dom'
import noPicture from '../images/no_picture.png'

const ItemDemoComponent = ({ data: { id, name, img, price } }) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div className='shop-item-demo'>
      <div className="img-demo-cont">
        {typeof name !== undefined ? <img src={img} alt={name} /> : <img src={noPicture} alt={name} />}
      </div>
      <div className="name-demo">
        <span className="name">{name}</span>
      </div>
      <div className="price-demo">
        <span className="price">{price} zł</span>
      </div>
      <div className="link-to" onClick={handleClick}>
        <Link to={`shop/items/${id}`} ></Link>
      </div>
    </div>
  );
}

export default ItemDemoComponent;