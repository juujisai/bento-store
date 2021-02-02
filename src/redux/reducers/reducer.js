import { SWITCH_NAV_VISIBILITY } from '../actions/actions'


function reducer(state, action) {
  console.log(state)
  if (action.type === SWITCH_NAV_VISIBILITY) {
    return { ...state, navOpen: !state.navOpen }
  }
  return state
}

export default reducer