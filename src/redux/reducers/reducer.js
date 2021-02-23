import { SWITCH_NAV_VISIBILITY, FILTER_DATA_TO_SHOW, GET_ITEM_FROM_ID, ADD_ITEM_TO_CART, CHANGE_ITEM_COUNT } from '../actions/actions'


function reducer(state, action) {
  // switch nav
  if (action.type === SWITCH_NAV_VISIBILITY) {
    return { ...state, navOpen: !state.navOpen }
  }

  // show new items
  if (action.type === FILTER_DATA_TO_SHOW) {
    if (action.payload.filter === 'news') {
      const dataToShow = state.shopData.filter(item => item.isNew)
      return { ...state, dataToShow }
    }

  }

  // getting item from id
  if (action.type === GET_ITEM_FROM_ID) {
    return { ...state, itemPage: state.shopData.filter(i => i.id === action.payload.id)[0] }
  }


  // adding to cart
  if (action.type === ADD_ITEM_TO_CART) {

    action.payload.item.orderSize = action.payload.size

    let newCart = [...state.cart]

    const cartItem = newCart.find(item => item.orderSize === action.payload.size && item.id === action.payload.item.id)
    if (cartItem) {
      const item = newCart.map(k => k.id === action.payload.item.id && k.orderSize === action.payload.size ? { ...k, amount: k.amount + 1 } : k)
      newCart = [...item]
      console.log('jest', newCart)
    } else {
      newCart.push({ ...action.payload.item, amount: 1 })
      console.log('nie jest', newCart)
    }



    // dodaj local storage
    localStorage.setItem('cartBento', JSON.stringify(newCart))


    return { ...state, cart: newCart }
  }

  // modify cart items

  if (action.type === CHANGE_ITEM_COUNT) {
    let newCart = [...state.cart]

    let itemId = newCart.findIndex(i => i.id === action.payload.id && i.orderSize === action.payload.size)
    let item = newCart[itemId]


    if (action.payload.operator === 'remove') {
      newCart.splice(itemId, 1)
      console.log('removing')
    }

    if (action.payload.operator === 'increase' || action.payload.operator === 'decrease') {

      action.payload.operator === 'increase' ? console.log('increasing') : console.log('decreasing')

      action.payload.operator === 'increase' ?
        item.amount++
        :
        item.amount--

      newCart.splice(itemId, 1, item)

    }



    localStorage.setItem('cartBento', JSON.stringify(newCart))

    return { ...state, cart: [...newCart] }
  }


  return state
}

export default reducer