import shopProductsData from '../data/shopProductsData'

export const initialStore = {
  navOpen: false,
  shopData: shopProductsData,
  dataToShow: [],
  itemPage: { id: null },
  cart: JSON.parse(localStorage.getItem('cartBento'))
}
