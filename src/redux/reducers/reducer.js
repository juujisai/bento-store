import { SWITCH_NAV_VISIBILITY, FILTER_DATA_TO_SHOW, GET_ITEM_FROM_ID, ADD_ITEM_TO_CART } from '../actions/actions'


function reducer(state, action) {
  if (action.type === SWITCH_NAV_VISIBILITY) {
    return { ...state, navOpen: !state.navOpen }
  }

  if (action.type === FILTER_DATA_TO_SHOW) {
    if (action.payload.filter === 'news') {
      const dataToShow = state.shopData.filter(item => item.isNew)
      return { ...state, dataToShow }
    }

  }
  if (action.type === GET_ITEM_FROM_ID) {
    return { ...state, itemPage: state.shopData.filter(i => i.id === action.payload.id)[0] }
  }

  if (action.type === ADD_ITEM_TO_CART) {
    let newItem = action.payload.item

    // funkcja dodaje item do koszyka i dodaje mu klucz order, w którym przechowywane są ilości zamówionych przedmiotów o tym samym id oraz ich rozmiary


    let newCart = [...state.cart]

    // funkcja która sprawdza czy jest już takie id w koszyku i czy jest już dodany taki rozmiar do zamówienia (filter)
    if (state.cart.filter(i => i.id === newItem.id && i.order.filter(k => k.size === action.payload.size).length).length !== 0) {
      // console.log('jest')

      const id = newCart.findIndex(i => i.id === newItem.id)
      const id2 = state.cart[id].order.findIndex(i => i.size === action.payload.size)

      console.log(id, id2)
      newCart[id].order[id2].amount++




    } else {
      // console.log(' nie jest')
      newItem.order.push({
        amount: 1,
        size: action.payload.size
      })
      newCart = [...state.cart, newItem]
    }


    newCart = [...new Set(newCart)]


    // console.log('new', newCart)


    // dodaj local storage

    return { ...state, cart: newCart }
  }

  return state
}

export default reducer