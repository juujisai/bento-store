import shopProductsData from '../data/shopProductsData'

let data;

JSON.parse(localStorage.getItem('cartBento')) === null ? data = [] : data = JSON.parse(localStorage.getItem('cartBento'));


export const initialStore = {
  navOpen: false,
  shopData: shopProductsData,
  dataToShow: [],
  itemPage: { id: null },
  cart: data
}
