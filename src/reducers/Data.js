import {
  ADD_COLLECTION,
  ADD_COLLECTION_MEDIA,
  ADD_MEDIA,
  ADD_SERIES,
  ADD_SERIES_COLLECTION,
  SET_ERROR,
  SET_HISTORY,
  SET_LIST,
  SET_QUEUE,
  SET_SEARCH_IDS,
  UPDATE_SERIES_QUEUE
} from '../actions'

const addToObj = (state, key, data) => ({
  ...state,
  [key]: {
    ...state[key],
    ...data
  }
})

export default function Data (state = {
  searchIds: [],
  series: {},
  seriesCollections: {},
  media: {},
  collections: {},
  collectionMedia: {},
  history: [],
  queue: [],
  list: {
    type: '',
    list: []
  },

  error: false
}, action) {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case SET_SEARCH_IDS:
      return {
        ...state,
        searchIds: action.payload
      }
    case SET_QUEUE:
      return {
        ...state,
        queue: action.payload
      }
    case SET_HISTORY:
      return {
        ...state,
        history: action.payload
      }
    case SET_LIST:
      return {
        ...state,
        list: action.payload
      }
    case UPDATE_SERIES_QUEUE:
      return {
        ...state,
        series: {
          [action.payload.id]: {
            ...state.series[action.payload.id],
            in_queue: action.payload.inQueue
          }
        }
      }
    case ADD_SERIES:
      return addToObj(state, 'series', action.payload)
    case ADD_SERIES_COLLECTION:
      return addToObj(state, 'seriesCollections', action.payload)
    case ADD_MEDIA:
      return addToObj(state, 'media', action.payload)
    case ADD_COLLECTION:
      return addToObj(state, 'collections', action.payload)
    case ADD_COLLECTION_MEDIA:
      return addToObj(state, 'collectionMedia', action.payload)
    default:
      return state
  }
}
