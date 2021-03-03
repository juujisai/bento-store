import { SWITCH_NAV_VISIBILITY, FILTER_DATA_TO_SHOW, GET_ITEM_FROM_ID, ADD_ITEM_TO_CART, CHANGE_ITEM_COUNT, DATA_FILTER, DATA_SORT } from '../actions/actions'


function reducer(state, action) {
  // switch nav ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (action.type === SWITCH_NAV_VISIBILITY) {
    return { ...state, navOpen: !state.navOpen }
  }

  // show new items ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (action.type === FILTER_DATA_TO_SHOW) {
    state.dataToShow = []
    if (action.payload.filter === 'news') {
      const dataToShow = state.shopData.filter(item => item.isNew)
      return { ...state, dataToShow }
    } else if (action.payload.filter === 'women') {
      const dataToShow = state.shopData.filter(item => item.group === 'kobiety')
      return { ...state, dataToShow, dataFiltered: [] }
    } else if (action.payload.filter === 'men') {
      const dataToShow = state.shopData.filter(item => item.group === 'mężczyźni')
      return { ...state, dataToShow, dataFiltered: [] }
    }

  }

  // getting item from id /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (action.type === GET_ITEM_FROM_ID) {
    return { ...state, itemPage: state.shopData.filter(i => i.id === action.payload.id)[0] }
  }


  // adding to cart ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

  // modify cart items ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if (action.type === CHANGE_ITEM_COUNT) {
    let newCart = [...state.cart]

    let itemId = newCart.findIndex(i => i.id === action.payload.id && i.orderSize === action.payload.size)
    let item = newCart[itemId]


    if (action.payload.operator === 'remove') {
      newCart.splice(itemId, 1)
      console.log('removing')
    }

    if (action.payload.operator === 'increase' || action.payload.operator === 'decrease') {

      // action.payload.operator === 'increase' ? console.log('increasing') : console.log('decreasing')

      action.payload.operator === 'increase' ?
        item.amount++
        :
        item.amount--

      newCart.splice(itemId, 1, item)

    }

    newCart = newCart.filter(item => item.amount >= 1)

    localStorage.setItem('cartBento', JSON.stringify(newCart))

    return { ...state, cart: [...newCart] }
  }



  // filters //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if (action.type === DATA_FILTER) {
    console.log(action.payload.filters)
    const filters = action.payload.filters
    let fullData = state.dataToShow

    let dataFiltered = []

    let dataToFilter = fullData

    // let helpData = []
    // filter by type
    dataToFilter.forEach((item) => {
      let obj = { name: item.type, value: true }
      filters.type.forEach(one => {
        if (one.name === obj.name && one.value === obj.value) {
          dataFiltered = [...dataFiltered, item]
        }
      })
    })

    // filter by color 
    // dataFiltered.length === 0 ? dataToFilter = fullData : dataToFilter = [...dataFiltered]

    if (dataFiltered.length === 0) {
      dataToFilter = fullData
    } else {
      dataToFilter = [...dataFiltered]
      dataFiltered = []
    }

    console.log(dataFiltered)
    dataToFilter.forEach((item) => {
      let obj = { name: item.color, value: true }
      filters.color.forEach(one => {
        if (one.name === obj.name && one.value === obj.value) {
          console.log('przekazuje')
          dataFiltered = [...dataFiltered, item]
        }
      })
    })

    dataFiltered.length === 0 ? dataFiltered = dataToFilter : dataFiltered = [...dataFiltered]

    console.log(dataFiltered)
    // dataFiltered.length === 0 ? dataFiltered = fullData : dataFiltered = [...dataFiltered]
    // price filter

    dataFiltered = dataFiltered.filter(item => item.price - 1 <= filters.price)


    // news filter 

    // dataFiltered.length === 0 ? dataFiltered = fullData : dataFiltered = [...dataFiltered]

    filters.new ? dataFiltered = dataFiltered.filter(item => item.isNew) : dataFiltered = [...dataFiltered]








    dataFiltered = [...new Set(dataFiltered)]

    if (dataFiltered.length === 0) {
      alert('Brak przedmiotów pasujących do wybranych filtrów. Pokazuje wszystkie')
      dataFiltered = fullData
    }

    return { ...state, dataFiltered }
  }

  // sort ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (action.type === DATA_SORT) {
    const sortType = action.payload.sortType
    let dataFiltered

    state.dataFiltered.length === 0 ? dataFiltered = state.dataToShow : dataFiltered = state.dataFiltered

    if (sortType === 'najnizsza') {
      const sortFunction = (a, b) => {
        if (a.price > b.price) return 1
        if (a.price < b.price) return -1
        if (a.price === b.price) return 0
      }
      dataFiltered = dataFiltered.sort((a, b) => sortFunction(a, b))
    }

    if (sortType === 'najwyzsza') {
      const sortFunction = (a, b) => {
        if (a.price < b.price) return 1
        if (a.price > b.price) return -1
        if (a.price === b.price) return 0
      }
      dataFiltered = dataFiltered.sort((a, b) => sortFunction(a, b))
    }

    if (sortType === 'alfabet') {
      const sortFunction = (a, b) => {
        let x = a.name
        let y = b.name
        if (x > y) return 1
        if (x < y) return -1
        if (x === y) return 0
      }
      dataFiltered = dataFiltered.sort((a, b) => sortFunction(a, b))
    }
    console.log(dataFiltered)
    return { ...state, dataFiltered }

  }

  return state
}

export default reducer