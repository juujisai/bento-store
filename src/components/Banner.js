import React from 'react';
import { Link } from 'react-router-dom'

const Banner = ({ data: { image, path, title, titleBg, titleColor } }) => {
  return (
    <div className='single-banner'>
      <div className="banner-img-cont">
        <img src={image} alt={title} />
      </div>
      <div className={`banner-title ${titleBg}`}>
        <Link to={path} className={titleColor}>{title}</Link>
      </div>
    </div>
  );
}

export default Banner;