import shopProductsData from '../data/shopProductsData'

const data = JSON.parse(localStorage.getItem('cartBento'));

export const initialStore = {
  navOpen: false,
  shopData: shopProductsData,
  dataToShow: [],
  itemPage: { id: null },
  cart: data
}
