import { 
  PROCESS_REFRESH,
  RESET_PAYLOAD
} from '../actions/types'

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
      case PROCESS_REFRESH:
      return {
        ...state,
        items: action.payload
      }
      case RESET_PAYLOAD:
      return {
        ...state,
        items: initialState.items
      }
    default:
      return state
  }
}