import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import thunk from 'redux-thunk'
import { characterReducer, IUserState } from '../reducers/UserReducer'

// an interface for the application state
export interface IAppState {
  Userstate: IUserState
}

// root reducer
const rootReducer = combineReducers<IAppState>({
  Userstate: characterReducer,
})

// configure store function of type `IAppState`
export default function configureStore(): Store<IAppState, any> {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk))
  return store
}
